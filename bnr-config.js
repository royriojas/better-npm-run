module.exports = function() {
  return {
    eslint: {
      cmd: function(args) {
        return 'eslint lib/**/*.js test/**/*.js *.js ' + (args.fix ? '--fix' : '');
      }
    }
  };
};
