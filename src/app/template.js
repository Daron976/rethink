"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/rethink_logo.png";
import credit from "../../public/credit.png";
import { GoHomeFill } from "react-icons/go";
import { BiBookContent } from "react-icons/bi";
import { LuSettings } from "react-icons/lu";
import { RxEnter, RxExit } from "react-icons/rx";
import { VscAccount } from "react-icons/vsc";
import { IoIosNotificationsOutline } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { IoMdOptions } from "react-icons/io";
import { AiFillCloseCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Template({ children }) {
  const [user, setUser] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("signIn")) {
      setUser(true);
    }
  }, []);
  return (
    <main className="main">
      <section className="sidebar">
        <nav className="flex desktopNav">
          <div className="sidebarIcons flex">
            <Image
              src={logo}
              max-width={50}
              max-height={50}
              quality={100}
              alt="logo"
            />
            <Link href="/">
              <IconContext.Provider
                value={{
                  size: "1.5rem",
                  className: "nav-icon",
                  color: "rgb(94, 62, 186)",
                }}
              >
                <GoHomeFill />
              </IconContext.Provider>
            </Link>
            <Link href="/pending">
              <IconContext.Provider
                value={{
                  size: "1.5rem",
                  className: "nav-icon",
                  color: "rgb(77, 73, 89)",
                }}
              >
                <BiBookContent />
              </IconContext.Provider>
            </Link>
          </div>
          <div className="sidebarIcons flex">
            <Link href="/pending">
              <IconContext.Provider
                value={{
                  size: "1.5rem",
                  className: "nav-icon",
                  color: "rgb(77, 73, 89)",
                }}
              >
                <LuSettings />
              </IconContext.Provider>
            </Link>
            <Link
              href="/authentication/login"
              className="loginBtn"
              style={{
                display: user ? "none" : "inherit",
              }}
            >
              <IconContext.Provider
                value={{
                  size: "1.5rem",
                  className: "nav-icon",
                  color: "rgb(77, 73, 89)",
                }}
              >
                <RxEnter />
              </IconContext.Provider>
            </Link>
            <button
              type="button"
              name="logout"
              className="logoutBtn"
              onClick={() => {
                localStorage.removeItem("signIn");
                localStorage.removeItem("userName");
                alert("You have succesfully signed out");
                window.location.reload();
              }}
              style={{
                display: user ? "inherit" : "none",
              }}
            >
              <IconContext.Provider
                value={{
                  size: "1.5rem",
                  className: "nav-icon",
                  color: "rgb(77, 73, 89)",
                }}
              >
                <RxExit />
              </IconContext.Provider>
            </button>
          </div>
        </nav>
        <nav className="flex mobileNav">
          <div className="sidebarIcons flex">
            <div className="flex mobileLogo">
              <Image
                src={logo}
                max-width={50}
                max-height={50}
                quality={100}
                alt="logo"
              />
              <span className="mobileItem">Rethink</span>
              <button
                type="button"
                name="logout"
                className="logoutBtn"
                onClick={(e) => {
                  document
                    .querySelector(".mobileNav")
                    .classList.remove("menuOpen");
                  document
                    .querySelector(".mobileNav")
                    .classList.add("menuClose");
                  setTimeout(() => {
                    document.querySelector(".mobileNav").style.display = "none";
                  }, 300);
                }}
              >
                <IconContext.Provider
                  value={{
                    size: "1.5rem",
                    className: "nav-icon",
                    color: "rgb(77, 73, 89)",
                  }}
                >
                  <FaRegWindowClose />
                </IconContext.Provider>
              </button>
            </div>
            <Link href="/">
              <IconContext.Provider
                value={{
                  size: "1.5rem",
                  className: "nav-icon",
                  color: "rgb(94,62,186)",
                }}
              >
                <GoHomeFill />
              </IconContext.Provider>
            </Link>
            <Link href="/pending">
              <IconContext.Provider
                value={{
                  size: "1.5rem",
                  className: "nav-icon",
                  color: "rgb(77, 73, 89)",
                }}
              >
                <BiBookContent />
              </IconContext.Provider>
            </Link>
          </div>
          <div className="sidebarIcons flex">
            <Link href="/pending">
              <IconContext.Provider
                value={{
                  size: "1.5rem",
                  className: "nav-icon",
                  color: "rgb(77, 73, 89)",
                }}
              >
                <LuSettings />
              </IconContext.Provider>
            </Link>
            <Link
              href="/authentication/login"
              className="loginBtn"
              style={{
                display: user ? "none" : "inherit",
              }}
            >
              <IconContext.Provider
                value={{
                  size: "1.5rem",
                  className: "nav-icon",
                  color: "rgb(77, 73, 89)",
                }}
              >
                <RxEnter />
              </IconContext.Provider>
            </Link>
            <button
              type="button"
              name="logout"
              className="logoutBtn"
              onClick={() => {
                localStorage.removeItem("signIn");
                localStorage.removeItem("userName");
                alert("You have succesfully signed out");
                window.location.reload();
              }}
              style={{
                display: user ? "inherit" : "none",
              }}
            >
              <IconContext.Provider
                value={{
                  size: "1.5rem",
                  className: "nav-icon",
                  color: "rgb(77, 73, 89)",
                }}
              >
                <RxExit />
              </IconContext.Provider>
            </button>
          </div>
        </nav>
      </section>
      <section className="pageContent">
        <header className="pageHeader flex">
          <nav className="flex">
            <form action="" name="searchForm" id="searchForm" className="flex">
              <IconContext.Provider
                value={{
                  size: "1.5rem",
                  className: "nav-icon",
                  color: "rgb(70,61,97)",
                }}
              >
                <PiMagnifyingGlassLight />
              </IconContext.Provider>
              <input
                type="search"
                name="filter"
                className="searchBar"
                placeholder="Search for templates, project, etc"
              />
              <div className="formClose flex">
                <IconContext.Provider
                  value={{
                    size: "1.5rem",
                    className: "nav-icon",
                    color: "rgb(77,77,77,0.2)",
                  }}
                >
                  <IoMdOptions />
                </IconContext.Provider>
                <IconContext.Provider
                  value={{
                    size: "1rem",
                    className: "nav-icon",
                    color: "rgb(235,234,239,1)",
                  }}
                >
                  <AiFillCloseCircle />
                </IconContext.Provider>
              </div>
            </form>
            <div className="createBtnCredit flex">
              <button
                type="button"
                name="contentCreation"
                className="contentBtn btn"
              >
                Create Content
              </button>
              <div className="credit flex">
                <Image
                  src={credit}
                  width={24}
                  height={24}
                  quality={100}
                  alt="credit"
                />
                <p>20</p>
              </div>
            </div>
          </nav>
          <div className="personalDetails flex">
            <Link href="/pending">
              <IconContext.Provider
                value={{
                  size: "1.5rem",
                  className: "nav-icon",
                  color: "rgb(77, 73, 89)",
                }}
              >
                <SlCalender />
              </IconContext.Provider>
            </Link>
            <Link href="/pending">
              <IconContext.Provider
                value={{
                  size: "1.5rem",
                  className: "nav-icon",
                  color: "rgb(77, 73, 89)",
                }}
              >
                <IoIosNotificationsOutline />
              </IconContext.Provider>
            </Link>
            <Link
              href={"authentication/login"}
              style={{
                display: user ? "none" : "inherit",
              }}
            >
              Login
            </Link>
            <Link
              href={"/pending"}
              style={{
                display: user ? "inherit" : "none",
              }}
            >
              <IconContext.Provider
                value={{
                  size: "1.5rem",
                  className: "nav-icon",
                  color: "rgb(77, 73, 89)",
                }}
              >
                <VscAccount />
              </IconContext.Provider>
            </Link>
          </div>
        </header>
        {children}
      </section>
    </main>
  );
}
