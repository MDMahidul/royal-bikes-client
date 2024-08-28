import { PuffLoader } from "react-spinners";
type TLoaderProps = {
  height: string;
};
const Loader = ({ height }: TLoaderProps) => {
  return (
    <div className={`${height} flex justify-center items-center flex-col`}>
      <PuffLoader size={40} color="#FF4C4C"></PuffLoader>
    </div>
  );
};

export default Loader;
