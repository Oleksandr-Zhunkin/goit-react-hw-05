import clsx from "clsx";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import s from "../Navigation/Navigation.module.scss";
import { useEffect, useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

export const Navigation = () => {
  const [activeSearch, setActiveSearch] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/movies") {
      setActiveSearch(true);
    } else {
      setActiveSearch(false);
    }
  }, [location]);

  return (
    <>
      <header className=" flex justify-between bg-blue-950 p-5 rounded-xl">
        <nav className=" inline-flex gap-7 text-2xl ml-8">
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
        </nav>
        {activeSearch && <SearchBar />}
      </header>
      <Outlet />
    </>
  );
};
