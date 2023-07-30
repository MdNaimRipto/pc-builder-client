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
          href={"/"}
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
          href={"/"}
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
          href={"/"}
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
          href={"/"}
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
          href={"/"}
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
          href={"/"}
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
          href={"/"}
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
            <img src={require("../assets/logo.png")} alt="logo" />
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
              <img src={require("../assets/logo.png")} alt="logo" />
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
          className={`absolute w-full h-[500px] lg:h-full lg:w-[56%] px-3 bg-white lg:static top-24 duration-300 ${
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
                href={"/about"}
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
                href={"/contact"}
                className="main-link"
                onClick={() => {
                  setClick(false);
                }}
              >
                <span>Contact Us</span>
              </Link>
            </li>
            <li className="main-list">
              <Link
                href={"/contact"}
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
                href="/login"
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
                href="/login"
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
              className={`  flex gap-1.5 items-center px-[30px] py-3 rounded text-main transition-all duration-200 font-bold border border-blue-600 text-blue-600`}
            >
              Login
            </button>
            <button
              className={`  flex gap-1.5 items-center px-[30px] py-3 rounded text-main transition-all duration-200 font-bold border border-blue-600 bg-blue-600 text-white`}
            >
              Pc Builder
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
