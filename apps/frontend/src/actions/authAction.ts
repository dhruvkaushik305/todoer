import { SignupInput } from "@repo/types/Auth";
import { UserType } from "../../../../packages/types/userTypes.js";

export const isLoggedIn = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND}/auth/isLogged`, {
      credentials: "include",
    });
    const response: { success: boolean; data?: UserType; error?: string } =
      await res.json();
    return response;
  } catch (err) {
    return {
      success: false,
      error: "Something went wrong while making the request",
    };
  }
};

export const checkUsernameAction = async (username: string) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND}/auth/checkUsername/${username}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    const data: { success: boolean; exists: boolean } = await res.json();
    return data;
  } catch (err) {
    return { success: false, exists: false };
  }
};
export const signupAction = async (user: SignupInput) => {
  try {
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
  } catch (err) {
    return {
      success: false,
      error: "Something went wrong while making the request",
    };
  }
};
export const loginAction = async (input: {
  email: string;
  password: string;
}) => {
  try {
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
  } catch (err) {
    return { success: false, error: "Something went wrong while logging in" };
  }
};
export const logoutAction = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND}/auth/logout`, {
      method: "DELETE",
      credentials: "include",
    });
    const data: { success: boolean; message?: string; error?: string } =
      await res.json();
    return data;
  } catch (err) {
    return { success: false, error: "Something went wrong while logging out" };
  }
};
