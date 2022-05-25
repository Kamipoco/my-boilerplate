import express from "express";
import { sendGig } from "../../controllers/gig.controller";

const router = express.Router();

router.post("/send", sendGig);

module.exports = router;
