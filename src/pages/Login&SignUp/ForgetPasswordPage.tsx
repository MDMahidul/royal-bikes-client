/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import logo from '@/assets/logo/ffflogo.png'
import { FieldValues, useForm } from "react-hook-form";
import { ImSpinner9 } from "react-icons/im";
import { toast } from "sonner";
import { useForgetpasswordMutation } from "@/redux/api/auth/auth.api";
import { Helmet } from "react-helmet-async";

const ForgetPasswordPage = () => {
  const [forgetpassword, { isLoading }] = useForgetpasswordMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleSingIn = async (data: FieldValues) => {
    const email = {
      email: data.email,
    };
    try {
      await forgetpassword(email).unwrap();
      reset();
      toast.success("Please check your mail to reset password!", {
        duration: 2000,
        style: { padding: "10px" },
      });
      navigate("/login");
    } catch (error: any) {
      console.log(error.data.errorSources[0].message);
      toast.error(error.data?.errorSources[0]?.message, {
        duration: 2000,
        style: { padding: "10px" },
      });
    }
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <Helmet title="Forget Password"/>
      <div className="py-5">
        <img className="w-20 mx-auto" src={logo} alt="" />
      </div>
      <div className="flex flex-col justify-center  gap-y-8">
        <div className=" text-center">
          <h4 className="text-lg md:text-2xl font-semibold  text-primary">
            Submit your email to reset password
          </h4>
        </div>
        <div>
          <form
            className="px-10 space-y-5 min-w-[400px] sm:min-w-[500px]"
            onSubmit={handleSubmit(handleSingIn)}
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
              <span className="text-xs text-red-500">Email is required *</span>
            )}

            <div>
              <button className="primary-button w-full">
                {isLoading ? (
                  <ImSpinner9 className="m-auto animate-spin" size={24} />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
          <div className="text-center text-sm mt-5">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600 font-medium">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
