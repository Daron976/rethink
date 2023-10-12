"use client";
import { Merienda } from "next/font/google";
import Socials from "./components/Socials";
import { PiGridFourFill, PiMagnifyingGlassLight } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import { IconContext } from "react-icons";

const meri = Merienda({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header className="welcomeBanner flex">
        <div className="welcomeStart flex">
          <h1 className={meri.className}>
            <strong>Hey There!</strong>
          </h1>
          <p>Lets create something awesome today</p>
          <button type="button" name="create" className="createBtn btn">
            Start Creating
          </button>
        </div>
        <div className="welcomeEnd flex">
          <button
            type="button"
            name="logout"
            className="logoutBtn"
            onClick={(e) => {
              document
                .querySelector(".mobileNav")
                .classList.remove("menuClose");
              document.querySelector(".mobileNav").classList.add("menuOpen");
              document.querySelector(".mobileNav").style.display = "flex";
              setTimeout(() => {}, 500);
            }}
          >
            <IconContext.Provider
              value={{
                size: "3rem",
                className: "mobileItem navIcon",
                color: "rgb(70,61,97,1)",
              }}
            >
              <PiGridFourFill />
            </IconContext.Provider>
          </button>
          <select name="zaraVentures" id="zaraSelect" autoComplete="off">
            <option>Zara Ventures</option>
            <option>Rethink</option>
            <option>Start</option>
            <option>Create</option>
          </select>
          <IconContext.Provider
            value={{
              size: "3rem",
              className: "mobileItem navIcon",
              color: "rgb(77, 73, 89)",
            }}
          >
            <VscAccount />
          </IconContext.Provider>
          <p>
            You should have more engagement by 6pm today, try posting then.
            <br />
            Try out SEO optimization tool to increase engagement by 40%
          </p>
        </div>
      </header>
      <form
        action=""
        name="searchForm"
        id="mobileSearchForm"
        className="flex mobileItem"
      >
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
      </form>
      <section className="mainContent">
        <div>
          <h1>Most Popular Tools</h1>
          <p>Explore the trending tools to create your copies fast</p>
        </div>
        <div className="mainContentWrapper">
          <Socials />
          <Socials />
        </div>
      </section>
    </>
  );
}
