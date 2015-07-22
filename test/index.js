'use strict';
import assert from 'assert';
import Musanana from '../lib';
import fs from "fs";
import path from "path";

describe('musanana', function () {
  it('should have unit test!', function () {
    var lex = fs.readFileSync(path.normalize("test/spec.minion"), 'utf8');
    var musanana = new Musanana(lex);
    musanana.run();
    assert(musanana.createSuccessful, true);
  });
});
