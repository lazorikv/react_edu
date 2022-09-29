import React from "react";
import classes from "./dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={classes.dialog}>
      <NavLink to={`/messages/${props.id}`}>{props.username}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem username="User1" id="1" />
        <DialogItem username="User2" id="2" />
        <DialogItem username="User3" id="3" />
      </div>
      <div className={classes.messages}>
        <Message message="HI" />
        <Message message="LOL" />
        <Message message="LMAO" />
      </div>
    </div>
  );
};

export default Dialogs;
