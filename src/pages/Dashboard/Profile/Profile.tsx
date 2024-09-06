import SlideInFromLeft from "@/components/Animation/SlideFromLeft";
import SlideInFromRight from "@/components/Animation/SlideFromRight";
import Container from "@/components/Container/Container";
import LoadingError from "@/components/Error/LoadingError";
import Loader from "@/components/Loader/Loader";
import ProfileUpdateModal from "@/components/Modal/ProfleUpdateModal";
import DashboardHeader from "@/components/SectionHeader/DashboardHeader";
import useUserProfile from "@/hooks/useUserProfile";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { userProfile, isError, isLoading } = useUserProfile();
  if (isLoading) {
    return <Loader height="h-[80vh]" />;
  }
  if (isError || !userProfile) {
    <LoadingError />;
  }
  const { id, name, pImage, email, contactNo, address } = userProfile.data;
 
  return (
    <div className="md:my-5 mb-20 sm:mb-40 ">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <Container>
        <DashboardHeader title="User Profile" />
        <SlideInFromLeft>
          <div className="my-5">
            <p className="text-lg sm:text-2xl font-semibold  text-primary dark:text-white">
              Hello <span className="text-secondary">{name}</span>, Welcome to
              Royal Bikes.
            </p>
          </div>
        </SlideInFromLeft>
        {/* <SlideInFromRight>
          <div className="border-b dark:border-white mb-8">
            <p className="text-center text-primary dark:text-white font-semibold py-5 text-2xl sm:text-3xl">
              User Profile
            </p>
          </div>
        </SlideInFromRight> */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 my-10">
          <SlideInFromLeft>
            <div>
              <img
                className="max-w-[300px]  shadow"
                src={
                  !pImage
                    ? "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                    : pImage
                }
                alt=""
              />
            </div>
          </SlideInFromLeft>
          <SlideInFromRight>
            <div className="space-y-4">
              <div className="relative overflow-x-auto">
                <table className="w-full text-base text-left rtl:text-right text-gray-500 dark:text-white">
                  <tbody>
                    <tr>
                      <th
                        scope="row"
                        className="px-6 py-2.5 font-medium text-gray-900 whitespace-nowrap dark:text-gray-300"
                      >
                        User ID :
                      </th>
                      <td className="px-6 py-2.5">{id}</td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="px-6 py-2.5 font-medium text-gray-900 dark:text-gray-300 whitespace-nowrap"
                      >
                        Name :
                      </th>
                      <td className="px-6 py-2.5">{name}</td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="px-6 py-2.5 font-medium text-gray-900 dark:text-gray-300 whitespace-nowrap"
                      >
                        Email :
                      </th>
                      <td className="px-6 py-2.5">{email}</td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="px-6 py-2.5 font-medium text-gray-900 dark:text-gray-300 whitespace-nowrap"
                      >
                        Contact :
                      </th>
                      <td className="px-6 py-2.5">{contactNo}</td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="px-6 py-2.5 font-medium text-gray-900 dark:text-gray-300 whitespace-nowrap"
                      >
                        Address :
                      </th>
                      <td className="px-6 py-2.5">{address}</td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <ProfileUpdateModal user={userProfile}/>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </SlideInFromRight>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
