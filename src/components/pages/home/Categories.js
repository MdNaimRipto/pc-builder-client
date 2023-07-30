import React from "react";
import Link from "next/link";

const Categories = () => {
  return (
    <div
      className="container px-4 py-16 mx-auto lg:py-20"
      style={{ overflow: "hidden" }}
    >
      <div className="mx-auto mb-10 sm:text-center" data-aos="fade-left">
        <h2 className="mb-4 text-2xl font-semibold text-center md:text-3xl">
          Featured Category
        </h2>
        <p className="text-sm font-semibold text-center md:text-base">
          Get Your Desired Product from Products Category!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 mx-auto md:grid-cols-3">
        <Link
          href={`/`}
          className="flex flex-col items-center p-3 duration-200 border rounded-md py-5 hover:bg-main hover:text-white hover:bg-blue-600 border-black hover:border-blue-600"
        >
          <p className="text-sm font-semibold">CPU / Processors</p>
        </Link>
        <Link
          href={`/`}
          className="flex flex-col items-center p-3 duration-200 border rounded-md py-5 hover:bg-main hover:text-white hover:bg-blue-600 border-black hover:border-blue-600"
        >
          <p className="text-sm font-semibold">Motherboard</p>
        </Link>
        <Link
          href={`/`}
          className="flex flex-col items-center p-3 duration-200 border rounded-md py-5 hover:bg-main hover:text-white hover:bg-blue-600 border-black hover:border-blue-600"
        >
          <p className="text-sm font-semibold">RAM</p>
        </Link>
        <Link
          href={`/`}
          className="flex flex-col items-center p-3 duration-200 border rounded-md py-5 hover:bg-main hover:text-white hover:bg-blue-600 border-black hover:border-blue-600"
        >
          <p className="text-sm font-semibold">Power Supply Unit</p>
        </Link>
        <Link
          href={`/`}
          className="flex flex-col items-center p-3 duration-200 border rounded-md py-5 hover:bg-main hover:text-white hover:bg-blue-600 border-black hover:border-blue-600"
        >
          <p className="text-sm font-semibold">Monitors</p>
        </Link>
        <Link
          href={`/`}
          className="flex flex-col items-center p-3 duration-200 border rounded-md py-5 hover:bg-main hover:text-white hover:bg-blue-600 border-black hover:border-blue-600"
        >
          <p className="text-sm font-semibold">Storage Devices</p>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
