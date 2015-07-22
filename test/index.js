'use strict';
import assert from 'assert';
import Musanana from '../lib';
import fs from "fs";
import path from "path";

describe('musanana', function () {
  var lex, musanana;
  beforeEach(function () {
    lex = fs.readFileSync(path.normalize("test/spec.minion"), 'utf8');
    musanana = new Musanana(lex);
  });

  it('should create successful', function () {
    assert(musanana.appName, 'Minion');
    assert(musanana.appType, 'tabs');
    assert(musanana.tabName, 'dashboard');
  });

  it('should create successful', function () {
    musanana.run();
    assert(musanana.createSuccessful, true);
  });
});
