/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaRegTrashAlt } from "react-icons/fa";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useState } from "react";
import { toast } from "sonner";

type TUpdateUserRoleProps = {
  role: string;
  onRoleChange: () => Promise<void>;
  onClose?: () => void;
  buttonName?: string;
};

const UpdateUserRoleModal = ({
  onRoleChange,
  role,
  onClose,
  buttonName,
}: TUpdateUserRoleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = async () => {
    try {
      await onRoleChange();
      setIsOpen(false);
      if (onClose) {
        onClose();
      }
      toast.success(`User role updated successfully !`, { duration: 2000 });
    } catch (err: any) {
      console.error(err);
      toast.error("Something went wrong !", { duration: 2000 });
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open && onClose) {
      onClose();
    }
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          {buttonName ? (
            <button className="text-xs sm:text-sm font-semibold bg-primary hover:bg-blue-800 text-white px-2 py-1 rounded shadow-lg">
              {buttonName}
            </button>
          ) : (
            <button>
              <FaRegTrashAlt className="size-6 text-red-500 hover:text-red-600 transition-all duration-200 hover:scale-105" />
            </button>
          )}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[450px]">
          <DialogHeader>
            <DialogTitle className="text-primary dark:text-white text-center font-bold py-5 mb-5">
              Do you want to update this user role to{" "}
              {role === "user" ? "admin" : "user"}?
            </DialogTitle>
          </DialogHeader>
          <div className="flex justify-between">
            <DialogClose asChild>
              <button
                className="bg-red-600 px-4 md:px-8 py-1.5 md:py-2 text-white text-sm font-semibold rounded-md hover:bg-red-700 transform transition-all duration-200 hover:shadow-lg"
                type="submit"
              >
                Cancel
              </button>
            </DialogClose>
            <button
              onClick={handleChange}
              className="bg-primary px-4 md:px-8 py-1.5 md:py-2 text-white text-sm font-semibold rounded-md hover:bg-blue-900 transform transition-all duration-200 hover:shadow-lg"
            >
              Update
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateUserRoleModal;
