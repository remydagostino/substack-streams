var duplexer = require('duplexer'),
    through  = require('through');

module.exports = function (counter) {
  var counts = {};

  return duplexer(
    through(
      function(row) {
        counts[row.country] = (counts[row.country] || 0) + 1;
      },
      function() {
        counter.setCounts(counts);
      }
    ),
    counter
  );
};
