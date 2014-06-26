var spawn    = require('child_process').spawn
    duplexer = require('duplexer');

module.exports = function (cmd, args) {
  var spawned = spawn(cmd, args);

  return duplexer(spawned.stdin, spawned.stdout);
};
