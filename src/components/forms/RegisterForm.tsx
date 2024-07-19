import { registerUser } from "@/services/auth";
import { RegisterProps } from "@/utils/types";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ErrorMsg } from "../error/Error";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterProps>();

  const onSubmit: SubmitHandler<RegisterProps> = (data) =>
    registerUser(data)
      .then((res: any) => {
        if (res.status === 201) {
          toast.success(res.data);
        } else {
          toast.error(res.response.data.message[0]);
        }
      })
      .catch((e) => toast.error(e));
  return (
    <div className="w-screen pb-8 bg-white">
      <div className="flex justify-center container mx-auto my-auto h-full items-center flex-col">
        <div className="text-slate-400 items-center">
          
          <div className="text-center pb-3">Create an account!</div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="m-auto md:w-2/4 lg:w-1/3 text-slate-700 flex flex-col items-center bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md pt-12"
        >
          <div className="w-3/4 mb-6">{errors.email && (
              <ErrorMsg error={"The field email is required"} />
            )}
            <input
              type="email"
              id="email"
              className="w-full py-2 px-8 bg-slate-100 rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="w-3/4 mb-6">{errors.pseudo && (
              <ErrorMsg error={"The field pseudo is required"} />
            )}
            <input
              type="text"
              id="pseudo"
              className="w-full py-2 px-8 bg-slate-100 rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
              placeholder="Pseudo"
              {...register("pseudo", { required: true })}
            />
          </div>
          <div className="w-3/4 mb-6">{errors.firstName && (
              <ErrorMsg error={"The field first name is require"} />
            )}
            <input
              type="text"
              id="firstName"
              className="w-full py-2 px-8 bg-slate-100 rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
              placeholder="First Name"
              {...register("firstName", { required: true })}
            />
          </div>
          <div className="w-3/4 mb-6">
            {" "}
            {errors.lastName && (
              <ErrorMsg error={"The field last name is required"} />
            )}
            <input
              type="text"
              id="lastName"
              className="w-full py-2 px-8 bg-slate-100 rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
              placeholder="Last Name"
              {...register("lastName", { required: true })}
            />
          </div>
          <div className="w-3/4 mb-6">{errors.password && (
              <ErrorMsg error={"The field password is required"} />
            )}
            <input
              type="password"
              id="password"
              className="w-full text-slate-600 py-2 px-8 bg-slate-100 rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 border-slate-300"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </div>

          <div className="w-3/4 mb-4">
            {errors.gdpr && <ErrorMsg error={"Agree terms and conditions"} />}
            <div className="gap-2 flex items-center">
              <input
                type="checkbox"
                className="before:content['']  relative h-3 w-3 cursor-pointer "
                id="checkbox"
                {...register("gdpr", { required: true })}
              />

              <p className="flex items-center font-sans text-xs font-normal leading-normal text-slate-400 antialiased">
                I agree the
                <a
                  className="font-semibold transition-colors text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  &nbsp;Terms and Conditions
                </a>
              </p>
            </div>
          </div>

          <div className="w-3/4 mb-8">
            <input
              type="submit"
              value="REGISTER"
              className="py-2 cursor-pointer bg-blue-500 w-full rounded text-blue-50 font-bold hover:bg-blue-600"
            />
          </div>
          <div className="w-3/4 mb-6">
           
            <div className="text-right ">
              <p className="text-xs text-slate-400">
                Already have an account?
                <a
                  className="font-semibold transition-colors text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  &nbsp;Come here
                </a>
              </p>
            </div>
          </div>
         
        </form>
       
      </div>
    </div>
  );
};

export default RegisterForm;
