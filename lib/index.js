'use strict';

import Gru from './gru';
import Minions from './minions';

function Musanana(text) {
	var lines = text.toString().split('\n');
	var gru = new Gru();
	var minions = new Minions();
	var appName = 'hello';
	var appType = 'tabs';
	var appTypeRegex = /(tabs|sidemenu|blank) mobile application/;
	var appNameRegex = /application call (\w+)/;

	if(appTypeRegex.test(lines[0])){
		appType = appTypeRegex.exec(lines[0])[1];
	}

	if(appNameRegex.test(lines[1])){
		appName = appNameRegex.exec(lines[1])[1];
	}

	if (gru.create(appName, appType)) {
		console.log(appName, appType, minions);
		this.createSuccessful = true;
		return true;
	}
	return true;
}

module.exports = Musanana;
