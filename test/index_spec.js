'use strict';
var assert = require('assert');
var Musanana = require('../lib/index');

describe('Musanana', function () {
	var lex, musanana;

	lex = "I want a tabs mobile application\n" +
	"This application call Hello\n" +
	"In this application, I need a dashboard tabs menu\n" +
	"In dashboard menu, I want to show all data from library";
	musanana = new Musanana(lex);

	it('should create successful', function () {
		assert.equal(musanana.appName, 'Hello');
		assert.equal(musanana.appType, 'tabs');
		assert.equal(musanana.tabName, 'dashboard');
	});

	it('should create successful', function () {
		musanana.run();
		assert.equal(musanana.createSuccessful, true);
	});
});
