/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import bannerImage from "@/assets/banner2.jpg";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "@/redux/api/auth/auth.api";
import { ImSpinner9 } from "react-icons/im";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hooks";
import { setUser, TUser } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import ZoomInEffect from "@/components/Animation/ZoomInEffect";

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data: FieldValues) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    try {
      const result = await login(userInfo).unwrap();
      const user = verifyToken(result.data.accessToken) as TUser;
      console.log(user);

      dispatch(setUser({ user: user, token: result.data.accessToken }));

      reset();
      toast.success("Login In successfully!", {
        duration: 2000,
        style: { padding: "10px" },
      });
      navigate("/");
    } catch (error: any) {
      console.log(error.data?.errorSources[0].message);
      toast.error(error.data?.errorSources[0]?.message, {
        duration: 2000,
        style: { padding: "10px" },
      });
    }
  };

  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center "
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-700 to-black opacity-60"></div>
        <ZoomInEffect>
          {" "}
          <div className="flex flex-col justify-center items-center max-w-sm sm:max-w-md md:max-w-xl mx-auto gap-y-8 pt-40 2xl:pt-52">
            <div className="h-full w-full bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 ">
              <h4 className="text-lg my-3 md:text-3xl font-semibold  text-white text-center p-5">
                Login to your account
              </h4>
              <form
                className="px-5 sm:px-10 space-y-5"
                onSubmit={handleSubmit(handleLogin)}
              >
                <div className="relative">
                  <input
                    type="text"
                    id="email"
                    className="block add-input-field appearance-none  peer"
                    placeholder=" "
                    {...register("email", { required: true })}
                  />
                  <label htmlFor="email" className="floating-label">
                    Email
                  </label>
                </div>
                {errors.email && (
                  <span className="text-xs text-white">
                    Email is required *
                  </span>
                )}
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    className="block add-input-field appearance-none  peer"
                    placeholder=" "
                    {...register("password", { required: true })}
                  />
                  <label htmlFor="password" className="floating-label">
                    Password
                  </label>
                </div>
                {errors.password && (
                  <span className="text-xs text-white">
                    Password is required *
                  </span>
                )}
                <div className="text-sm font-medium text-right text-primary hover:text-blue-700">
                  <Link to="/forget-password">Forget password?</Link>
                </div>
                <div>
                  <button className="primary-button w-full">
                    {isLoading ? (
                      <ImSpinner9 className="m-auto animate-spin" size={24} />
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>
              </form>
              <div className="text-center text-sm my-5">
                <p className="text-white">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-primary hover:text-blue-700 font-medium"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </ZoomInEffect>
      </div>
    </>
  );
};

export default Login;
