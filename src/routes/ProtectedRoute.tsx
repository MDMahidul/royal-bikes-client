import {
  useCurrentToken,
} from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { TUser } from "@/types/types";
import { verifyToken } from "@/utils/verifyToken";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "sonner";

type ProtectedRouteProps = {
  children: ReactNode;
  roles?: string[];
};

const ProtectedRoute = ({ children, roles }: ProtectedRouteProps) => {
  const token = useAppSelector(useCurrentToken);
  //const user = useAppSelector(selectCurrentUser);
   let user;
   if (token) {
     user = verifyToken(token);
   }
  const location = useLocation();

  if (!token) {
    toast.error("Plese login first to continue!", { duration: 2000 });
    return <Navigate to="/login" state={{ form: location }} replace={true} />;
  }

  if (roles && user && !roles.includes((user as TUser).role)) {
    toast.error("Your not authorized !", { duration: 2000 });
    return (
      <Navigate to="/unauthorized" state={{ form: location }} replace={true} />
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
