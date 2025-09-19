import jwt, { sign, verify } from "jsonwebtoken"
import logger from "../config/logger"

const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRY = '1d'

export const jwttoken = {
    sign:(payload)=>{
        try {
            return jwt.sign(payload, JWT_SECRET,{expiresIn: JWT_EXPIRY})
        } catch (error) {
            logger.error("Error signing JWT token", {error})
            throw new Error("Error signing JWT token")
        }
    },
    verify:(token)=>{
        try {
            return jwt.verify(token, JWT_SECRET)
        } catch (error) {
            logger.error("Error verifying JWT token", {error})
            throw new Error("Error verifying JWT token")
        }
    }
}