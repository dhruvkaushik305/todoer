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
