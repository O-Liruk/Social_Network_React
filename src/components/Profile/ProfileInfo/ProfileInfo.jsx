import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks.jsx";

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      {/* <div>
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" />
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large} />
       <ProfileStatusWithHooks status={status} updateStatus = {updateStatus}/>
        <div>{profile.fullName}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
