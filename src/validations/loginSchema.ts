import { z } from "zod";

const loginSchema = z.object({
  email: z.string().min(1, { message: "Email Address is required" }).email(),
  password: z
    .string()
    .min(8, { message: "Password is required" })
});

type loginType = z.infer<typeof loginSchema>;

export { loginSchema, type loginType };
