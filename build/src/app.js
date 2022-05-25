"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _dotenv = require("dotenv");

var _helmet = _interopRequireDefault(require("helmet"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _database = require("./config/database");

var _gig = _interopRequireDefault(require("./routes/v1/gig"));

var _auth = _interopRequireDefault(require("./routes/v1/auth"));

var app = (0, _express["default"])();
(0, _dotenv.config)(); //middleware

app.use((0, _morgan["default"])("dev"));
app.use((0, _cors["default"])());
app.use((0, _helmet["default"])()); // Parse incoming requests data

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
})); // app.get("/", (req, res) => {
//   res.send("test server");
// });

app.use("/", _gig["default"]);
app.use("/", _auth["default"]); // routes(app);

app.listen(process.env.APP_PORT, /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _database.db.sync();

        case 2:
          console.log("Hi, I am running at http://".concat(process.env.APP_HOST, ":").concat(process.env.APP_PORT, "/"));

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))); // //dependencies
// import express from "express";
// import cors from "cors";
// import passport from "passport";
// import morgan from "morgan";
// import helmet from "helmet";
// import hpp from "hpp";
// import { db } from "./configs/database";
// class App {
//   constructor(routes) {
//     this.app = express();
//     this.port = process.env.APP_PORT || 3000;
//     this.env = process.env.NODE_ENV || "development";
//     this.initializeMiddlewares();
//     this.initializeRoutes(routes);
//     this.initializeErrorHandling();
//     this.initializeSecurity();
//   }
//   listen() {
//     return this.app.listen(this.port, async () => {
//       await db.sync();
//       console.log(`=================================`);
//       console.log(`======= ENV: ${this.env} =======`);
//       console.log(`🚀 App listening on the port ${this.port}`);
//       console.log(`=================================`);
//     });
//   }
//   getServer() {
//     return this.app;
//   }
//   initializeMiddlewares() {
//     this.app.use(morgan("dev"));
//     this.app.use(cors());
//     this.app.use(hpp());
//     this.app.use(helmet());
//     this.app.use(express.json());
//     this.app.use(express.urlencoded({ extended: true }));
//     // this.app.use(passport.initialize());
//   }
//   //routes
//   initializeRoutes(routes) {
//     routes.forEach((route) => {
//       this.app.use(route.path, route.router);
//     });
//   }
//   /** Rules of our API (CORS)*/
//   initializeSecurity() {
//     this.app.use((req, res, next) => {
//       res.header("Access-Control-Allow-Origin", "*");
//       res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//       );
//       if (req.method == "OPTIONS") {
//         res.header(
//           "Access-Control-Allow-Methods",
//           "PUT, POST, PATCH, DELETE, GET"
//         );
//         return res.status(200).json({});
//       }
//       next();
//     });
//   }
//   //Error Handling
//   initializeErrorHandling() {
//     this.app.use((err, req, res, next) => {
//       console.log(err.stack);
//       res.status(500).send("Something went wrong");
//     });
//   }
// }
// export default App;