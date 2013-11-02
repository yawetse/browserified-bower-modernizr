var browserify = require('browserify'), 
	fs = require('fs'),
	path = require('path'),
	shim = require('browserify-shim'), 
	builtFile = path.join(__dirname, '../bower_modernizr.js');

shim(browserify(), {
  modernizr: { path: '../../bower_components/modernizr/modernizr.js', exports: 'Modernizr' }
})
// .require(require.resolve('./main.js'), { entry: true })
.bundle(function (err, src) {
  if (err) return console.error(err);

  fs.writeFileSync(builtFile, src);
});