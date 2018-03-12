'use strict';

var S = require('..');

var eq = require('./internal/eq');
var map = require('./internal/map');


test('T', function() {

  eq(typeof S.T, 'function');
  eq(S.T.length, 1);
  eq(S.T.toString(), 'T :: a -> (a -> b) -> b');

  eq(S.T('!')(S.concat('foo')), 'foo!');
  eq(S.T('!')(S.concat('bar')), 'bar!');

});
