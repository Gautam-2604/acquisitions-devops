import { z} from "zod";
export const signupSchema = z.object({
    name:z.string().min(3).max(30).trim(),
    email:z.email().toLowerCase().trim(),
    password:z.string().min(6).max(30).trim(),
    role:z.enum(['user','admin']).optional().default('user')

})

export const signInSchema = z.object({
    email:z.email().toLowerCase().trim(),
    password:z.string().min(6).max(30).trim()
})