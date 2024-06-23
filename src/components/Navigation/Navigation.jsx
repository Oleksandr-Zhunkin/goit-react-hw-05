import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "../Navigation/Navigation.module.scss";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

export const Navigation = () => {
  return (
    <header className=" bg-blue-950 p-5 mb-5 rounded-xl">
      <nav className=" inline-flex gap-7 text-2xl ml-8">
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
