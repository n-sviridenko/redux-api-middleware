'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiMiddleware = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _lodash = require('lodash.isplainobject');

var _lodash2 = _interopRequireDefault(_lodash);

var _CALL_API = require('./CALL_API');

var _CALL_API2 = _interopRequireDefault(_CALL_API);

var _validation = require('./validation');

var _errors = require('./errors');

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A Redux middleware that processes RSAA actions.
 *
 * @type {ReduxMiddleware}
 * @access public
 */
function apiMiddleware(_ref) {
  var _this = this;

  var dispatch = _ref.dispatch;
  var getState = _ref.getState;

  return function (next) {
    return function () {
      var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(action) {
        var validationErrors, _callAPI, _requestType, callAPI, endpoint, headers, method, body, credentials, bailout, types, _normalizeTypeDescrip, _normalizeTypeDescrip2, requestType, successType, failureType, res;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if ((0, _validation.isRSAA)(action)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return', next(action));

              case 2:

                // Try to dispatch an error request FSA for invalid RSAAs
                validationErrors = (0, _validation.validateRSAA)(action);

                if (!validationErrors.length) {
                  _context.next = 7;
                  break;
                }

                _callAPI = action[_CALL_API2.default];

                if (_callAPI.types && Array.isArray(_callAPI.types)) {
                  _requestType = _callAPI.types[0];

                  if (_requestType && _requestType.type) {
                    _requestType = _requestType.type;
                  }
                  next({
                    type: _requestType,
                    payload: new _errors.InvalidRSAA(validationErrors),
                    error: true
                  });
                }
                return _context.abrupt('return');

              case 7:

                // Parse the validated RSAA action
                callAPI = action[_CALL_API2.default];
                endpoint = callAPI.endpoint;
                headers = callAPI.headers;
                method = callAPI.method;
                body = callAPI.body;
                credentials = callAPI.credentials;
                bailout = callAPI.bailout;
                types = callAPI.types;
                _normalizeTypeDescrip = (0, _util.normalizeTypeDescriptors)(types);
                _normalizeTypeDescrip2 = (0, _slicedToArray3.default)(_normalizeTypeDescrip, 3);
                requestType = _normalizeTypeDescrip2[0];
                successType = _normalizeTypeDescrip2[1];
                failureType = _normalizeTypeDescrip2[2];

                // Should we bail out?

                _context.prev = 20;

                if (!(typeof bailout === 'boolean' && bailout || typeof bailout === 'function' && bailout(getState()))) {
                  _context.next = 23;
                  break;
                }

                return _context.abrupt('return');

              case 23:
                _context.next = 31;
                break;

              case 25:
                _context.prev = 25;
                _context.t0 = _context['catch'](20);
                _context.next = 29;
                return (0, _util.actionWith)((0, _extends3.default)({}, requestType, {
                  payload: new _errors.RequestError('[CALL_API].bailout function failed'),
                  error: true
                }), [action, dispatch, getState()]);

              case 29:
                _context.t1 = _context.sent;
                return _context.abrupt('return', next(_context.t1));

              case 31:
                if (!(typeof endpoint === 'function')) {
                  _context.next = 42;
                  break;
                }

                _context.prev = 32;

                endpoint = endpoint(getState());
                _context.next = 42;
                break;

              case 36:
                _context.prev = 36;
                _context.t2 = _context['catch'](32);
                _context.next = 40;
                return (0, _util.actionWith)((0, _extends3.default)({}, requestType, {
                  payload: new _errors.RequestError('[CALL_API].endpoint function failed'),
                  error: true
                }), [action, dispatch, getState()]);

              case 40:
                _context.t3 = _context.sent;
                return _context.abrupt('return', next(_context.t3));

              case 42:
                if (!(typeof headers === 'function')) {
                  _context.next = 53;
                  break;
                }

                _context.prev = 43;

                headers = headers(getState());
                _context.next = 53;
                break;

              case 47:
                _context.prev = 47;
                _context.t4 = _context['catch'](43);
                _context.next = 51;
                return (0, _util.actionWith)((0, _extends3.default)({}, requestType, {
                  payload: new _errors.RequestError('[CALL_API].headers function failed'),
                  error: true
                }), [action, dispatch, getState()]);

              case 51:
                _context.t5 = _context.sent;
                return _context.abrupt('return', next(_context.t5));

              case 53:
                _context.next = 55;
                return (0, _util.actionWith)(requestType, [action, dispatch, getState()]);

              case 55:
                _context.t6 = _context.sent;
                next(_context.t6);
                _context.prev = 57;
                _context.next = 60;
                return (0, _isomorphicFetch2.default)(endpoint, { method: method, body: body, credentials: credentials, headers: headers });

              case 60:
                res = _context.sent;
                _context.next = 69;
                break;

              case 63:
                _context.prev = 63;
                _context.t7 = _context['catch'](57);
                _context.next = 67;
                return (0, _util.actionWith)((0, _extends3.default)({}, requestType, {
                  payload: new _errors.RequestError(_context.t7.message),
                  error: true
                }), [action, dispatch, getState()]);

              case 67:
                _context.t8 = _context.sent;
                return _context.abrupt('return', next(_context.t8));

              case 69:
                if (!res.ok) {
                  _context.next = 76;
                  break;
                }

                _context.next = 72;
                return (0, _util.actionWith)(successType, [action, dispatch, getState(), res]);

              case 72:
                _context.t9 = _context.sent;
                return _context.abrupt('return', next(_context.t9));

              case 76:
                _context.next = 78;
                return (0, _util.actionWith)((0, _extends3.default)({}, failureType, {
                  error: true
                }), [action, dispatch, getState(), res]);

              case 78:
                _context.t10 = _context.sent;
                return _context.abrupt('return', next(_context.t10));

              case 80:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[20, 25], [32, 36], [43, 47], [57, 63]]);
      }));
      return function (_x) {
        return ref.apply(this, arguments);
      };
    }();
  };
}

exports.apiMiddleware = apiMiddleware;