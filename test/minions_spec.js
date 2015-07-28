'use strict';
var assert = require('assert');
var fs = require('fs');
var Minions = require('../lib/minions');

describe('Minions', function () {
	var minions = new Minions();

	it('should set application name correctly', function (done) {
		var FILENAME = 'Minion/config.xml';
		minions.setApplicationName('FD Huang');

		setTimeout(function () {
			fs.readFile(FILENAME, 'utf8', function (err, data) {
				if (err) {
					return console.log(err);
				}
				assert(data.indexOf('<name>FD Huang</name>') > -1);
				done();
			});
		}, 100);
	});

	it('should able to create tabs', function (done) {
		var FILENAME = 'Minion/www/templates/tabs.html';
		minions.addMenu('tabs', 'abcdefghijk');

		setTimeout(function () {
			fs.readFile(FILENAME, 'utf8', function (err, data) {
				if (err) {
					return console.log(err);
				}
				assert(data.indexOf('abcdefghijk') > -1);
				done();
			});
		}, 100);
	});
});
