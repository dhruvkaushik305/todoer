import { UserType } from "@repo/types/User";
import React, { useEffect, useState } from "react";
import { getFollowingAction } from "../actions/userActions";
import User from "../components/User";
const FollowingLayout: React.FC = () => {
  const [following, setFollowing] = useState<{ user: UserType }[] | null>(null);
  useEffect(() => {
    getFollowingAction().then((res) => {
      if (res.success) {
        setFollowing(res.data!);
      }
    });
  }, []);
  //TODO: redirect to the user profile page
  return (
    <div className="flex min-w-[35rem] flex-col items-center p-3">
      <header className="flex w-full justify-center border-b border-gray-700 p-2">
        <h1 className="text-3xl font-bold">Following</h1>
      </header>
      <div className="flex h-full w-full flex-col gap-2 p-2">
        {following &&
          following.map((item) => <User key={item.user.id} user={item.user} />)}
      </div>
    </div>
  );
};
export default FollowingLayout;
