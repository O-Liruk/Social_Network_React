import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {

  

  return (
    <div className={classes.item}>
      <img src="https://external-preview.redd.it/nhlyjxZWf4pHkkF4KfXO1aMywxz1tCG6BKSmQYyV7QU.jpg?auto=webp&s=423d4afcf9f028ad8f06d44eee67a8ca7670a5f4" />{" "}
      {props.massage}
      <div>
        <span>Like: </span> {props.likeCounts}
      </div>
    </div>
  );
};

export default Post;
