import { UserType } from "../../../../packages/types/userTypes.js";
import { atom, selector, useSetRecoilState } from "recoil";
import { isLoggedIn } from "../actions/authAction.js";
import selectedUserAtom from "./user.js";
export const userData = atom({
  key: "userData",
  default: null as UserType | null,
});
//TODO: Change the name
export const loggedIn = selector({
  key: "isLoggedIn",
  get: async ({ get }) => {
    const user = get(userData);
    if (user) {
      const setSelectedUser = useSetRecoilState(selectedUserAtom);
      setSelectedUser(user);
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
