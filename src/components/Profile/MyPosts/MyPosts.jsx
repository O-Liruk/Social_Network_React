import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requaired } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControl";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo(props => {
 
  let postsElements = [...props.posts].map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedax onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

function AddNewPostForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" placeholder={"Past message"} component={Textarea} validate ={[requaired, maxLength10]}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
}

let AddNewPostFormRedax = reduxForm({ form: "ProfileAddNewpostForm" })(AddNewPostForm);

export default MyPosts;
