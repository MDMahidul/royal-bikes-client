import { FieldValues, useForm } from "react-hook-form";
import SlideInFromRight from "../Animation/SlideFromRight";
import { ChangeEvent, useState } from "react";
import { toast } from "sonner";
import { FiLoader } from "react-icons/fi";
import { useGetAvailableBikesQuery } from "@/redux/api/bikes/bikes.api";
import { TQueryParams } from "@/types/global";
import { FaMagnifyingGlass } from "react-icons/fa6";
import SearchResultModal from "../Modal/SearchResultModal";

const SearchBar = () => {
  const [params, setParams] = useState<TQueryParams[]>([]);
  const [searchType, setSearchType] = useState<string>("searchTerm");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  /* control the api calling */
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);

  const { register, handleSubmit, reset } = useForm();

  const {
    data: bikesData,
    isLoading,
    isError,
  } = useGetAvailableBikesQuery([...params], { skip: !shouldFetch });

  if (isLoading) {
    toast(
      <p className="flex items-center gap-3 font-semibold">
        <span className="animate-spin">
          <FiLoader />
        </span>
        Searching...
      </p>,
      { duration: 1000 }
    );
  }
  if (isError) {
    toast.error("Something went wrong!", { duration: 2000 });
  }

  const handleSearchTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value);
  };

  const handleSearchByName = (data: FieldValues) => {
    /* for some reason querybuilder not working for handling case sensetiveity so capitalize the  */
    const capitalizedTerm = data[searchType].toLowerCase();
    
    const updatedParams = [{ name: searchType, value: capitalizedTerm }];

    setParams(updatedParams.filter((param) => param.value));
    setShouldFetch(true);
    setIsModalOpen(true);
    reset();
  };

  return (
    <div>
      <SlideInFromRight>
        <form onSubmit={handleSubmit(handleSearchByName)} className="flex">
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
            />
            <button className="banner-btn">
              <FaMagnifyingGlass className="w-4 h-4" />
            </button>
          </div>
        </form>
      </SlideInFromRight>
      {bikesData && (
        <SearchResultModal
          bikes={bikesData}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default SearchBar;
