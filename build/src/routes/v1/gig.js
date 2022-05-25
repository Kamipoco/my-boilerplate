"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _gig = require("../../controllers/gig.controller");

var router = _express["default"].Router();

router.post("/send", _gig.sendGig);
module.exports = router;