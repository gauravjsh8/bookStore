import User from "../model/userModel.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json({ success: true, Users: users });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ success: false, message: error });
  }
};

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!email || !name || !password) {
      return res
        .status(401)
        .json({ success: false, message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 8);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.status(201).json({
      success: true,
      message: "User Created",
      Users: {
        id: newUser._id,
      },
    });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ success: false, message: error });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(401)
        .json({ success: false, message: "All fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User doesn't exist" });
    }

    const isPasswordMatch = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid password" });
    }
    return res.status(200).json({
      success: true,
      message: "Logged in Successfully",
      Users: existingUser,
    });
  } catch (error) {
    console.log("Error", error.message);
    return res.status(500).json({ success: false, message: error });
  }
};
