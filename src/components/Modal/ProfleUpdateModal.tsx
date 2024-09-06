/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import { ImSpinner9 } from "react-icons/im";
import useUserProfile from "@/hooks/useUserProfile";
import { useUpdateUserProfileMutation } from "@/redux/api/user/user.api";
import { imageUp } from "@/utils/imageUpload";

const ProfileUpdateModal = ({ user }: any) => {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const {token} = useUserProfile();
  const { name, email, address, contactNo, pImage } = user.data;
  const { register, handleSubmit, reset } = useForm();
  const [updateUserProfile, { isLoading }] = useUpdateUserProfileMutation();

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      let imageUrl = pImage;
      /* check if no image select */
      if (data.pImage && data.pImage.length > 0) {
        const image = data.pImage[0];
        /* upload image  */
        const imgData = await imageUp(image);
        /* get image url */
        imageUrl = imgData.data.display_url;
      }
      const updateInfo = { ...data, pImage: imageUrl };
      await updateUserProfile({ user: updateInfo, token }).unwrap();
      reset();
      toast.success("Profile Data Updated Successfully!");
      setIsOpen(false);
      setLoading(false);
    } catch (err: any) {
      toast.error(err.data?.message || err.message || err);
      console.error(err);
      setLoading(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      reset();
    }
  };
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <button className="primary-button w-full mt-4">Update Profile</button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-primary text-center font-bold mb-2">
              Update User Profile
            </DialogTitle>
          </DialogHeader>
          <form className="px-10 space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="product_name" className="add-input-label">
                User Name
              </label>
              <input
                type="text"
                id="name"
                className="add-input-field"
                defaultValue={name}
                placeholder="User name"
                {...register("name")}
              />
            </div>
            <div>
              <label htmlFor="email" className="add-input-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="add-input-field"
                defaultValue={email}
                placeholder="Email"
                {...register("email")}
              />
            </div>
            <div>
              <label htmlFor="contactNo" className="add-input-label">
                Contact No.
              </label>
              <input
                type="text"
                id="contactNo"
                className="add-input-field"
                defaultValue={contactNo}
                placeholder="contact No"
                {...register("contactNo")}
              />
            </div>
            <div>
              <label htmlFor="address" className="add-input-label">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="add-input-field"
                defaultValue={address}
                placeholder="Address"
                {...register("address")}
              />
            </div>
            <div>
              <label htmlFor="product_name" className="add-input-label">
                Profile Image 
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 shadow"
                id="file_input"
                type="file"
                {...register("pImage", { required: false })}
              />
            </div>
            <div>
              <button type="submit" className={`w-full primary-button`}>
                {loading || isLoading ? (
                  <ImSpinner9 className="m-auto animate-spin" size={24} />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProfileUpdateModal;
