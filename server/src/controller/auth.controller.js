import User from "../model/user.js";
import generateToken from "../utils/generateToken.js";

// REGISTER
export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists)
      return res
        .status(400)
        .json({ status: "false", msg: "User already exists" });

    const user = await User.create({ username, email, password });
    if (!user)
      return res
        .status(400)
        .json({ status: "false", msg: "Invalid user data" });
    res
      .status(201)
      .json({ status: "true", msg: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// LOGIN
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res
        .status(400)
        .json({ status: "false", msg: "Invalid email or password" });

    const isMatch = await user.matchPassword(password);
    if (!isMatch)
      return res
        .status(400)
        .json({ status: "false", msg: "Invalid email or password" });

    res.json({
      status: "true",
      token: generateToken(user._id),
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PROFILE
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user).select("-password");
    res.json({ status: "true", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password").sort({ createdAt: -1 });
    res.json({ status: "true", users });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
