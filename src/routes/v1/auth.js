import express from "express";
import { signUp, signIn } from "../../controllers/auth.controller";

const router = express.Router();

// router.post("/logout", logOut);
router.post("/signup", signUp);
// router.post("/signin", signIn);

module.exports = router;
