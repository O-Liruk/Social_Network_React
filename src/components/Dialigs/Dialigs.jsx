import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialigItem";
import classes from "./Dialogs.module.css";
import Messag from "./Message/Message";

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messages.map((m) => <Messag message={m.message} />);
  let newMessageElement = React.createRef();
  let addMessage = () => {
    let text = newMessageElement.current.value
    {alert(text)}
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_item}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
      <textarea ref={newMessageElement} name="" id="" cols="10" rows="1"></textarea>
      <div><button onClick={addMessage}>New massage</button></div>
      
    </div>
  );
};

export default Dialogs;
