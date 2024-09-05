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
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

type TConfirmModalProp={
  bikeId:string;
}

const ConfirmationModal = ({ bikeId }: TConfirmModalProp) => {
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
  return (
    <AlertDialog>
      <AlertDialogTrigger className=" primary-button w-11/12  xl:w-2/3 mt-5 ms-5 md:ms-0">
        <button>Book Now</button>
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
