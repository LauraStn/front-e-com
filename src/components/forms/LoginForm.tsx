import { login, registerUser } from "@/services/auth";
import { LoginProps } from "@/utils/types";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

const LoginForm = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginProps>();

  const onSubmit: SubmitHandler<LoginProps> = (data) =>
    login(data)
      .then((res: any) => {
        if (res.status === 201) {
          toast.success("Login successfull");
          window.localStorage.setItem("token", res.data.token.access_token);
          window.localStorage.setItem("role", res.data.role);
          push("/myapp");
        } else {
          toast.error(res.response.data.message);
        }
      })
      .catch((e) => toast.error(e));
  return (
    <div className="bg-white text-slate-700 w-screen">
      <div className="flex gap-8 h-screen container pt-7 items-center flex-col">
        <div className="text-slate-400 items-center pb-6">
          <svg
            className="w-10 h-10 mx-auto pb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          <div className="text-center pb-1">Welcome back!</div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:w-2/4 lg:w-1/3 flex flex-col items-center bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md pt-12"
        >
          <div className="w-3/4 mb-6">
            <input
              type="email"
              id="email"
              className="w-full text-black py-2 px-8  rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="w-3/4 mb-6">
            <input
              type="password"
              id="password"
              className="w-full py-2 px-8 rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </div>
          <div className="w-3/4 mb-1">
            <input
              value="LOGIN"
              type="submit"
              className="py-2 cursor-pointer bg-blue-500 w-full rounded text-blue-50 font-bold hover:bg-blue-600"
            />
          </div>
          <div className="w-3/4 mb-6">
            <div className="text-left ">
              <p className="text-xs text-slate-400">
                Forgot your password?
                <a
                  className="font-semibold transition-colors text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  &nbsp;Reset
                </a>
              </p>
            </div>
          </div>
          <div className="w-3/4 mb-6">
            <div className="text-right ">
              <p className="text-xs text-slate-400">
                Don't have an account?
                <a
                  className="font-semibold transition-colors text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  &nbsp;Get Started
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
