import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://www.fccnn.com/incoming/6847036-z7hz2q-A-Picture-and-its-Story-Protests-rallies-and-two-impeachments-Trumps-presidency-in-photographs/alternates/BASE_LANDSCAPE/A%20Picture%20and%20its%20Story%3A%20Protests%2C%20rallies%20and%20two%20impeachments%3A%20Trump%27s%20presidency%20in%20photographs' />
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;