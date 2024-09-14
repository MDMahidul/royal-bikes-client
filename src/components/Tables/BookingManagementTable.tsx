/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import NoData from "../Error/NoData";
import { TBooking } from "@/types/types";
import { formatDateTime } from "@/utils/formatDateTime";
import SlideInFromLeft from "../Animation/SlideFromLeft";
import { useReturnBikeMutation } from "@/redux/api/booking/booking.api";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";

const BookingManagementTable = ({ bookingsData }: any) => {
  const [returnBike] = useReturnBikeMutation();
  const token = useAppSelector(useCurrentToken);

  const handleReturn = async(id:string) => {
    try {
      await returnBike({ id, token }).unwrap();
      toast.success("Bike return successfully!");
    } catch (error:any) {
      toast.error(error?.data?.message);
    }
  };
  return (
    <div>
      {bookingsData?.data.length === 0 ? (
        <NoData />
      ) : (
        <SlideInFromLeft>
          <div className="overflow-x-auto">
            <Table className="min-w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">User</TableHead>
                  <TableHead className="text-center">Bike</TableHead>
                  <TableHead className="text-center">Time</TableHead>
                  <TableHead className="text-center">Total</TableHead>
                  <TableHead className="text-center">Returned</TableHead>
                  <TableHead className="text-center">Payment</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookingsData?.data.map((booking: TBooking, index: number) => (
                  <TableRow key={index}>
                    <TableCell className="text-center">
                      <div className="text-left">
                        <div className="text-sm font-semibold text-primary dark:text-white">
                          {booking?.userId?.name}
                        </div>
                        <div className="font-medium text-xs text-gray-500 ">
                          ID: {booking?.userId?.id}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="text-left">
                        <div className="text-sm font-semibold capitalize text-primary dark:text-white ">
                          {booking.bikeId.name}
                        </div>
                        <div className="font-medium text-xs text-gray-500 ">
                          Rate: ৳{booking.bikeId.pricePerHour}/hr
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div>
                        <span className="font-medium">Start: </span>
                        {formatDateTime(booking.startTime)}
                      </div>
                      <div>
                        {booking.returnTime && (
                          <>
                            <span className="font-medium">End: </span>
                            {formatDateTime(booking.returnTime)}
                          </>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      {booking.isReturned ? booking.totalCost : 0}
                    </TableCell>
                    <TableCell
                      className={`text-${
                        booking.isReturned ? "green" : "red"
                      }-500 font-semibold text-center`}
                    >
                      {booking.isReturned ? "yes" : "not"}
                    </TableCell>
                    <TableCell
                      className={`text-${
                        booking.paymentStatus === "paid" ? "green" : "red"
                      }-500 font-semibold text-center`}
                    >
                      {booking.paymentStatus}
                    </TableCell>

                    <TableCell className="text-center">
                      {booking.isReturned ? (
                        "N/A"
                      ) : (
                        <>
                          <button
                            className="primary-button-sm "
                            onClick={() => handleReturn(booking._id!)}
                          >
                            Calculate
                          </button>
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </SlideInFromLeft>
      )}
    </div>
  );
};

export default BookingManagementTable;
