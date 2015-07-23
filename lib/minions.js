'use strict';
var fs = require('fs');
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
			if (error){
				return console.log(error);
			}
		});
	});
};

module.exports = Minions;
