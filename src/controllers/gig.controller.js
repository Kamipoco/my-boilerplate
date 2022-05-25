import { db } from "../config/database";
import Gig from "../models/gig";

const sendGig = async (req, res) => {
  try {
    const { title, technology } = req.body;

    const gig = await Gig.create({
      title,
      technology,
    });

    return res.status(200).json({ gig });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { sendGig };
