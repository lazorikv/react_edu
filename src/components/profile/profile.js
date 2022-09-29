import React from "react";
import MyPost from "./myposts/mypost.js";
import ProfileInfo from "./profileinfo/profileinfo.jsx";

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPost />
    </div>
  );
};

export default Profile;
