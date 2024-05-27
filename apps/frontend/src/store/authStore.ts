import { UserType } from "@repo/types/User";
import { atom, selector, useSetRecoilState } from "recoil";
import { isLoggedIn } from "../actions/authAction.js";
export const userDataAtom = atom({
  key: "userData",
  default: null as UserType | null,
});
export const isLoggedInAtom = selector({
  key: "isLoggedIn",
  get: async ({ get }) => {
    const user = get(userDataAtom);
    if (user) {
      return true;
    }
    const setUserData = useSetRecoilState(userDataAtom);
    const response = await isLoggedIn();
    if (response.success) {
      setUserData(response.data!);
      return true;
    } else {
      return false;
    }
  },
});
