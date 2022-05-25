"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _auth = require("../../controllers/auth.controller");

var router = _express["default"].Router(); // router.post("/logout", logOut);


router.post("/signup", _auth.signUp); // router.post("/signin", signIn);

module.exports = router;