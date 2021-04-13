import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = (props) => {
  let postsElement = props.posts.map((p) => (
    <Post massage={p.message} likeCounts={p.likeCounts} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
 
    props.dispatch({type:'ADD-POST'})
    
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
    const action = { type: 'UPDATE_NEW_POST_TEXT', newText: text };
    props.dispatch(action)
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
