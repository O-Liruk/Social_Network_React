import React from "react"
import preloader from "../../../assets/image/1495.gif";

let Preloader = (props) => {
  return (
    <div style={{ backgroundColor: "white" }}>
      {" "}
      <img src={preloader} />
    </div>
  );
};

export default Preloader;
