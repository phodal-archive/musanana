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
	var Musanana = require('../lib/index');
	var text;

	if (opts.file || opts.f) {
		text = fs.readFileSync(path.normalize(opts.file), 'utf8');
		var musanana = new Musanana(text);
		musanana.run();
	}

};


if (require.main === module) {
	var opts = getCommandlineOptions();
	cli.main(opts);
}