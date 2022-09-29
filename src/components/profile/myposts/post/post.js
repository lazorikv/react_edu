import React from "react";
import classes from "./post.module.css";

const Post = (props) => {
  let message = props.message;
  return (
    <div className={classes.item}>
      <img
        src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
        alt="some"
      ></img>
      {message}
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
