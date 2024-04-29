import { SearchedUser, UserType } from "@repo/types/User";

export const isLoggedIn = async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND}/auth/isLogged`, {
      credentials: "include",
    });
    const response: { success: boolean; data?: UserType; error?: string } =
      await res.json();
    return response;
  } catch (err) {
    console.error("Error while checking if the user is logged in", err);
  }
  return {
    success: false,
    error: "Something went wrong while making the request",
  };
};

export const SearchUser = async (username: string) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND}/user/search?query=${username}`,
      {
        credentials: "include",
      }
    );
    const response: { success: boolean; data?: SearchedUser[] } =
      await res.json();
    return response;
  } catch (err) {
    return { success: false };
    console.error("Error while searching for the user", err);
  }
};
