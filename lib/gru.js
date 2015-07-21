'use strict';
var shell = require('shelljs');

var Gru = function (){};

Gru.prototype.check = function () {
	if (!shell.which('git')) {
		shell.echo('Sorry, this script requires git');
		shell.exit(1);
	}

	if (!shell.which('ionic')) {
		shell.echo('Sorry, this script requires ionic');
		shell.exit(1);
	}

	shell.mkdir('-p', 'Minion');
	return true;
};

module.exports = Gru;
