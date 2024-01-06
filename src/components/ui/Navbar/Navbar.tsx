import Link from "next/link";
import React from "react";

const Navbar = () => {
  const user = null;
  return (
    <header className="text-gray-600 body-font sticky top-0 z-10 bg-white">
      <nav className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl font-bold">Exam.com</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-900" href="/">
            Home
          </Link>
          <Link className="mr-5 hover:text-gray-900" href="/">
            Question Bank
          </Link>

          <Link className="mr-5 hover:text-gray-900" href="/addQuestions">
            addQuestion
          </Link>
        </nav>

        {user ? (
          <Link href={"/signUp"}>
            <button
              //   onClick={handleLogout}
              className="inline-flex items-center bg-[#61a5c2] hover:bg-[#013a63]  text-white border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0"
            >
              SignOut
            </button>
          </Link>
        ) : (
          <>
            <Link className="mx-3" href={"/login"}>
              <button className="inline-flex items-center  bg-[#61a5c2] hover:bg-[#013a63]  text-white border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
                Login
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </Link>
            <Link href={"/signUp"}>
              <button className="inline-flex items-center bg-[#61a5c2] hover:bg-[#013a63] text-white  border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
                SignUp
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
