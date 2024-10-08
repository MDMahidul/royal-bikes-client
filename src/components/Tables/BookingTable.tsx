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
import { Link } from "react-router-dom";

const BookingTable = ({ bookingsData }: any) => {
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
                  <TableHead>Bike</TableHead>
                  <TableHead className="text-center">Time</TableHead>
                  <TableHead className="text-center">Total Cost</TableHead>
                  <TableHead className="text-center">Payment</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookingsData?.data.map((booking: TBooking, index: number) => (
                  <TableRow key={index}>
                    <TableCell className="flex flex-col gap-y-1 sm:flex-row  sm:items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                      <img
                        className="w-14 h-14 rounded-md"
                        src={booking.bikeId.image}
                        alt="Jese image"
                      />
                      <div className="sm:ps-3  text-left">
                        <div className="text-base font-semibold capitalize text-primary dark:text-white">
                          {booking.bikeId.name}
                        </div>
                        <div className="font-medium text-gray-500 ">
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
                        booking.paymentStatus === "paid" ? "green" : "red"
                      }-500 font-semibold text-center`}
                    >
                      {booking.paymentStatus}
                    </TableCell>

                    <TableCell className="text-center">
                      {booking.paymentStatus === "paid" ? (
                        "N/A"
                      ) : (
                        <>
                          <Link
                            to={`/checkout/${booking._id}`}
                            className={`primary-button-sm text-center ${
                              !booking.isReturned
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                            }`}
                            onClick={(e) => {
                              if (!booking.isReturned) {
                                e.preventDefault();
                              }
                            }}
                            aria-disabled={!booking.isReturned}
                          >
                            Pay
                          </Link>
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

export default BookingTable;
