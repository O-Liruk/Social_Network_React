import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";


const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <div className={`${classes.item}`}>
        <NavLink to ="/profile" activeClassName={classes.activeLinK}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="dialogs" activeClassName={classes.activeLinK}>Massages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="news" activeClassName={classes.activeLinK}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="music" activeClassName={classes.activeLinK}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="setings" activeClassName={classes.activeLinK}>Setings</NavLink>
      </div>
      {/* <div className={classes.item+ ' ' +classes.item_friends}>
        <NavLink to="setings" activeClassName={classes.activeLinK}>Friends</NavLink>
        <div className= {classes.friend}>1</div>
        <div className= {classes.friend}>2</div>
        <div className= {classes.friend}>3</div> */}
      {/* </div> */}
    </nav>
  );
};

export default NavBar;
