import bannerImage from "@/assets/banner3.jpg"; 

const Banner = () => {
  return (
    <div
      className="relative lg:min-h-screen 2xl:min-h-[730px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-slate-300 to-black opacity-20"></div>

      {/* Content */}
      <div className="relative hero-content flex justify-center items-center flex-col h-screen text-white">
        <h1 className="text-4xl font-bold">Welcome to Royal Bikes</h1>
        <p className="mt-4">Your premier motorbike rental service</p>
      </div>
    </div>
  );
};

export default Banner;
