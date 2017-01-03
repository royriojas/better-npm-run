var logger = require('clix-logger/logger');
require('dotenv').config({silent: true});

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


var getCommand = function (script) {
  if (typeof script === 'string') return script;

  var commands = script.cmd || script.command;

  if (Array.isArray(commands)) {
    // TODO: see how commands are concatenated in win32
    // for now this should work
    return commands.join(' && ');
  }

  return commands;
};


module.exports = function exec(script, theCommand) {

  var argv = process.argv.splice(3);
  var command = getCommand(script);

  if (!command) {
    logger.error('No command or cmd key defined in "' + theCommand + '" entry');
    process.exit(1);
  }

  command = command + ' ' + argv.join(' ');

  script.env = script.env || {};

  var env = objectAssign({}, process.env, script.env);

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
    logger.ok(command, 'took:', pretty(diff), '\n');
    process.exit(code);
  });

  cp.on('error', function(error) {
    var diff = timer.stop();
    logger.subtle(command, 'took:', pretty(diff));
    logger.error('bnr error:', error);
  });

};
