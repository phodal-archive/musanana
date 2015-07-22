'use strict';

import Gru from './gru';
import Minions from './minions';

function Musanana(text) {
	var lines = text.toString().split('\n');
	var gru = new Gru();
	var minions = new Minions();

	var appName = 'hello';
	var appType = 'tabs';
	var tabName = 'tab';

	var appTypeRegex = /(tabs|sidemenu|blank) mobile application/;
	var appNameRegex = /application call (\w+)/;
	var tabNameRegex = / (\w+) (tabs|sidemenu) menu/;

	if(appTypeRegex.test(lines[0])){
		appType = appTypeRegex.exec(lines[0])[1];
	}

	if(appNameRegex.test(lines[1])){
		appName = appNameRegex.exec(lines[1])[1];
	}

	if(tabNameRegex.test(lines[2])){
		tabName = tabNameRegex.exec(lines[2])[1];
	}

	console.log(appType, appName, tabName);
	minions.setApplicationName(appName);

	if (gru.create(appName, appType)) {
		console.log(appName, appType, tabName, minions);
		this.createSuccessful = true;
		return true;
	}
	return true;
}

Musanana.prototype.run = function () {

};

module.exports = Musanana;
