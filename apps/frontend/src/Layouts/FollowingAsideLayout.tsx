import { UserType } from "@repo/types/User";
import React, { useEffect, useState } from "react";
import { getFollowingAction } from "../actions/userActions";
import FollowingUserLayout from "./FollowingUserLayout";
interface FollowingAsideLayoutProps {
  children?: React.ReactNode;
}
const FollowingAsideLayout: React.FC<FollowingAsideLayoutProps> = ({
  children,
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
        children
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
