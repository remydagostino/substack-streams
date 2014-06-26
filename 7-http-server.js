var through = require('through')
    http    = require('http');

var port = process.argv[2];

http.createServer(function(req, res) {
  req
  .pipe(through(function(buf) {
    this.queue(buf.toString().toUpperCase());
  }))
  .pipe(res);
})
.listen(port);
