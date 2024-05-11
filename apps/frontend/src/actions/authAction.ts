import { SignupInput } from "@repo/types/Signup";
import { UserType } from "@repo/types/User";

export const checkUsernameAction = async (username: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND}/auth/checkUsername/${username}`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data: { success: boolean; exists: boolean } = await res.json();
  return data;
};
export const signupAction = async (user: SignupInput) => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND}/auth/signup`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data: { success: boolean; error?: string; data?: UserType } =
    await res.json();
  return data;
};
export const loginAction = async (input: {
  email: string;
  password: string;
}) => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND}/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });
  const data: { success: boolean; error?: string; data?: UserType } =
    await res.json();
  return data;
};
