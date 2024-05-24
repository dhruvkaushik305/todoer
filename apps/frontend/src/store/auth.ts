import { UserType } from "../../../../packages/types/userTypes.js";
import { atom, selector, useSetRecoilState } from "recoil";
import { isLoggedIn } from "../actions/userActions.js";
export const userData = atom({
  key: "userData",
  default: null as UserType | null,
});
export const loggedIn = selector({
  key: "isLoggedIn",
  get: async ({ get }) => {
    const user = get(userData);
    if (user) {
      return true;
    }
    const setUserData = useSetRecoilState(userData);
    const response = await isLoggedIn();
    if (response.success) {
      setUserData(response.data!);
      return true;
    } else {
      return false;
    }
  },
});
