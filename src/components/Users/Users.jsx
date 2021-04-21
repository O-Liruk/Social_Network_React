import * as axios from "axios";
import React from "react";
import s from "./users.module.css";
import userPhoto from "../../assets/image/icon-5359553_1280.png";

let Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://60809440a5be5d00176ddd61.mockapi.io/api/1/users")
      .then((response) => {
        props.setUsers(response.data);
      });
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                src={u.photoUrl != null ? u.photoUrl : userPhoto}
                className={s.userPhoto}
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
