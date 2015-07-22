'use strict';

import Gru from './gru';
import Minions from './minions';

var gru = new Gru();
var minions = new Minions();

var appName = 'hello';
var appType = 'tabs';
var tabName = 'tab';
let appTypeRegex = /(tabs|sidemenu|blank) mobile application/;
let appNameRegex = /application call (\w+)/;
let tabNameRegex = / (\w+) (tabs|sidemenu) menu/;

function Musanana(text) {
	var lines = text.toString().split('\n');

	if (appTypeRegex.test(lines[0])) {
		appType = appTypeRegex.exec(lines[0])[1];
	}

	if (appNameRegex.test(lines[1])) {
		appName = appNameRegex.exec(lines[1])[1];
	}

	if (tabNameRegex.test(lines[2])) {
		tabName = tabNameRegex.exec(lines[2])[1];
	}

	this.appType = appType;
	this.appName = appName;
	this.tabName = tabName;
	console.log('=============');
}

Musanana.prototype.run = function () {
	minions.setApplicationName(this.appName);
	if (gru.create(this.appName, this.appType)) {
		this.createSuccessful = true;
		return true;
	}
};

module.exports = Musanana;
