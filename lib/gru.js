'use strict';
var shell = require('shelljs');
var PATHNAME = 'Minion';
var Gru = function (){};

Gru.prototype.init = function (appName, appType) {
	function checkMethod(method) {
		if (!shell.which(method)) {
			shell.echo('Sorry, this script requires ' + method);
			shell.exit(1);
		}
	}

	checkMethod('git');
	checkMethod('ionic');

	var ionicStart = 'ionic start ' + PATHNAME + ' ' + appType;
	shell.exec(ionicStart);
	shell.cd(PATHNAME);
	var ionicSetupSass = 'ionic setup sass';
	shell.exec(ionicSetupSass);
	//var ionicRunServer = 'ionic serve';
	//shell.exec(ionicRunServer);
	shell.cd('../');
	shell.exec('touch .minion');

	return true;
};

Gru.prototype.create = function (appName, appType) {
	if(!shell.test('-e', '.minion')) {
		this.init(appName, appType);
	} else {
		console.log('file already exist');
	}
	return true;
};

module.exports = Gru;
