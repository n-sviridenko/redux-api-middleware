'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiMiddleware = exports.getJSON = exports.ApiError = exports.RequestError = exports.InternalError = exports.InvalidRSAA = exports.isValidRSAA = exports.validateRSAA = exports.isRSAA = exports.CALL_API = undefined;

var _CALL_API = require('./CALL_API');

var _CALL_API2 = _interopRequireDefault(_CALL_API);

var _validation = require('./validation');

var _errors = require('./errors');

var _util = require('./util');

var _middleware = require('./middleware');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CALL_API = _CALL_API2.default;
exports.isRSAA = _validation.isRSAA;
exports.validateRSAA = _validation.validateRSAA;
exports.isValidRSAA = _validation.isValidRSAA;
exports.InvalidRSAA = _errors.InvalidRSAA;
exports.InternalError = _errors.InternalError;
exports.RequestError = _errors.RequestError;
exports.ApiError = _errors.ApiError;
exports.getJSON = _util.getJSON;
exports.apiMiddleware = _middleware.apiMiddleware; /**
                                                    * Redux middleware for calling an API
                                                    * @module redux-api-middleware
                                                    * @requires isomorphic-fetch
                                                    * @requires lodash.isplainobject
                                                    * @exports {symbol} CALL_API
                                                    * @exports {function} isRSAA
                                                    * @exports {function} validateRSAA
                                                    * @exports {function} isValidRSAA
                                                    * @exports {error} InvalidRSAA
                                                    * @exports {error} InternalError
                                                    * @exports {error} RequestError
                                                    * @exports {error} ApiError
                                                    * @exports {function} getJSON
                                                    * @exports {ReduxMiddleWare} apiMiddleware
                                                    */

/**
 * @typedef {function} ReduxMiddleware
 * @param {object} store
 * @returns {ReduxNextHandler}
 *
 * @typedef {function} ReduxNextHandler
 * @param {function} next
 * @returns {ReduxActionHandler}
 *
 * @typedef {function} ReduxActionHandler
 * @param {object} action
 * @returns undefined
 */