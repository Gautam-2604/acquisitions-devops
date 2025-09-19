import express from 'express';
import { signup, signIn, signOut } from '../controllers/auth.controller.js';

const authRoutes = express.Router();

authRoutes.post('/sign-up', signup);
authRoutes.post('/sign-in', signIn);
authRoutes.post('/sign-out', signOut);

export default authRoutes;