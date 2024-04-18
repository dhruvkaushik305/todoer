import z from "zod";
export const SignupSchema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
  password: z.string().min(6).max(255),
  username: z.string().min(3).max(255),
});
export type SignupInput = z.infer<typeof SignupSchema>;
export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(255),
});
export type LoginInput = z.infer<typeof LoginSchema>;
