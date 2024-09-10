/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { FaRegEdit } from "react-icons/fa";
import { FieldValues, useForm } from "react-hook-form";
import { ImSpinner9 } from "react-icons/im";
import { useUpdateCouponMutation } from "@/redux/api/coupon/coupon.api";
import { toast } from "sonner";
import { TCoupon } from "@/types/types";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentToken } from "@/redux/features/auth/authSlice";

type TUpdateModalProp = {
  coupon: TCoupon;
};

const UpdateCouponModal = ({ coupon }: TUpdateModalProp) => {
  const token = useAppSelector(useCurrentToken);
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [updateCoupon, {isLoading}] = useUpdateCouponMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    try {
      await updateCoupon({ data,id:coupon._id, token }).unwrap();
      toast.success("Coupon Data Updated Successfully!");
      setIsOpen(false);
      reset();
    } catch (err: any) {
      toast.error(err.data?.message || err.message || err);
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
          <button>
            <FaRegEdit className="size-6 text-primary dark:text-white transition-all duration-200 hover:scale-105 mb-1" />
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-[370px] sm:max-w-md md:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-primary dark:text-white text-center font-bold">
              Update Coupon
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
                  defaultValue={coupon.code}
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
                  defaultValue={coupon.discountType}
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
                  defaultValue={coupon.discountValue}
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
                  id="date"
                  className="add-input-field"
                  defaultValue={
                    new Date(coupon.endDate).toISOString().split("T")[0]
                  }
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
              <div className="flex items-center mt-2">
                <label htmlFor="isActive" className="add-input-label mr-2">
                  Active
                </label>
                <input
                  type="checkbox"
                  id="isActive"
                  className="add-input-checkbox"
                  defaultChecked={coupon.isActive}
                  {...register("isActive")}
                />
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

export default UpdateCouponModal;
