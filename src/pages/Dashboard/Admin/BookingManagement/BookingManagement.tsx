import { useState, useEffect } from "react";
import Container from "@/components/Container/Container";
import LoadingError from "@/components/Error/LoadingError";
import Loader from "@/components/Loader/Loader";
import DashboardHeader from "@/components/SectionHeader/DashboardHeader";
import { useGetAllBookingsQuery } from "@/redux/api/booking/booking.api";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { TQueryParams } from "@/types/global";
import SlideInFromLeft from "@/components/Animation/SlideFromLeft";
import BookingManagementTable from "@/components/Tables/BookingManagementTable";
import PaginationComponent from "@/components/Pagination/PaginationComponent";
import FadeInUpAnimation from "@/components/Animation/FadeInUpAnimtaion";

const BookingManagement = () => {
  const token = useAppSelector(useCurrentToken);
  const [params] = useState<TQueryParams[]>([]);
  const [payStatus, setPayStatus] = useState("pending");
  const [page, setPage] = useState(1);
  const [activeTab, setActiveTab] = useState("unpaid");

  // Update payStatus when activeTab changes
  useEffect(() => {
    if (activeTab === "unpaid") {
      setPayStatus("pending");
    } else if (activeTab === "paid") {
      setPayStatus("paid");
    }
  }, [activeTab]);

  const updatedParams = [
    { name: "paymentStatus", value: payStatus },
    { name: "page", value: page },
    ...params,
  ];
  const {
    data: bookingsData,
    isError,
    isLoading,
  } = useGetAllBookingsQuery({ args: updatedParams, token });

  if (isLoading) {
    return <Loader height="h-[80vh]" />;
  }
  if (isError || !bookingsData) {
    return <LoadingError />;
  }

  // Handle pagination
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };
  const totalPage = bookingsData.meta.totalPage;

  return (
    <div className="md:my-5 mb-20 sm:mb-40">
      <Container>
        <DashboardHeader title="Manage Bookings" />
        <div>
          <SlideInFromLeft>
            <ul className="grid grid-cols-2 mt-4 justify-center  p-1 w-full">
              <li
                id="unpaidTab"
                className={`tab font-semibold text-center text-sm py-3 px-6  rounded-s-lg  tracking-wide cursor-pointer ${
                  activeTab === "unpaid"
                    ? "text-white bg-secondary"
                    : "text-gray-500 bg-gray-200"
                }`}
                onClick={() => {
                  setActiveTab("unpaid");
                  setPage(1);
                }}
              >
                Unpaid
              </li>
              <li
                id="paidTab"
                className={`tab font-semibold text-center text-sm py-3 px-6 rounded-e-lg tracking-wide cursor-pointer ${
                  activeTab === "paid"
                    ? "text-white bg-secondary"
                    : "text-gray-500 bg-gray-200"
                }`}
                onClick={() => {
                  setActiveTab("paid");
                  setPage(1);
                }}
              >
                Paid
              </li>
            </ul>
          </SlideInFromLeft>
          <div className="mt-8">
            {activeTab === "unpaid" && (
              <div id="unpaid">
                <BookingManagementTable bookingsData={bookingsData.data} />
              </div>
            )}
            {activeTab === "paid" && (
              <div id="paid">
                <BookingManagementTable bookingsData={bookingsData.data} />
              </div>
            )}
          </div>
        </div>
        {bookingsData.data.length > 0 && (
          <FadeInUpAnimation>
            <div className="mt-8">
              <PaginationComponent
                page={page}
                handlePageChange={handlePageChange}
                totalPage={totalPage}
              />
            </div>
          </FadeInUpAnimation>
        )}
      </Container>
    </div>
  );
};

export default BookingManagement;
