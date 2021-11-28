const sass = require('sass');
var fs = require('fs');

sass.render({
  file: "modal.scss"
}, function(err, result) {
  if (err) {
    // ...
  } else {

    fs.appendFile('modal.css', result.css.toString(), function (err) {
      if (err) throw err;
    });
  }
});