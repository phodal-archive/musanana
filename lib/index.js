'use strict';

import Gru from './gru';

function Musanana (minions) {
	var gru = new Gru();
	if(gru.check()){
		this.check = true;
		return 'hello,world' + minions;
	}
	return false;
}

module.exports = Musanana;
