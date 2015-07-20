function getCommandlineOptions () {
	var version = require('../package.json').version;
	return require("nomnom")
		.option('debug', {
			abbr: 'd',
			flag: true,
			help: 'Print debugging info',
			callback: function () {
				console.log("debug");
			}
		})
		.option('file', {
			flag : true,
			position : 0,
			help : 'file containing a minion'
		})
		.option('version', {
			abbr: 'V',
			flag: true,
			help: 'Print debugging info',
			callback: function () {
				return version;
			}
		})
		.parse();
}


var cli = module.exports;

cli.main = function cliMain(opts) {
	opts = opts || {};

	var fs = require('fs');
	var path = require('path');

	var lex;
	if (opts.file || opts.f) {
		console.log(path.normalize(opts.file));
		lex = fs.readFileSync(path.normalize(opts.file), 'utf8');
	}
	console.log(lex);
};


if (require.main === module) {
	var opts = getCommandlineOptions();
	cli.main(opts);
}