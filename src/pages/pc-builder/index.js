/* eslint-disable @next/next/no-img-element */
import StarRating from "@/components/StarRating";
import { BuilderContext } from "@/context/ProductContext";
import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";
import React, { useContext } from "react";
import { BiDesktop } from "react-icons/bi";
import {
  BsCpu,
  BsDeviceHdd,
  BsMotherboard,
  BsPower,
  BsTicketDetailed,
} from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";

const PcBuilder = () => {
  const { builderProduct, setBuilderProduct } = useContext(BuilderContext);
  return (
    <div className="container mx-auto px-4 lg:px-32 py-16">
      <div className="mb-3 py-4 bg-gray-300 rounded px-6 font-semibold text-sm md:text-lg flex items-center justify-between">
        <p>Select Components</p>
        <p>Total Product: {builderProduct.length}</p>
      </div>
      {/* Cpu */}
      {builderProduct.find((product) => product.category === "CPU") ? (
        // <p>{builderProduct[0].productName}</p>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-2 xl:px-6 mb-8 bg-gray-200 rounded py-3">
          <div className="flex flex-col md:flex-row items-center gap-5 w-[55%]">
            <div className="w-[100px]">
              <img src={builderProduct[0].image} alt="CPU-Image" />
            </div>
            <div>
              <p className="mb-1 font-semibold text-base md:text-sm lg:text-base">
                {builderProduct[0].productName}
              </p>
              <p>
                Category:{" "}
                <span className="text-blue-600 font-semibold">
                  {builderProduct[0].category}
                </span>
              </p>
            </div>
          </div>
          <p className="text-base md:text-sm lg:text-base">
            Price: <br className="hidden md:block xl:hidden" />
            <span className="text-green-600 font-semibold">
              ${builderProduct[0].price}
            </span>
          </p>
          <p className="text-base md:text-sm lg:text-base">
            Status: <br className="hidden md:block xl:hidden" />
            <span className="text-green-600 font-semibold">
              {builderProduct[0].status ? "In Stock" : "Out of Stock"}
            </span>
          </p>
          <p>
            <StarRating rating={4} />
          </p>
        </div>
      ) : (
        <div className="flex items-center justify-between px-2 xl:px-6 my-8 bg-gray-200 py-4 rounded">
          <div className="flex items-center justify-between">
            <BsCpu className="text-2xl md:text-4xl mr-2 md:mr-5" />
            <p className="text-sm md:text-base font-medium">CPU / Processor</p>
          </div>
          <div className="flex items-center">
            <Link href="/pc-builder/products/cpu">
              <button className="w-20 md:w-28 py-2 md:py-3 rounded bg-blue-600 text-white">
                Select
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* Motherboard */}
      {builderProduct.find((product) => product.category === "Motherboard") ? (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-2 xl:px-6 mb-8 bg-gray-200 rounded py-3">
          <div className="flex flex-col md:flex-row items-center gap-5 w-[55%]">
            <div className="w-[100px]">
              <img src={builderProduct[1].image} alt="CPU-Image" />
            </div>
            <div>
              <p className="mb-1 font-semibold text-base md:text-sm lg:text-base">
                {builderProduct[1].productName}
              </p>
              <p>
                Category:{" "}
                <span className="text-blue-600 font-semibold">
                  {builderProduct[1].category}
                </span>
              </p>
            </div>
          </div>
          <p className="text-base md:text-sm lg:text-base">
            Price: <br className="hidden md:block xl:hidden" />
            <span className="text-green-600 font-semibold">
              ${builderProduct[1].price}
            </span>
          </p>
          <p className="text-base md:text-sm lg:text-base">
            Status: <br className="hidden md:block xl:hidden" />
            <span className="text-green-600 font-semibold">
              {builderProduct[1].status ? "In Stock" : "Out of Stock"}
            </span>
          </p>
          <p>
            <StarRating rating={4} />
          </p>
        </div>
      ) : (
        <div className="flex items-center justify-between px-2 xl:px-6 my-8 bg-gray-200 py-4 rounded">
          <div className="flex items-center justify-between">
            <BsMotherboard className="text-2xl md:text-4xl mr-2 md:mr-5" />
            <p className="text-sm md:text-base font-medium">Motherboard</p>
          </div>
          <div className="flex items-center">
            <Link href="/pc-builder/products/motherboard">
              <button className="w-20 md:w-28 py-2 md:py-3 rounded bg-blue-600 text-white">
                Select
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* Ram */}
      {builderProduct.find((product) => product.category === "RAM") ? (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-2 xl:px-6 mb-8 bg-gray-200 rounded py-3">
          <div className="flex flex-col md:flex-row items-center gap-5 w-[55%]">
            <div className="w-[100px]">
              <img src={builderProduct[2].image} alt="CPU-Image" />
            </div>
            <div>
              <p className="mb-1 font-semibold text-base md:text-sm lg:text-base">
                {builderProduct[2].productName}
              </p>
              <p>
                Category:{" "}
                <span className="text-blue-600 font-semibold">
                  {builderProduct[2].category}
                </span>
              </p>
            </div>
          </div>
          <p className="text-base md:text-sm lg:text-base">
            Price: <br className="hidden md:block xl:hidden" />
            <span className="text-green-600 font-semibold">
              ${builderProduct[2].price}
            </span>
          </p>
          <p className="text-base md:text-sm lg:text-base">
            Status: <br className="hidden md:block xl:hidden" />
            <span className="text-green-600 font-semibold">
              {builderProduct[2].status ? "In Stock" : "Out of Stock"}
            </span>
          </p>
          <p>
            <StarRating rating={4} />
          </p>
        </div>
      ) : (
        <div className="flex items-center justify-between px-2 xl:px-6 my-8 bg-gray-200 py-4 rounded">
          <div className="flex items-center justify-between">
            <BsTicketDetailed className="text-2xl md:text-4xl mr-2 md:mr-5" />
            <p className="text-sm md:text-base font-medium">Ram</p>
          </div>
          <div className="flex items-center">
            <Link href="/pc-builder/products/ram">
              <button className="w-20 md:w-28 py-2 md:py-3 rounded bg-blue-600 text-white">
                Select
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* Psu */}
      {builderProduct.find((product) => product.category === "PSU") ? (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-2 xl:px-6 mb-8 bg-gray-200 rounded py-3">
          <div className="flex flex-col md:flex-row items-center gap-5 w-[55%]">
            <div className="w-[100px]">
              <img src={builderProduct[3].image} alt="CPU-Image" />
            </div>
            <div>
              <p className="mb-1 font-semibold text-base md:text-sm lg:text-base">
                {builderProduct[3].productName}
              </p>
              <p>
                Category:{" "}
                <span className="text-blue-600 font-semibold">
                  {builderProduct[3].category}
                </span>
              </p>
            </div>
          </div>
          <p className="text-base md:text-sm lg:text-base">
            Price: <br className="hidden md:block xl:hidden" />
            <span className="text-green-600 font-semibold">
              ${builderProduct[3].price}
            </span>
          </p>
          <p className="text-base md:text-sm lg:text-base">
            Status: <br className="hidden md:block xl:hidden" />
            <span className="text-green-600 font-semibold">
              {builderProduct[3].status ? "In Stock" : "Out of Stock"}
            </span>
          </p>
          <p>
            <StarRating rating={4} />
          </p>
        </div>
      ) : (
        <div className="flex items-center justify-between px-2 xl:px-6 my-8 bg-gray-200 py-4 rounded">
          <div className="flex items-center justify-between">
            <BsPower className="text-2xl md:text-4xl mr-2 md:mr-5" />
            <p className="text-sm md:text-base font-medium">
              Power Supply Unit
            </p>
          </div>
          <div className="flex items-center">
            <Link href="/pc-builder/products/psu">
              <button className="w-20 md:w-28 py-2 md:py-3 rounded bg-blue-600 text-white">
                Select
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* Storage Device */}
      {builderProduct.find((product) => product.category === "Storage") ? (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-2 xl:px-6 mb-8 bg-gray-200 rounded py-3">
          <div className="flex flex-col md:flex-row items-center gap-5 w-[55%]">
            <div className="w-[100px]">
              <img src={builderProduct[4].image} alt="CPU-Image" />
            </div>
            <div>
              <p className="mb-1 font-semibold text-base md:text-sm lg:text-base">
                {builderProduct[4].productName}
              </p>
              <p>
                Category:{" "}
                <span className="text-blue-600 font-semibold">
                  {builderProduct[4].category}
                </span>
              </p>
            </div>
          </div>
          <p className="text-base md:text-sm lg:text-base">
            Price: <br className="hidden md:block xl:hidden" />
            <span className="text-green-600 font-semibold">
              ${builderProduct[4].price}
            </span>
          </p>
          <p className="text-base md:text-sm lg:text-base">
            Status: <br className="hidden md:block xl:hidden" />
            <span className="text-green-600 font-semibold">
              {builderProduct[4].status ? "In Stock" : "Out of Stock"}
            </span>
          </p>
          <p>
            <StarRating rating={4} />
          </p>
        </div>
      ) : (
        <div className="flex items-center justify-between px-2 xl:px-6 my-8 bg-gray-200 py-4 rounded">
          <div className="flex items-center justify-between">
            <BsDeviceHdd className="text-2xl md:text-4xl mr-2 md:mr-5" />
            <p className="text-sm md:text-base font-medium">Storage Device</p>
          </div>
          <div className="flex items-center">
            <Link href="/pc-builder/products/storage">
              <button className="w-20 md:w-28 py-2 md:py-3 rounded bg-blue-600 text-white">
                Select
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* Monitor */}
      {builderProduct.find((product) => product.category === "Monitor") ? (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-2 xl:px-6 mb-8 bg-gray-200 rounded py-3">
          <div className="flex flex-col md:flex-row items-center gap-5 w-[55%]">
            <div className="w-[100px]">
              <img src={builderProduct[5].image} alt="CPU-Image" />
            </div>
            <div>
              <p className="mb-1 font-semibold text-base md:text-sm lg:text-base">
                {builderProduct[5].productName}
              </p>
              <p>
                Category:{" "}
                <span className="text-blue-600 font-semibold">
                  {builderProduct[5].category}
                </span>
              </p>
            </div>
          </div>
          <p className="text-base md:text-sm lg:text-base">
            Price: <br className="hidden md:block xl:hidden" />
            <span className="text-green-600 font-semibold">
              ${builderProduct[5].price}
            </span>
          </p>
          <p className="text-base md:text-sm lg:text-base">
            Status: <br className="hidden md:block xl:hidden" />
            <span className="text-green-600 font-semibold">
              {builderProduct[5].status ? "In Stock" : "Out of Stock"}
            </span>
          </p>
          <p>
            <StarRating rating={4} />
          </p>
        </div>
      ) : (
        <div className="flex items-center justify-between px-2 xl:px-6 my-8 bg-gray-200 py-4 rounded">
          <div className="flex items-center justify-between">
            <BiDesktop className="text-2xl md:text-4xl mr-2 md:mr-5" />
            <p className="text-sm md:text-base font-medium">Monitor</p>
          </div>
          <div className="flex items-center">
            <Link href="/pc-builder/products/monitor">
              <button className="w-20 md:w-28 py-2 md:py-3 rounded bg-blue-600 text-white">
                Select
              </button>
            </Link>
          </div>
        </div>
      )}
      <div className="text-right pr-2 xl:pr-6">
        <button
          onClick={() => {
            toast.success("Build Complete");
            setBuilderProduct([]);
          }}
          className="w-32 py-2 md:py-3 rounded bg-blue-600 text-white disabled:bg-gray-300 font-semibold disabled:text-gray-600 disabled:cursor-not-allowed"
          disabled={builderProduct.length !== 6}
        >
          Complete Build
        </button>
      </div>
    </div>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
