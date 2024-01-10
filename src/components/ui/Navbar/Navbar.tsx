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
          <span className="ml-3 text-xl font-bold">Exam.com</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-900" href="/">
            Home
          </Link>
          <Link className="mr-5 hover:text-gray-900" href="/">
            Question Bank
          </Link>

          <Link className="mr-5 hover:text-gray-900" href="/add-question">
            addQuestion
          </Link>
          <Link href="/profile" className="mr-5 hover:text-gray-900">
            Dashboard
          </Link>
        </nav>

        {user ? (
          <Link href={"/signin"}>
            <button
              //   onClick={handleLogout}
              className="inline-flex items-center bg-[#61a5c2] hover:bg-[#013a63]  text-white border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0"
            >
              SignOut
            </button>
          </Link>
        ) : (
          <div className="flex">
            <Link className="mx-3" href={"/signin"}>
              <button className="inline-flex items-center  bg-[#2A6F97] hover:bg-[#013a63]  text-white border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
                Login
              </button>
            </Link>
            <Link href={"/signup"}>
              <button className="inline-flex items-center bg-[#61a5c2] hover:bg-[#013a63] text-white  border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
                SignUp
              </button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
