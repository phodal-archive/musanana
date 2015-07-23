'use strict';
var assert = require('assert');
var fs = require('fs');
var Minions = require('../lib/minions');

describe('Minions', function () {
	var minions = new Minions();
	var FILENAME = 'Minion/config.xml';

	it('should set application name correctly', function (done) {
		minions.setApplicationName('FD Huang');
		fs.readFile(FILENAME, 'utf8', function (err, data) {
			if (err) {
				return console.log(err);
			}
			assert(data.indexOf('<name>FD Huang</name>') > -1);
			done();
		});
	});
});
