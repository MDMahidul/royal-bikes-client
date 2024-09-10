import { TUser } from "@/redux/features/auth/authSlice";

export type TBike = {
  _id?: string;
  name: string;
  description: string;
  pricePerHour: number;
  isAvailable: boolean;
  cc: number;
  year: number;
  model: string;
  brand: string;
  isDeleted: boolean;
  image?: string;
  mileage:string;
};

export type TDiscount = "percentage" | "fixed";

export type TCoupon = {
  _id?:string;
  code: string;
  discountType: TDiscount;
  discountValue: number;
  endDate: Date;
  isActive: boolean;
};

export type TBooking = {
  userId?: TUser;
  bikeId: TBike;
  startTime: Date;
  returnTime: Date;
  totalCost: number;
  isCouponUsed: boolean;
  isAdvancePaid: boolean;
  transactionId: string;
  paymentStatus: string;
  isReturned: boolean;
};