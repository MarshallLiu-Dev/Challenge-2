// import { Request, Response, NextFunction } from "express";
// const User = require("../modules/user");
// const jwt = require("jsonwebtoken");

// const Middlewares = {
//     authenticate: async (req: Request, res: Response, next: NextFunction) => {
//         const id = req.params.id;

//         try {
//             // Verificar se o usuário existe
//             const user = await User.findById(id, "-password");
//             if (!user) {
//                 return res.status(404).json({
//                     message: "User not found!" });
//             }

//             res.status(200).json({ user });
//         } catch (error) {
//             res.status(500).json({ error, message: "Internal server error!" });
//         }
//     },

//     checkToken: (req: Request, res: Response, next: NextFunction) => {
//         const authHeader = req.headers["authorization"];
//         const token = authHeader && authHeader.split(" ")[1];

//         if (!token) {
//             return res.status(401).json({ message: "Access denied!" });

//         }

//         try {
//             const secret = process.env.SECRET;
//             jwt.verify(token, secret);

//             next();
//         } catch (err) {
//             res.status(400).json({ message: "Token is invalid!" });
//         }
//     }
// };

// module.exports = Middlewares;

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export function checkToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied!' });
  }

  try {
    const secret = process.env.SECRET as string;
    jwt.verify(token, secret);

    next();
  } catch (err) {
    res.status(400).json({ message: 'Token is invalid!' });
  }
}
