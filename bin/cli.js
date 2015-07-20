var parser = require("nomnom");
parser.option('debug', {
	abbr: 'd',
	flag: true,
	help: 'Print debugging info',
	callback: function () {
		console.log("debug");
	}
});
parser.parse();
