"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../config/database");

var _user = _interopRequireDefault(require("../models/user"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _signJWT = require("../services/signJWT");

var signUp = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var _req$body, name, email, password, check;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password; //check mail

            _context2.next = 4;
            return _user["default"].findOne({
              where: {
                email: email
              }
            });

          case 4:
            check = _context2.sent;

            if (!check) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(422).json({
              status: false,
              errors: "User already exists with that email or username!"
            }));

          case 7:
            _bcryptjs["default"].hash(password, 12, /*#__PURE__*/function () {
              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(error, passwordhashed) {
                var user;
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (error) {
                          console.log(error);
                        }

                        _context.next = 3;
                        return _user["default"].create({
                          name: name,
                          email: email,
                          password: passwordhashed
                        });

                      case 3:
                        user = _context.sent;
                        _context.next = 6;
                        return user.save();

                      case 6:
                        return _context.abrupt("return", res.status(200).json({
                          msg: "Success",
                          data: {
                            user: user
                          }
                        }));

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x4, _x5) {
                return _ref2.apply(this, arguments);
              };
            }());

            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  }));

  return function signUp(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}(); // const SignIn = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;
//     const check = await User.findOne({
//       where: {
//         email: email.toLowerCase().toString(),
//       },
//     });
//     if (!check) {
//       return res.status(422).json({
//         message: "Invalid Email or Password",
//       });
//     }
//     const comparePassword = bcrypt.compare(password, check.password);
//     if (!comparePassword) {
//       return res.status(400).json({ message: "Invalid Pw" });
//     }
//     const token = signJWT(check);
//     return res.status(200).json({
//       message: "Login Success",
//       token,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// const logOut = async (req, res) => {
//   try {
//     //code
//   } catch (error) {
//     console.log(error);
//   }
// };


module.exports = {
  signUp: signUp // SignIn,

};