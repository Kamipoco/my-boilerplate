import express from "express";
import { config } from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
// import { db } from "./config/database";
// import gigRoutes from "./routes/v1/gig";
// import authRoutes from "./routes/v1/auth";
const app = express();

config();

//middleware
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

// Parse incoming requests data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("test server");
});
// app.use("/", gigRoutes);
// app.use("/", authRoutes);
// routes(app);

app.listen(process.env.APP_PORT, async () => {
  // await db.sync();
  console.log(
    `Hi, I am running at http://${process.env.APP_HOST}:${process.env.APP_PORT}/`
  );
});

// //dependencies
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
