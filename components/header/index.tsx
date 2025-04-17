"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <div className="shadow-white/10 shadow-lg">
      <div className="flex items-center w-[90%] mx-auto max-w-[1440px] justify-between gap-5 py-4 ">
        <div className="size-10">
          <img src="../../vercel.svg" alt="vercel" />
        </div>
        <div>
          <Link href={"/dashboard"}>dashboard</Link>
        </div>
        <Button
          onClick={() => router.push("/login")}
          className="cursor-pointer "
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Header;
