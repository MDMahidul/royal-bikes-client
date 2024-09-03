import { useEffect } from "react";
import { TBike } from "@/types/types";
import BikeCard from "../Cards/BikeCard";
import { IoMdClose } from "react-icons/io";
import NoData from "../Error/NoData";

type TModalProp = {
  bikes: TBike[];
  isOpen: boolean;
  onClose: () => void;
};

const SearchResultModal = ({ bikes, isOpen, onClose }: TModalProp) => {
  console.log(bikes);
  // Close the modal when the 'Escape' key is pressed
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Main modal */}
      <div
        id="default-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 overflow-auto"
      >
        <div className="relative p-4 w-full max-w-5xl max-h-full ">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Showing Search Results
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={onClose}
              >
                <IoMdClose className="w-6 h-6" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-4 md:p-5 space-y-4">
              {bikes.data.length <= 0 ? (
                <NoData />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5">
                  {bikes?.data.map((bike: TBike) => (
                    <BikeCard key={bike._id} bike={bike} />
                  ))}
                </div>
              )}
            </div>
            {/* Modal footer */}
            <div className="flex justify-end items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                type="button"
                className="primary-button"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResultModal;
