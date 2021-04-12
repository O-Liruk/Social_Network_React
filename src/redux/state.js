let rerenderEntireTree = ()=>{
  console.log("state chenged");
}
let state = {
  profilePage: {
    posts: [
      {
        id: 1,
        message: "Hi, how are you?",
        likeCounts: 12,
      },
      {
        id: 2,
        message: "Its my first post",
        likeCounts: 45,
      },
    ],
    newPostText: 'it-easy'
  },
  dialogPage: {
    dialogs: [
      {
        id: 1,
        name: "Sasha",
      },
      {
        id: 2,
        name: "Oleg",
      },
      {
        id: 3,
        name: "Ivan",
      },
      {
        id: 4,
        name: "Anna",
      },
      {
        id: 5,
        name: "Viktor",
      },
    ],
    messages: [
      {
        id: 1,
        message: "Hi",
      },
      {
        id: 2,
        message: "How is your progect",
      },
      {
        id: 3,
        message: "Yo",
      },
      {
        id: 4,
        message: "yooo",
      },
      {
        id: 5,
        message: "Howe are you",
      },
    ],
  },
  sidebar:{
  }
};

export const addPost = () =>{

  let newPost = {
    id:5,
    message: state.profilePage.newPostText,
    likeCounts: 0,
  }
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText='';
  rerenderEntireTree(state)
}

export const updateNewPostText = (newText) =>{

  state.profilePage.newPostText = newText
  rerenderEntireTree(state)
}
export const subscribe = (observer) =>{ 
  rerenderEntireTree = observer;
}

export default state;
