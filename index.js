#!/usr/bin/env node

var cpExec = require( 'child_process' ).exec;
var logger = require('clix-logger/logger');
var assign = require('object-assign');

var path = require('path');
var exec = require('./lib/exec.js');
var join = path.join;

var addNPMBinToPath = function ( cb ) {
  cpExec( 'npm bin', function ( error, stdout, stderr ) {
    if ( error ) {
      logger.error( 'received error', error );
      stderr && logger.error( stderr );
      return;
    }

    process.env.PATH += '' + path.delimiter + stdout.trim();

    cb && cb();
  } );
};


var tryRequire = function(pkgName, defaultValue) {
  var ret;
  try {
    ret = require(pkgName);
  } catch (ex) {
    logger.warn('could not require:', pkgName);
    if (defaultValue) {
      ret = defaultValue;
    }
  }
  return ret;
};

var main = function () {
  logger.subtle('running bnr in', process.cwd());

  var fullPackagePath = join(process.cwd(), 'package.json');
  var pkg = require(fullPackagePath);

  var betterScriptsFromConfig;
  if (pkg.bnrConfig) {
    var pathToConfig = path.resolve(process.cwd(), pkg.bnrConfig);
    logger.subtle('loading bnrConfig', pathToConfig);
    var config = tryRequire(pathToConfig);
    if (config) {
      if (typeof config === 'function') {
        config = config();
      }
    }
    betterScriptsFromConfig = config;
  }

  var betterScripts = pkg.betterScripts;

  if (betterScriptsFromConfig) {
    betterScripts = assign({}, betterScripts, betterScriptsFromConfig);
  }

  var commandName = process.argv[2];

  if (!Object.keys(betterScripts).length === 0) {
    logger.error('ERROR: No betterScripts found!');
    process.exit(1);
  }
  if (!commandName) {
    logger.error('ERROR: No script name provided!');
    process.exit(1);
  }
  if (!betterScripts[commandName]) {
    logger.error('ERROR: No betterScript with name "' + commandName + '" was found!');
    process.exit(1);
  }

  logger.subtle('Executing script: ' + commandName);

  exec(betterScripts[commandName], commandName);
};

addNPMBinToPath(main);
