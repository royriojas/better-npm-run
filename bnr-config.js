module.exports = function() {
  return {
    eslint: {
      cmd: function(args) {
        return 'eslint lib/**/*.js test/**/*.js *.js ' + (args.fix ? '--fix' : '');
      }
    },
    test: function(args) {
      return {
        cmd: './test-cmd.sh',
        env: {
          DEBUG: args.dbg
        }
      };
    }
  };
};
