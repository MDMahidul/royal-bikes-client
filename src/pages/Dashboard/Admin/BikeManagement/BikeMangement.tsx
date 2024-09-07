import SlideInFromRight from "@/components/Animation/SlideFromRight";
import Container from "@/components/Container/Container";
import LoadingError from "@/components/Error/LoadingError";
import Loader from "@/components/Loader/Loader";
import AddBikeModal from "@/components/Modal/AddBikeModal";
import DashboardHeader from "@/components/SectionHeader/DashboardHeader";
import {
  useDeleteBikeMutation,
  useGetAllBikesQuery,
} from "@/redux/api/bikes/bikes.api";
import { TQueryParams } from "@/types/global";
import { ChangeEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { FaMagnifyingGlass } from "react-icons/fa6";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import FadeInUpAnimation from "@/components/Animation/FadeInUpAnimtaion";
import SlideInFromLeft from "@/components/Animation/SlideFromLeft";
import DeleteModal from "@/components/Modal/DeleteModal";
import { TBike } from "@/types/types";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import UpdateBikeModal from "@/components/Modal/UpdateBikeModal";
import NoData from "@/components/Error/NoData";
import { FaTimes } from "react-icons/fa";
import PaginationComponent from "@/components/Pagination/PaginationComponent";

const BikeMangement = () => {
  const [params, setParams] = useState<TQueryParams[]>([]);
  const [searchType, setSearchType] = useState<string>("searchTerm");
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const { register, handleSubmit, setValue } = useForm();
  const token = useAppSelector(useCurrentToken);

  const {
    data: bikesData,
    isLoading,
    isError,
  } = useGetAllBikesQuery([{ name: "page", value: page }, ...params], {
    pollingInterval: 30000,
  });
  const [deleteBike] = useDeleteBikeMutation();

  if (isLoading) {
    return <Loader height="h-[80vh]" />;
  }
  if (isError || !bikesData) {
    return <LoadingError />;
  }

  const handleSearchTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value);
  };

  /* handle pagination */
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleSearch = (data: FieldValues) => {
    /* for some reason querybuilder not working for handling case sensetiveity so capitalize the  */
    const capitalizedTerm = data[searchType].toLowerCase();

    const updatedParams = [{ name: searchType, value: capitalizedTerm }];

    setParams(updatedParams.filter((param) => param.value));
    setPage(1);
    /* reset(); */
  };

  /* handle availablity filtering */
  const handleAvailabilityFilter = (value: string) => {
    /* show all if no filter selected */
    const updatedParams = value ? [{ name: "isAvailable", value }] : [];
    setParams(updatedParams);
    setPage(1);
  };

  /* handle delete */
  const handleDeleteBike = async (id: string) => {
    await deleteBike({ id, token });
  };

  /* for showing the coss icon */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  /* clear the search input field */
  const clearInput = () => {
    setInputValue("");
    setParams([]);
    setValue(searchType, "");
  };
 const totalPage = bikesData.meta.totalPage;
  return (
    <div className="md:my-5 mb-20 sm:mb-40 ">
      <Container>
        <DashboardHeader title="Manage Bikes" />
        <div className="my-7 max-w-md mx-auto">
          <SlideInFromRight>
            <form onSubmit={handleSubmit(handleSearch)} className="flex">
              <select
                className="banner-select-field"
                onChange={handleSearchTypeChange}
              >
                <option value="searchTerm"> Search By </option>
                <option value="searchTerm"> Name </option>
                <option value="model"> Model </option>
                <option value="brand"> Brand </option>
                <option value="year"> Year </option>
              </select>
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="banner-input-field"
                  placeholder="Search Your Bike"
                  {...register(searchType, { required: true })}
                  value={inputValue}
                  onChange={handleInputChange}
                />
                {inputValue && (
                  <button
                    type="button"
                    className="absolute right-10 sm:right-20 top-3 text-gray-500"
                    onClick={clearInput}
                  >
                    <FaTimes className="w-4 h-4" />
                  </button>
                )}
                <button className="banner-btn">
                  <FaMagnifyingGlass className="w-4 h-4" />
                </button>
              </div>
            </form>
          </SlideInFromRight>
        </div>
        <div className="flex justify-between items-center md:px-10 mb-5">
          <SlideInFromLeft>
            <select
              className="border-0 border-b border-b-secondary focus:ring-0 font-semibold text-sm text-gray-600 dark:text-white dark:bg-gray-700"
              /* value={sortOrder || ""}
              onChange={handleSortChange} */
              onChange={(e) => handleAvailabilityFilter(e.target.value)}
            >
              <option value="">Filter by status</option>
              <option value="true">Available</option>
              <option value="false">Not Available</option>
            </select>
          </SlideInFromLeft>
          <SlideInFromRight>
            <AddBikeModal />
          </SlideInFromRight>
        </div>
        {bikesData.data.length === 0 ? (
          <NoData />
        ) : (
          <FadeInUpAnimation>
            <div className="overflow-x-auto">
              <Table className="min-w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead>SL</TableHead>
                    <TableHead>Bike</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Rate</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bikesData.data.map((bike: TBike, index: number) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {(page - 1) * bikesData.meta.limit + index + 1}
                      </TableCell>
                      <TableCell className="flex flex-col gap-y-1 sm:flex-row  sm:items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                        <img
                          className="w-14 h-14 rounded-md"
                          src={bike.image}
                          alt="Jese image"
                        />
                        <div className="sm:ps-3 capitalize">
                          <Link
                            to={`/bikes/${bike._id}`}
                            className="text-base font-semibold"
                          >
                            {bike.name}
                          </Link>
                          <div className="font-normal text-gray-500 capitalize">
                            {bike.brand}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell
                        className={`text-${
                          bike.isAvailable ? "green" : "red"
                        }-500 font-semibold`}
                      >
                        {bike.isAvailable === true
                          ? "Available"
                          : "Not Available"}
                      </TableCell>
                      <TableCell>৳{bike.pricePerHour}/hr</TableCell>
                      <TableCell>
                        <div className="flex gap-4 justify-center items-center">
                          <UpdateBikeModal bike={bike} />
                          <DeleteModal
                            onDelete={() =>
                              handleDeleteBike(bike._id as string)
                            }
                            entityName="Bike"
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </FadeInUpAnimation>
        )}
        <SlideInFromLeft>
          <div className="mt-8">
            <PaginationComponent
              page={page}
              handlePageChange={handlePageChange}
              totalPage={totalPage}
            />
          </div>
        </SlideInFromLeft>
      </Container>
    </div>
  );
};

export default BikeMangement;
