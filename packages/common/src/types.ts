import {z} from 'zod'

export const signinSchema = z.object({
    username: z.string().min(6).max(30),
    password: z.string(),
})

export const signupSchema = z.object({
    username: z.string().min(6).max(30),
    password: z.string(),
    email: z.string(),
    name: z.string()
})

export const roomSchema = z.object({
    name: z.string().min(4).max(10)
})