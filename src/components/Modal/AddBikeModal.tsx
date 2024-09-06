/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useAddBikeMutation } from "@/redux/api/bikes/bikes.api";
import useUserProfile from "@/hooks/useUserProfile";
import { imageUp } from "@/utils/imageUpload";
import { ImSpinner9 } from "react-icons/im";

const AddBikeModal = () => {
  const { token } = useUserProfile();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [addBike, { isLoading }] = useAddBikeMutation();

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      /* get the image file */
      const image = data.image[0];
      let imageUrl = "";
      try {
        /* upload image */
        const imgData = await imageUp(image);
        /* get the url */
        imageUrl = imgData.data.display_url;
      } catch (error: any) {
        toast.error("Image upload failed. Please try again.");
        return; // Exit if image upload fails
      }
      const bikeData = { ...data, image: imageUrl };
      console.log(bikeData);
      await addBike({ bikeData, token }).unwrap();
      toast.success("Bike Added Successfully!");
      setIsOpen(false);
      reset();
      setLoading(false);
    } catch (err: any) {
      toast.error(err.data?.message || err.message || err);
      setLoading(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      reset();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button className="primary-button">Add Bike</button>
      </DialogTrigger>
      <DialogContent className="max-w-[370px] sm:max-w-md md:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-primary dark:text-white text-center font-bold">
            Add Bike
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <div>
              <label htmlFor="bike_name" className="add-input-label">
                Bike Name
              </label>
              <input
                type="text"
                id="name"
                className="add-input-field"
                placeholder="bike name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-xs text-red-500">Name is required *</span>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 ">
              <div>
                <label htmlFor="brand" className="add-input-label">
                  Brand
                </label>
                <select
                  className="add-input-field"
                  {...register("brand", { required: true })}
                >
                  <option value="">Select</option>
                  <option value="yamaha">Yamaha</option>
                  <option value="honda">Honda</option>
                  <option value="kawasaki">Kawasaki</option>
                  <option value="suzuki">Suzuki</option>  
                  <option value="bmw">BMW</option>
                  <option value="ducati">Ducati</option>  
                  <option value="triumph">Triumph</option>
                  <option value="hero">Hero</option>
                  <option value="ktm">KTM</option>
                  <option value="harley-davidson">Harley-Davidson</option>
                  <option value="bajaj">Bajaj</option>
                  <option value="victory-motorcycles">
                    Victory Motorcycles
                  </option>
                  <option value="royal-enfield">Royal Enfield</option>
                  <option value="benelli">Benelli</option>
                  <option value="cfmoto">CFMoto</option>
                  <option value="tvs">TVS</option>
                </select>
                {errors.brand && (
                  <span className=" text-xs text-red-500">
                    Please select any brand *
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="model" className="add-input-label">
                  Model
                </label>
                <input
                  type="text"
                  id="model"
                  className="add-input-field"
                  placeholder="bike model "
                  {...register("model", {
                    required: true
                  })}
                />
                {errors.model && (
                  <span className=" text-xs text-red-500">
                    Please add bike model
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 ">
              <div>
                <label htmlFor="cc" className="add-input-label">
                  Engine
                </label>
                <input
                  type="number"
                  id="cc"
                  className="add-input-field"
                  placeholder="engine cc"
                  {...register("cc", {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
                {errors.cc && (
                  <span className=" text-xs text-red-500">
                    Please add engine cc *
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="year" className="add-input-label">
                  Year
                </label>
                <input
                  type="text"
                  id="year"
                  className="add-input-field"
                  placeholder="year "
                  {...register("year", { required: true })}
                />
                {errors.year && (
                  <span className=" text-xs text-red-500">
                    Please add year *
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 ">
              <div>
                <label htmlFor="mileage" className="add-input-label">
                  Mileage
                </label>
                <input
                  type="text"
                  id="mileage"
                  className="add-input-field"
                  placeholder="mileage kmpl"
                  {...register("mileage", { required: true })}
                />
                {errors.mileage && (
                  <span className=" text-xs text-red-500">
                    Please add bike mileage *
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="pricePerHour" className="add-input-label">
                  Price Per Hour
                </label>
                <input
                  type="number"
                  id="pricePerHour"
                  className="add-input-field"
                  placeholder="pricePerHour"
                  {...register("pricePerHour", {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
                {errors.pricePerHour && (
                  <span className="text-xs text-red-500">
                    Price PerHour is required *
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="mb-5 grid grid-cols-1 md:grid-cols-2 md:gap-5 ">
            <div>
              <label htmlFor="image" className="add-input-label">
                Image
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-200 dark:placeholder-gray-400 shadow"
                id="file_input"
                type="file"
                {...register("image", { required: true })}
              />
              {errors.image && (
                <span className="text-xs text-red-500">
                  Image is required *
                </span>
              )}
            </div>
            <div>
              <label htmlFor="description" className="add-input-label">
                Description
              </label>
              <textarea
                id="description"
                className="add-input-field"
                placeholder="Write Class Description..."
                rows={2}
                {...register("description", { required: true })}
              />
              {errors.description && (
                <span className="text-xs text-red-500">
                  Description is required *
                </span>
              )}
            </div>
          </div>
          <div className="flex justify-end">
            <button className="w-full primary-button" type="submit">
              {loading || isLoading ? (
                <ImSpinner9 className="m-auto animate-spin" size={24} />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddBikeModal;
