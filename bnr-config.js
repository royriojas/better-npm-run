module.exports = function() {
  return {
    eslint: {
      cmd: function(args) {
        return 'eslint lib/**/*.js test/**/*.js *.js ' + (args.fix ? '--fix' : '');
      }
    },
    demo: {
      task: function (args) {
        var b = args.config.demo1.task();
        console.log('b is', b); // eslint-disable-line
      }
    },
    demo1: {
      task: function () {
        return Math.random() * 1000;
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
