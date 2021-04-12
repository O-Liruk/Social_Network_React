import React from "react";
import classes from "../Dialogs.module.css";



const Messag = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

export default Messag;
