import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser, useCurrentToken } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

type TConfirmModalProp={
  bikeId:string;
}

const ConfirmationModal = ({ bikeId }: TConfirmModalProp) => {
  const userData =useAppSelector(selectCurrentUser);
  const token = useAppSelector(useCurrentToken);
  const navigate = useNavigate();
  const handleConfirm = () => {
    if (!token) {
      return toast.error("Please login or signup first!", {
        duration: 2000,
      });
    }
    navigate(`/booking-confirmatin/${bikeId}`);
  };
    const isAdminOrSuperAdmin =
      userData?.role === "admin" || userData?.role === "superAdmin";

  return (
    <AlertDialog>
      <AlertDialogTrigger className=" w-11/12  xl:w-2/3 mt-5 ms-5 md:ms-0">
        <button className=" primary-button-white w-full" disabled={isAdminOrSuperAdmin}>Book Now</button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            You have to pay 100tk in advance to book the bike.
          </AlertDialogTitle>
          <AlertDialogDescription>
            Do you want to continue?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="primary-button"
            onClick={() => handleConfirm()}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmationModal;
