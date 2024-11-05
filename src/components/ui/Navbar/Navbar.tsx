"use client";
import { authKey } from "@/constant/storage-key";
import { getUserInfo, removeUserInfo } from "@/services/authServices";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [role, setRole] = useState<string | null>(null);
  useEffect(() => {
    const userInfo = getUserInfo() as any;
    setRole(userInfo?.role || null);
  }, []);

  const router = useRouter();
  const handleSignOut = () => {
    removeUserInfo(authKey);

    router.push(`/signin`);
  };
  return (
    <header className="text-gray-600 body-font sticky top-0 z-10 bg-white border">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl font-bold">Exam.com</span>
        </Link>
        <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-900" href="/">
            Home
          </Link>
          <Link className="mr-5 hover:text-gray-900" href="/">
            Question Bank
          </Link>
        </div>
        <div className="flex items-center gap-3 mx-3">
          {role && (
            <>
              <Link href="/profile" className="mr-5 hover:text-gray-900">
                Dashboard
              </Link>
              <div
                title="You Have 20 Gem, Take Free exam's to earn more"
                className="flex items-center justify-center border px-2 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 "
              >
                <span className="text-white font-bold"> 20</span>
                <Image
                  className="mb-2 ml-1"
                  src={"/images/gem.png"}
                  height={30}
                  width={30}
                  alt="gem"
                ></Image>
              </div>
            </>
          )}
        </div>
        {role ? (
          <Link href={"/signin"}>
            <button
              onClick={handleSignOut}
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
      </div>
    </header>
  );
};

export default Navbar;
