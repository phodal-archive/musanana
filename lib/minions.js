'use strict';
var fs = require('fs');
var swig = require('swig');

var Minions = function () {
};

Minions.prototype.setApplicationName = function (appName) {
	var FILENAME = 'Minion/config.xml';
	fs.readFile(FILENAME, 'utf8', function (err, data) {
		if (err) {
			return console.log(err);
		}
		var result = data.replace(/<name>(\w+)<\/name>/g, '<name>' + appName + '</name>');

		fs.writeFile(FILENAME, result, 'utf8', function (error) {
			if (error) {
				return console.log(error);
			}
		});
	});
};

Minions.prototype.addMenu = function (appType, tabName) {
	var FILENAME = 'Minion/www/templates/tabs.html';
	var tabsMenuTemplate = swig.compileFile('lib/templates/' + appType + '-menu.html');
	var tabsMenu = tabsMenuTemplate({
		title: tabName
	});
	var tabsTemplate = swig.compileFile('lib/templates/' + appType + '.html', {autoescape: false});
	var tabs = tabsTemplate({
		tabs: tabsMenu
	});

	fs.writeFile(FILENAME, tabs, 'utf8', function (error) {
		if (error) {
			return console.log(error);
		}
	});
};

module.exports = Minions;
