'use strict';
var shell = require('shelljs');
var PATHNAME = 'Minion';
var colors = require('colors');
var Gru = function (){};

Gru.prototype.init = function (appName, appType) {
	var ionicStart = 'ionic start ' + PATHNAME + ' ' + appType;
	var ionicSetupSass = 'ionic setup sass';

	function checkMethod(method) {
		if (!shell.which(method)) {
			shell.echo('Sorry, this script requires ' + method);
			shell.exit(1);
		}
	}

	checkMethod('git');
	checkMethod('ionic');

	shell.exec(ionicStart);
	shell.cd(PATHNAME);
	shell.exec(ionicSetupSass);
	shell.cd('../');
	shell.exec('touch .minion');
};

Gru.prototype.run = function() {
	var ionicRunServer = 'ionic serve';

	shell.cd(PATHNAME);
	shell.exec(ionicRunServer);
};

Gru.prototype.create = function (appName, appType) {
	if(!shell.test('-e', '.minion')) {
		this.init(appName, appType);
	} else {
		console.log(colors.red.underline('file already exist'));
	}
	return true;
};

module.exports = Gru;
