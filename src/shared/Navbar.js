import React, { Fragment } from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [loginListOpen, setLoginListOpen] = useState(true);
  const handleLoginListClick = () => {
    setLoginListOpen(!loginListOpen);
  };

  const subMenu = (
    <>
      <li>
        <Link
          href={"/products/cpu"}
          className="dropdown-link"
          onClick={() => {
            setClick(false);
          }}
        >
          CPU / Processor
        </Link>
      </li>
      <li>
        <Link
          href={"/products/motherboard"}
          className="dropdown-link"
          onClick={() => {
            setClick(false);
          }}
        >
          Motherboard
        </Link>
      </li>
      <li>
        <Link
          href={"/products/ram"}
          className="dropdown-link"
          onClick={() => {
            setClick(false);
          }}
        >
          RAM
        </Link>
      </li>
      <li>
        <Link
          href={"/products/psu"}
          className="dropdown-link"
          onClick={() => {
            setClick(false);
          }}
        >
          Power Supply Unit
        </Link>
      </li>
      <li>
        <Link
          href={"/products/storage"}
          className="dropdown-link"
          onClick={() => {
            setClick(false);
          }}
        >
          Storage Device
        </Link>
      </li>
      <li>
        <Link
          href={"/products/monitor"}
          className="dropdown-link"
          onClick={() => {
            setClick(false);
          }}
        >
          Monitor
        </Link>
      </li>
      <li>
        <Link
          href={"/products/others"}
          className="dropdown-link"
          onClick={() => {
            setClick(false);
          }}
        >
          Others
        </Link>
      </li>
    </>
  );

  return (
    <nav className="shadow-sm sticky top-0 bg-white z-50 border-b border-gray-200">
      <div className="nav-container container mx-auto">
        <div className="nav-logo hidden lg:block">
          <Link href="/">
            <p>
              PC<span className="text-blue-600">BUILDER</span>
            </p>
          </Link>
        </div>
        <div className="flex items-center justify-between w-full lg:hidden px-4">
          <div className="nav-logo">
            <Link
              href="/"
              onClick={() => {
                setClick(false);
              }}
            >
              <p>
                PC<span className="text-blue-600">BUILDER</span>
              </p>
            </Link>
          </div>
          <div>
            <div
              onClick={() => {
                setClick(!click);
              }}
              className="block lg:hidden text-3xl text-blue-600"
            >
              {!click ? <FaBars /> : <GrClose />}
            </div>
          </div>
        </div>
        <div
          className={`absolute w-full h-[500px] lg:h-full lg:w-[50%] px-3 bg-white lg:static top-24 duration-300 ${
            click ? `left-0 duration-300` : `left-[-1000px] duration-500`
          }`}
        >
          <ul className="main-menu font-semibold">
            <li className="main-list">
              <Link
                href={"/"}
                className="main-link"
                onClick={() => {
                  setClick(false);
                }}
              >
                <span>Home</span>
              </Link>
            </li>
            <li className="main-list">
              <p className="main-link">
                <span>Components</span>
                <MdKeyboardArrowDown className="dropdown-arrow" />
              </p>
              <div className="dropdown-container">
                <ul className="dropdown-lists">{subMenu}</ul>
              </div>
            </li>

            <li className="main-list">
              <Link
                href={"/"}
                className="main-link"
                onClick={() => {
                  setClick(false);
                }}
              >
                <span>About Us</span>
              </Link>
            </li>

            <li className="main-list">
              <Link
                href={"/"}
                className="main-link"
                onClick={() => {
                  setClick(false);
                }}
              >
                <span>Contact Us</span>
              </Link>
            </li>
            <li className="main-list lg:hidden xl:block">
              <Link
                href={"/"}
                className="main-link"
                onClick={() => {
                  setClick(false);
                }}
              >
                <span>Special Deals</span>
              </Link>
            </li>
            <li className="main-list block lg:hidden">
              <Link
                href="/"
                onClick={() => {
                  setClick(false);
                }}
              >
                <button className="w-full border border-blue-600 text-blue-600">
                  Login Now
                </button>
              </Link>
            </li>
            <li className="main-list block lg:hidden">
              <Link
                href="/pc-builder"
                onClick={() => {
                  setClick(false);
                }}
              >
                <button className="w-full bg-blue-600 text-white mt-3">
                  PC BUILDER
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-buttons hidden lg:block">
          <div className="flex items-center gap-3">
            <button
              className={`px-[30px] py-3 rounded border border-blue-600 text-blue-600`}
            >
              Login
            </button>
            <Link href="/pc-builder">
              <button
                className={`px-[30px] py-3 rounded border border-blue-600 bg-blue-600 text-white`}
              >
                Pc Builder
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
