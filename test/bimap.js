'use strict';

var S = require ('..');

var eq = require ('./internal/eq');


test ('bimap', function() {

  eq (typeof S.bimap, 'function');
  eq (S.bimap.length, 1);
  eq (S.bimap.toString (), 'bimap :: Bifunctor p => (a -> b) -> (c -> d) -> p a c -> p b d');

  eq (S.bimap (S.toUpper) (S.add (1)) (S.Left ('xxx')), S.Left ('XXX'));
  eq (S.bimap (S.toUpper) (S.add (1)) (S.Right (1000)), S.Right (1001));

});
