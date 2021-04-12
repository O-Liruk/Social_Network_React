import React from "react";

import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://iso.500px.com/wp-content/uploads/2016/11/stock-photo-159533631-1500x1000.jpg" />
      </div>
      <div className = {classes.descriptionBlock}>ava + descriptions</div>
    </div>
  );
};

export default ProfileInfo;
