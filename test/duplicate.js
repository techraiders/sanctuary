'use strict';

var S = require ('..');

var eq = require ('./internal/eq');


test ('duplicate', function() {

  eq (typeof S.duplicate, 'function');
  eq (S.duplicate.length, 1);
  eq (S.duplicate.toString (), 'duplicate :: Extend w => w a -> w (w a)');

  eq (S.duplicate ([]), []);
  eq (S.duplicate ([1]), [[1]]);
  eq (S.duplicate ([1, 2]), [[1, 2], [2]]);
  eq (S.duplicate ([1, 2, 3]), [[1, 2, 3], [2, 3], [3]]);
  eq (S.duplicate (S.reverse) ([1, 2]) ([3, 4]), [4, 3, 2, 1]);
  eq (S.duplicate (S.Just (1)), S.Just (S.Just (1)));

});
