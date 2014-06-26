var through = require('through'),
    split   = require('split');

var count = 0;

process.stdin
.pipe(split())
.pipe(through(function(buf) {
  count += 1;

  if ((count % 2) == 0) {
    this.queue(buf.toString().toUpperCase() + '\n');
  }
  else {
    this.queue(buf.toString().toLowerCase() + '\n');
  }
}))
.pipe(process.stdout);
