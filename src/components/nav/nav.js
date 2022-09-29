import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./nav.module.css";

const Navigation = () => {
  let status = ({ isActive }) =>
    isActive ? { color: "red" } : { color: "blue" };

  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" style={status}>
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/messages" style={status}>
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" style={status}>
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music" style={status}>
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" style={status}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
