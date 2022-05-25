"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../config/database");

var _gig = _interopRequireDefault(require("../models/gig"));

var sendGig = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, title, technology, gig;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, title = _req$body.title, technology = _req$body.technology;
            _context.next = 4;
            return _gig["default"].create({
              title: title,
              technology: technology
            });

          case 4:
            gig = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              gig: gig
            }));

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function sendGig(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  sendGig: sendGig
};