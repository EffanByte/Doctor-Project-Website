import { requiredEnv } from '../config/env.js';
import jwt from "jsonwebtoken";
import user from "../models/userModel.js";
import mongoose from "mongoose";

const jwtSecret = requiredEnv('JWT_SECRET');
async function userAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    // const token = req.cookie.authorization;
    // if (!token) {
    //   return res.status(401).json({ message: "Unauthorized" });
    // }
    try {
      const payload = jwt.verify(token, jwtSecret);
      req.User = payload.auth_user;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  }
export default userAuth;