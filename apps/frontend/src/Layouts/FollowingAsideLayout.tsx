import { UserType } from "@repo/types/User";
import React, { useEffect, useState } from "react";
import { getFollowingAction } from "../actions/userActions";
import FollowingUserLayout from "./FollowingUserLayout";
interface FollowingAsideLayoutProps {
  ToggleFollowing: React.Dispatch<React.SetStateAction<boolean>>;
}
const FollowingAsideLayout: React.FC<FollowingAsideLayoutProps> = ({
  ToggleFollowing,
}) => {
  const [following, setFollowing] = useState<{ user: UserType }[] | null>(null);

  useEffect(() => {
    getFollowingAction().then((res) => {
      if (res.success) {
        setFollowing(res.data!);
      }
    });
  }, []);
  return (
    <>
      {following && following.length === 0 ? (
        <div className="flex items-center justify-center text-lg text-slate-300">
          <span
            className="cursor-pointer underline hover:text-blue-600"
            onClick={() => ToggleFollowing(false)}
          >
            Search
          </span>{" "}
          for users to follow
        </div>
      ) : (
        <div className="flex h-full w-full flex-col gap-2">
          {following &&
            following.map((item) => (
              <FollowingUserLayout key={item.user.id} user={item.user} />
            ))}
        </div>
      )}
    </>
  );
};
export default FollowingAsideLayout;
