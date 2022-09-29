import React from "react";
import classes from "./mypost.module.css";
import Post from "./post/post";

const MyPost = () => {
  return (
    <div className={classes.sendPost}>
      <div>
        <div>My post</div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Send</button>
        </div>
      </div>
      <Post message="Hi, its me" />
      <Post message="Hello guys!" />
    </div>
  );
};

export default MyPost;
