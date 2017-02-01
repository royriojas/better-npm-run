module.exports = function() {
  return {
    eslint: {
      cmd: function(params) {
        var args = params.args;
        return 'eslint lib/**/*.js test/**/*.js *.js ' + (args.fix ? '--fix' : '');
      }
    },
    demo: {
      task: function (params) {
        var b = params.config.demo1.task();
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
