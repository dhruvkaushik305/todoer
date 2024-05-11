import { UserType } from "@repo/types/User";

export const checkUsername = async (username: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND}/auth/checkUsername/${username}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data: { success: boolean; exists: boolean } = await res.json();
  return data;
};
export const Login = async (input: { email: string; password: string }) => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });
  const data: { success: boolean; error?: string; data?: UserType } =
    await res.json();
  return data;
};
