"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useLoginMutation } from "@/redux/api/authApi/authApi";
import { storeUserInfo } from "@/services/authServices";
import { message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler } from "react-hook-form";
type FormValues = {
  name: string;
  password: string;
};
const SignIn = () => {
  const [login, { data }] = useLoginMutation();
  console.log(data);
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await login({ ...data }).unwrap();

      if (res.accessToken) {
        message.success("login successful");
        storeUserInfo({ accessToken: res?.accessToken });
        router.push(`/`);
      }
    } catch (error) {
      // @ts-ignore
      message.error(error?.data.message);
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex  w-full items-center justify-center  bg-cover bg-no-repeat min-h-screen">
        <div className="rounded-xl bg-gray-800 bg-opacity-30 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-white">
            <Form submitHandler={onSubmit}>
              <div className="mb- text-lg flex flex-col">
                <p className="p text-start">
                  <span className="p-text">Your Email</span>
                </p>
                <FormInput
                  // className="w-72 border-none  text-black  px-6 py-1 placeholder-slate-700    text-start shadow-lg placeholder:text-sm  outline-none backdrop-blur-md"
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb- text-lg flex flex-col">
                <p className="p text-start">
                  <span className="p-text">Your Email</span>
                </p>
                <FormInput
                  // className="w-72 border-none  text-black  px-6 py-1 placeholder-slate-700 placeholder:text-sm   text-start shadow-lg outline-none backdrop-blur-md"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>

              <div className="mt-4 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className=" bg-cyan-500 bg-opacity-50 px-5 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-cyan-600 outline-none"
                >
                  SignIn
                </button>
              </div>
              <p>
                Dont't Have Account?{" "}
                <Link href={"/signup"} className="text-blue-700 ml-3 ">
                  SignUp
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
