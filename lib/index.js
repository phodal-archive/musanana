'use strict';

import Gru from './gru';

function Musanana (minions) {
	var gru = new Gru();
	if(gru.create('hello', 'tabs')){
		console.log(minions);
		this.createSuccessful = true;
		return true;
	}
	return true;
}

module.exports = Musanana;
