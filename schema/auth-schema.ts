import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().min(3, {message: "Please enter a valid email!"}),
  password: z.string().min(3, {message: "Please enter a valid password!"}),
})