import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useGetUserProfieQuery } from "@/redux/api/user/user.api";

import { useAppSelector } from "@/redux/hooks";

const useUserProfile = () => {
  const token = useAppSelector(useCurrentToken);
  const {
    data: userProfile,
    isError,
    isLoading,
  } = useGetUserProfieQuery({ token: token });

  return { token, userProfile, isError, isLoading };
};

export default useUserProfile;
