import React from "react";
import classes from "../profile.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img
          className={`${classes.profile} ${classes.mainPhoto}`}
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
        ></img>
      </div>
      <div>
        <img
          className={`${classes.profile} ${classes.avatar}`}
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
          alt="Avatar"
        ></img>
      </div>
    </div>
  );
};

export default ProfileInfo;
