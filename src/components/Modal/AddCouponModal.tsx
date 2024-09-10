/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { useAddCouponMutation } from "@/redux/api/coupon/coupon.api";
import { toast } from "sonner";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentToken } from "@/redux/features/auth/authSlice";

const AddCouponModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = useAppSelector(useCurrentToken);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [addCoupon, { isLoading }] = useAddCouponMutation();

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      reset();
    }
  };

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    try {
      await addCoupon({ data, token }).unwrap();
      toast.success("Bike Added Successfully!");
      setIsOpen(false);
      reset();
    } catch (err: any) {
      toast.error(err.data?.message || err.message || err);
    }
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <button className="primary-button">Add Coupon</button>
        </DialogTrigger>
        <DialogContent className="max-w-[370px] sm:max-w-md md:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-primary dark:text-white text-center font-bold">
              Add Coupon
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <div>
                <label htmlFor="code" className="add-input-label">
                  Coupon Code
                </label>
                <input
                  type="text"
                  id="code"
                  className="add-input-field"
                  placeholder="code"
                  {...register("code", { required: true })}
                />
                {errors.code && (
                  <span className="text-xs text-red-500">
                    Code is required *
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="discountType" className="add-input-label">
                  Discount Type
                </label>
                <select
                  className="add-input-field"
                  {...register("discountType", { required: true })}
                >
                  <option value="">Select</option>
                  <option value="percentage">Percentage</option>
                  <option value="fixed">Fixed</option>
                </select>
                {errors.discountType && (
                  <span className=" text-xs text-red-500">
                    Please select any discount type *
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="discountValue" className="add-input-label">
                  Discount Value
                </label>
                <input
                  type="number"
                  id="discountValue"
                  className="add-input-field"
                  placeholder="discount value"
                  {...register("discountValue", {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
                {errors.discountValue && (
                  <span className=" text-xs text-red-500">
                    Please add discount value*
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="endDate" className="add-input-label">
                  End Date
                </label>
                <input
                  type="date"
                  id="cc"
                  className="add-input-field"
                  placeholder="end date"
                  {...register("endDate", {
                    required: true,
                  })}
                />
                {errors.endDate && (
                  <span className=" text-xs text-red-500">
                    Please add end date *
                  </span>
                )}
              </div>
            </div>
            <div className="mt-5">
              <button className="w-full primary-button" type="submit">
                {isLoading ? (
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

export default AddCouponModal;
