'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Symbol key that carries API call info interpreted by this Redux middleware.
 *
 * @constant {symbol}
 * @access public
 * @default
 */
var CALL_API = (0, _symbol2.default)('Call API');

exports.default = CALL_API;