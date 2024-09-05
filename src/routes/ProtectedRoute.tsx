import {
  selectCurrentUser,
  useCurrentToken,
} from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "sonner";

type ProtectedRouteProps = {
  children: ReactNode;
  roles?: string[];
};

const ProtectedRoute = ({ children, roles }: ProtectedRouteProps) => {
  const token = useAppSelector(useCurrentToken);
  const user = useAppSelector(selectCurrentUser);
  const location = useLocation();

  if (!token) {
    console.log("object");
    toast.error("Plese login first to continue!", { duration: 2000 });
    return <Navigate to="/login" state={{ form: location }} replace={true} />;
  }

  if (roles && user && !roles.includes(user.role)) {
    toast.error("Your not authorized !", { duration: 2000 });
    return (
      <Navigate to="/unauthorized" state={{ form: location }} replace={true} />
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
