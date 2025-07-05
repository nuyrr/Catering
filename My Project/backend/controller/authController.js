 import User from "../models/User.js";
 import bcrypt from "bcryptjs";
 import jwt from "jsonwebtoken";

// // Signup
 export const register = async (req, res) => {
   const { name, email, password, role } = req.body;

   try {
     const userExists = await User.findOne({ email });
     if (userExists) return res.status(400).json({ message: "User already exists" });

     const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
       name,
       email,
      password: hashedPassword,
      role,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
// 
// Login
export const login = async (req, res) => {
  const { email, password } = req.body;
// 
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });
// 
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
// 
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
// 
    res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    });
// 
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
   }
 };
