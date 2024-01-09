import React from "react";

const SignIn = () => {
  return (
    <>
      <div className="flex  w-full items-center justify-center  bg-cover bg-no-repeat min-h-screen">
        <div className="rounded-xl bg-gray-800 bg-opacity-30 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-white">
            <form>
              <div className="mb- text-lg flex flex-col">
                <p className="p text-start">
                  <span className="p-text text-white">Your Email</span>
                </p>
                <input
                  className="w-72 border-none bg-emerald-300 bg-opacity-10 px-6 py-1  text-inherit  placeholder-black text-start shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb- text-lg w-72 flex flex-col">
                <p className=" text-start">
                  <span className="p-text text-white">Password</span>
                </p>
                <input
                  className="w-72 rounded border-none bg-emerald-300 bg-opacity-10 px-6 py-1  text-inherit  placeholder-black text-start shadow-lg outline-none backdrop-blur-md"
                  type="Password"
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
