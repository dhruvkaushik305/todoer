import z from "zod";
export const SignupSchema = z
  .object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(3, { message: "Must be 3 characters or long" })
      .max(255, { message: "Must be 255 characters or less" }),
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Must be a valid email" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, { message: "Must be 6 characters or long" })
      .max(255, { message: "Must be 255 characters or less" }),
    username: z
      .string({ required_error: "Username is required" })
      .min(3, { message: "Must be 3 characters or more" })
      .max(255, { message: "Must be 255 characters or less" }),
  })
  .required();
export type SignupInput = z.infer<typeof SignupSchema>;
export const LoginSchema = z
  .object({
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Must be a valid email" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, { message: "Must be 6 characters or long" })
      .max(255, { message: "Must be 255 characters or less" }),
  })
  .required();
export type LoginInput = z.infer<typeof LoginSchema>;
