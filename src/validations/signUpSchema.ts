import { z } from "zod";


const signUpSchema = z
  .object({
    firstName: z.string().min(1, { message: "First Name is required" }),
    lastName: z.string().min(1, { message: "Last Name is required" }),
    email: z.string().min(1, { message: "Email Address is required" }).email(),
    password: z
      .string()
      .min(8, { message: "Password is required" })
      .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
        message: "Password should contain at least 1 special character",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((input) => input.password === input.confirmPassword, {
    message: "Password & Confirm Password don't match",
    path: ["confirmPassword"],
  });

type signUpType = z.infer<typeof signUpSchema>


export { signUpSchema, type signUpType}