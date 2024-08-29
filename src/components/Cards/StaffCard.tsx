import { FaPhoneAlt } from "react-icons/fa";

type TStaffMember = {
  id: number;
  name: string;
  designation: string;
  email: string;
  phone: string;
  image: string;
};

type StaffCardProps = {
  staff: TStaffMember;
};

const StaffCard = ({ staff }: StaffCardProps) => {
  const { name, designation, phone, image } = staff;
  return (
    <div className="grid grid-cols-3 items-center bg-gray-100 dark:bg-gray-500 p-4 rounded-lg relative">
      <div className="col-span-2 min-h-[190px]">
        <img src={image} className="rounded-lg" />
      </div>

      <div className="bg-white dark:bg-gray-400 rounded-lg p-4 absolute right-4 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] ">
        <h4 className="text-gray-800 dark:text-white text-sm font-bold">
          {name}
        </h4>
        <p className="text-[10px] text-gray-500 dark:text-white">
          {designation}
        </p>
        <div className="flex items-center mt-2 gap-1 text-gray-800 dark:text-white text-xs">
          <FaPhoneAlt />
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
