var trumpet = require('trumpet'),
    through = require('through');

var tr = trumpet(),
    loud;

// Loud is a stream of all the elements that match the selector '.loud'
// - It will emit the inner content of anything that matches
// - It will replace the inner content with anything that writes to it
loud = tr.select('.loud').createStream();

loud
// Read it out and make it uppercase
.pipe(through(function(buf) {
  this.queue(buf.toString().toUpperCase());
}))
// Pipe it back in to replace the previous contents
.pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);
