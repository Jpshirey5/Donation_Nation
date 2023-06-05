import Charity from "../models/Charity";
import User from "../models/User.js";

/* CREATE */
export const createCharity = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);
    const newCharity = new Charity({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
    });
    await newCharity.save();

    const charity = await Charity.find();
    res.status(201).json(charity);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
