
# @redisrupt/better-npm-run - Changelog
## v0.0.17
- **Refactoring**
  - use ms instead of no unit - [82dff75]( undefined/commit/82dff75 ), [Roy Riojas](https://github.com/Roy Riojas), 03/01/2017 19:11:30

    
## v0.0.16
- **Bug Fixes**
  - Use the name of the task instead of the command on 'ok' log - [c240604]( undefined/commit/c240604 ), [Roy Riojas](https://github.com/Roy Riojas), 03/01/2017 19:02:31

    
## v0.0.15
- **Features**
  - Add bump scripts - [57dccaf]( undefined/commit/57dccaf ), [Roy Riojas](https://github.com/Roy Riojas), 03/01/2017 18:30:34

    
  - Support external config - [de9b9b4]( undefined/commit/de9b9b4 ), [Roy Riojas](https://github.com/Roy Riojas), 03/01/2017 18:04:45

    - ability to specify several commands to be executed in sequence
    - ability to specify an external file with the tasks config, exported as
      a function or as an object.
    - add `npm bin` output to the `process.env.PATH`
    
- **Bug Fixes**
  - Move dep to devDependencies - [4ebaf7e]( undefined/commit/4ebaf7e ), [Roy Riojas](https://github.com/Roy Riojas), 03/01/2017 18:28:52

    
- **Other changes**
  - 0.0.13 - [cd69d87]( undefined/commit/cd69d87 ), [Andrew Turner](https://github.com/Andrew Turner), 28/10/2016 13:06:28

    
  - environment variable precedence and behavior ([#58](undefined/issues/58), reverts [#55](undefined/issues/55)) - [82a1f0e]( undefined/commit/82a1f0e ), [Andrew Turner](https://github.com/Andrew Turner), 28/10/2016 13:04:22

    
  - enforce consistent indentation with editorconfig - [8f37e8a]( undefined/commit/8f37e8a ), [Andrew Turner](https://github.com/Andrew Turner), 26/10/2016 11:12:53

    
  - 0.0.12 - [239ceb8]( undefined/commit/239ceb8 ), [Ben Orozco](https://github.com/Ben Orozco), 24/10/2016 22:48:35

    
  - specify configuration sources order - [6aabacd]( undefined/commit/6aabacd ), [just-boris](https://github.com/just-boris), 24/10/2016 15:44:28

    
  - 0.0.11 - [04017dd]( undefined/commit/04017dd ), [Ben Orozco](https://github.com/Ben Orozco), 18/08/2016 13:31:32

    
  - add support for command string, break out tests, update documentation - [5324bf7]( undefined/commit/5324bf7 ), [Andrew Turner](https://github.com/Andrew Turner), 09/08/2016 09:58:45

    
  - 0.0.10 - [190abe2]( undefined/commit/190abe2 ), [Ben Orozco](https://github.com/Ben Orozco), 23/07/2016 17:22:30

    
  - Switch to inheriting the stdin pipe as well as the stdout and stderr ones ([#46](undefined/issues/46)) - [1732ad2]( undefined/commit/1732ad2 ), [Tom Finlayson](https://github.com/Tom Finlayson), 23/07/2016 17:19:18

    
  - 0.0.9 - [9a82f79]( undefined/commit/9a82f79 ), [Ben Orozco](https://github.com/Ben Orozco), 21/06/2016 19:32:22

    
  - fix [#42](undefined/issues/42). Add shorter cli alias - [d0aaec1]( undefined/commit/d0aaec1 ), [Roy Riojas](https://github.com/Roy Riojas), 19/06/2016 12:47:37

    
  - release 0.0.8 - [d4c8cf1]( undefined/commit/d4c8cf1 ), [Ben Orozco](https://github.com/Ben Orozco), 01/03/2016 11:30:10

    
  - fix [#36](undefined/issues/36) 'is not recognized as an internal or external command' - [60b37c2]( undefined/commit/60b37c2 ), [Artur Dudnik](https://github.com/Artur Dudnik), 01/03/2016 11:23:00

    
  - release 0.0.7 - [5e9e28e]( undefined/commit/5e9e28e ), [Benjamin Orozco](https://github.com/Benjamin Orozco), 08/02/2016 11:36:06

    Changelog:
      - Use dot-env package
      - remove 'endofline' package
    
  - remove 'endofline' package - [9cc04a4]( undefined/commit/9cc04a4 ), [Goran Gajic](https://github.com/Goran Gajic), 08/02/2016 11:22:26

    because it's not used anymore
    
  - Suppress warning when no .env file is present - [8fb0a7f]( undefined/commit/8fb0a7f ), [Gilles Castel](https://github.com/Gilles Castel), 08/02/2016 10:19:07

    
  - Use dot-env package - [47b0e3a]( undefined/commit/47b0e3a ), [Gilles Castel](https://github.com/Gilles Castel), 08/02/2016 08:49:02

    
  - 0.0.6 release - [a998458]( undefined/commit/a998458 ), [Benjamin Orozco](https://github.com/Benjamin Orozco), 02/02/2016 11:04:12

    CHANGELOG:
    
      - remove \r if found when reading .env
    
  - remove \r if found - [1b05e08]( undefined/commit/1b05e08 ), [Goran Gajic](https://github.com/Goran Gajic), 31/01/2016 18:44:12

    
  - add cross-env - [7b302bc]( undefined/commit/7b302bc ), [Benjamin Orozco](https://github.com/Benjamin Orozco), 24/01/2016 01:41:40

    
  - Add Gitter badge - [8526fb8]( undefined/commit/8526fb8 ), [The Gitter Badger](https://github.com/The Gitter Badger), 05/01/2016 13:52:40

    
  - Remove "build" betterScript from README.md - [ded0a3a]( undefined/commit/ded0a3a ), [Chris Arnesen](https://github.com/Chris Arnesen), 21/12/2015 13:28:50

    That feature hasn't been implemented yet.
    
    https://github.com/benoror/better-npm-run/issues/18
  - 0.0.5 release - [7776f4c]( undefined/commit/7776f4c ), [Benjamin Orozco](https://github.com/Benjamin Orozco), 10/12/2015 17:15:02

    - Improve README.md via 2dafaf (<a target="_blank" class="info-link" href="undefined/issues/25"><span>#25</span></a>)
    - Pipe stdout, stderr via e349d4 (<a target="_blank" class="info-link" href="undefined/issues/24"><span>#24</span></a>)
    - Support colors via 2e15ab
    
  - Add unix (sh -c) and win32 (cmd /c) to command head - [2e15ab2]( undefined/commit/2e15ab2 ), [Jhen](https://github.com/Jhen), 10/12/2015 15:20:26

    
  - Update README.md - [2dafaff]( undefined/commit/2dafaff ), [Benjamin Orozco](https://github.com/Benjamin Orozco), 09/12/2015 12:02:28

    Fixes https://github.com/benoror/better-npm-run/issues/25
  - Pipe stdout, stderr - [e349d41]( undefined/commit/e349d41 ), [Jhen](https://github.com/Jhen), 08/12/2015 09:07:28

    
  - Fix indentation and syntax error in JSON example in `README.md` - [1e2dff8]( undefined/commit/1e2dff8 ), [jpersson](https://github.com/jpersson), 20/11/2015 16:42:58

    
  - 0.0.4 - [cf49752]( undefined/commit/cf49752 ), [Benjamin Orozco](https://github.com/Benjamin Orozco), 10/11/2015 18:30:06

    
  - add object-assign polyfill - [3a119ee]( undefined/commit/3a119ee ), [Goran Gajic](https://github.com/Goran Gajic), 10/11/2015 13:31:51

    because older versions of node does not support native Object.assign
    
  - add ability to pass through CLI arguments [#20](undefined/issues/20) - [edfa889]( undefined/commit/edfa889 ), [Goran Gajic](https://github.com/Goran Gajic), 08/11/2015 04:30:10

    
  - add simple test - [2996a46]( undefined/commit/2996a46 ), [Goran Gajic](https://github.com/Goran Gajic), 07/11/2015 14:34:58

    
  - add ability to include .env files from the project root - [6df8904]( undefined/commit/6df8904 ), [Goran Gajic](https://github.com/Goran Gajic), 07/11/2015 14:34:58

    
  - switch from exec to spawn child_process - [7cb31d6]( undefined/commit/7cb31d6 ), [Goran Gajic](https://github.com/Goran Gajic), 07/11/2015 14:34:25

    
  - use tabs everywhere be more consistent - [41b5d71]( undefined/commit/41b5d71 ), [Goran Gajic](https://github.com/Goran Gajic), 26/10/2015 09:21:54

    
  - default env if not present - [29307a9]( undefined/commit/29307a9 ), [Goran Gajic](https://github.com/Goran Gajic), 26/10/2015 09:21:38

    
  - convert from dos line endings to unix - [98cbc3c]( undefined/commit/98cbc3c ), [Goran Gajic](https://github.com/Goran Gajic), 26/10/2015 08:12:41

    so we can run better-npm-run directly
    ```better-npm-run start```
    instead of
    ```node ./node_modules/.bin/better-npm-run start```
    
  - 0.0.3 - [6f001d9]( undefined/commit/6f001d9 ), [Benjamin Orozco](https://github.com/Benjamin Orozco), 23/10/2015 17:02:16

    
  - Handle exit codes - [3649668]( undefined/commit/3649668 ), [Dan Schuman](https://github.com/Dan Schuman), 23/10/2015 16:48:13

    
  - Alternatives message - [e9eaed7]( undefined/commit/e9eaed7 ), [Benjamin Orozco](https://github.com/Benjamin Orozco), 21/10/2015 12:14:45

    
  - 0.0.2 - [c971141]( undefined/commit/c971141 ), [Benjamin Orozco](https://github.com/Benjamin Orozco), 21/08/2015 12:52:11

    
  - npm badge - [b3a95c9]( undefined/commit/b3a95c9 ), [Benjamin Orozco](https://github.com/Benjamin Orozco), 16/06/2015 09:49:24

    
  - Initial commit - [65a5b01]( undefined/commit/65a5b01 ), [Benjamin Orozco](https://github.com/Benjamin Orozco), 15/06/2015 17:41:07

    
- **undefined**
  - http://makeapullrequest.com/ - [83918a7]( undefined/commit/83918a7 ), [Benjamin Orozco](https://github.com/Benjamin Orozco), 09/02/2016 20:25:15

    
  - add SemaphoreCI badge - [57759c1]( undefined/commit/57759c1 ), [Benjamin Orozco](https://github.com/Benjamin Orozco), 08/02/2016 13:48:59

    Fixes: https://github.com/benoror/better-npm-run/issues/32
    
  - better handling of stderr - [607e522]( undefined/commit/607e522 ), [Benjamin Orozco](https://github.com/Benjamin Orozco), 21/08/2015 12:51:58

    
