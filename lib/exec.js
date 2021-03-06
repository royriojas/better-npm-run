var logger = require('clix-logger/logger');
require('dotenv').config({silent: true});
var minimist = require('minimist');

var spawn = require('child_process').spawn;
var objectAssign = require('object-assign');

var pretty = require( 'pretty-time' );
var timeManager = {
  start: function () {
    var start = process.hrtime();
    return {
      stop: function () {
        var diff = process.hrtime( start );
        return (diff[ 0 ] * 1e9) + diff[ 1 ];
      }
    };
  }
};

var getCommand = function (script, argv, config) {
  if (typeof script === 'string') return { result: script, type: 'string' };

  var commands = typeof script === 'function' ? script : (script.cmd || script.command);

  if (typeof commands === 'function') {
    var p = commands.apply(null, [{ args: minimist(argv), rawArgs: argv, config: config }]);
    return Promise.resolve(p).then(function (res) {
      var theCommand;
      var theEnv;

      if (typeof res === 'string') {
        theCommand = res;
      }

      if (res && typeof res === 'object') {
        var cmd = res.cmd || res.command;
        theEnv = res.env;

        if (Array.isArray(cmd)) {
          cmd = cmd.join(' && ');
        }

        theCommand = cmd;
      }

      if (Array.isArray(res)) {
        theCommand = res.join(' && ');
      }

      return { type: 'function:result', result: theCommand, env: theEnv };
    });
  }

  if (Array.isArray(commands)) {
    // TODO: see how commands are concatenated in win32
    // for now this should work
    return { result: commands.join(' && '), type: 'array' };
  }

  return { result: commands };
};


module.exports = function exec(script, theCommand, config) {
  var argv = process.argv.splice(3);

  if (script && typeof script === 'object' && typeof script.task === 'function') {
    var fnTimer = timeManager.start();
    Promise.resolve(
      script.task({
        config: config,
        rawArgs: argv,
        args: minimist(argv)
      })
    ).then(function() {
      var diff = fnTimer.stop();
      logger.subtle(theCommand, 'took:', pretty(diff, 'ms'));
    }).catch(function(err) {
      var diff = fnTimer.stop();
      logger.subtle(theCommand, 'took:', pretty(diff, 'ms'));
      logger.error('error executing task', err);
    });

    // no need to send nothing thru the shell, just execute the function directly
    return;
  }

  Promise.resolve(getCommand(script, argv, config)).then(function (res) {
    res = res || {};
    var command = res.result;

    if (!command) {
      if (res.type !== 'function:result') {
        logger.error('No command or cmd key defined in "' + theCommand + '" entry');
        process.exit(1);
      } else {
        logger.subtle('no command to execute in the provided function');
        logger.ok('All done!');
        process.exit(0);
      }
    }

    // in the case of function the extra parameters were passed to the function
    // so no need to also concatenate then to the command that is passed to exec
    command = res.type === 'function:result' ? command : command + ' ' + argv.join(' ');

    var env = objectAssign({}, process.env, script.env, res.env);

    var sh = 'sh', shFlag = '-c';
    if (process.platform === 'win32') {
      sh = 'cmd';
      shFlag = '/c';
      command = '"' + command.trim() + '"';
    }

    logger.subtle('to be executed:', command);

    var timer = timeManager.start();

    var cp = spawn(sh, [shFlag, command], {
      env: env,
      windowsVerbatimArguments: process.platform === 'win32',
      stdio: 'inherit'
    });

    cp.on('close', function(code) {
      var diff = timer.stop();
      logger.ok(theCommand, 'took:', pretty(diff, 'ms'), '\n');
      process.exit(code);
    });

    cp.on('error', function(error) {
      var diff = timer.stop();
      logger.subtle(theCommand, 'took:', pretty(diff, 'ms'));
      logger.error('bnr error:', error);
    });
  });
};
