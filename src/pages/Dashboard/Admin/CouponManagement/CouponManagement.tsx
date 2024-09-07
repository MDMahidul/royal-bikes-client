import FadeInUpAnimation from "@/components/Animation/FadeInUpAnimtaion";
import SlideInFromLeft from "@/components/Animation/SlideFromLeft";
import SlideInFromRight from "@/components/Animation/SlideFromRight";
import Container from "@/components/Container/Container";
import NoData from "@/components/Error/NoData";
import Loader from "@/components/Loader/Loader";
import AddCouponModal from "@/components/Modal/AddCouponModal";
import DeleteModal from "@/components/Modal/DeleteModal";
import UpdateCouponModal from "@/components/Modal/UpdateCouponModal";
import PaginationComponent from "@/components/Pagination/PaginationComponent";
import DashboardHeader from "@/components/SectionHeader/DashboardHeader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDeleteCouponMutation, useGetAllCouponsQuery } from "@/redux/api/coupon/coupon.api";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { TQueryParams } from "@/types/global";
import { TCoupon } from "@/types/types";
import { useState } from "react";
import { toast } from "sonner";

const CouponManagement = () => {
  const [params] = useState<TQueryParams[]>([]);
  const token = useAppSelector(useCurrentToken);
  const [page, setPage] = useState(1);
  const [deleteCoupon] = useDeleteCouponMutation();
  const {
    data: couponData,
    isError,
    isLoading,
  } = useGetAllCouponsQuery([...params],{pollingInterval:30000});
  if (isLoading) {
    return <Loader height="h-[80vh]" />;
  }
  if (isError) {
    toast.error("Something Went Wrong!");
  }

  /* handle pagination */
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  /* handle delete */
  const handleDeleteCoupon = async (id: string) => {
    await deleteCoupon({ id, token });
  };

  const totalPage = couponData?.meta.totalPage;

  return (
    <div className="md:my-5 mb-20 sm:mb-40 ">
      <Container>
        <DashboardHeader title="Manage Bikes" />
        <div className="text-right md:px-10 my-5">
          <SlideInFromRight>
            <AddCouponModal />
          </SlideInFromRight>
        </div>
        {couponData?.data.length === 0 ? (
          <NoData />
        ) : (
          <>
            <FadeInUpAnimation>
              <div className="overflow-x-auto">
                <Table className="min-w-full">
                  <TableHeader>
                    <TableRow>
                      <TableHead>SL</TableHead>
                      <TableHead>Code</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>End Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {couponData.data.map((coupon: TCoupon, index: number) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {(page - 1) * couponData.meta.limit + index + 1}
                        </TableCell>
                        <TableCell className="text-gray-900 whitespace-nowrap dark:text-white font-semibold">
                          {coupon.code}
                        </TableCell>
                        <TableCell className="capitalize">
                          {coupon.discountType}
                        </TableCell>
                        <TableCell
                          className={`text-${
                            coupon.isActive ? "green" : "red"
                          }-500 font-semibold`}
                        >
                          {coupon.isActive === true
                            ? "Available"
                            : "Not Available"}
                        </TableCell>
                        <TableCell>{coupon.discountValue} {coupon.discountType === 'fixed' ? '৳' : '%'}</TableCell>
                        <TableCell>
                          {new Date(coupon.endDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-4 justify-center items-center">
                            <UpdateCouponModal coupon={coupon} />
                            <DeleteModal
                              onDelete={() =>
                                handleDeleteCoupon(coupon._id as string)
                              }
                              entityName="Coupon"
                            />
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </FadeInUpAnimation>
            <SlideInFromLeft>
              <div className="mt-8">
                <PaginationComponent
                  page={page}
                  handlePageChange={handlePageChange}
                  totalPage={totalPage}
                />
              </div>
            </SlideInFromLeft>
          </>
        )}
      </Container>
    </div>
  );
};

export default CouponManagement;
