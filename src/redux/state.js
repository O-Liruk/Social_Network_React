let store = {
    _state: {
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
  },

  getState(){
    return this._state
  },

   _callSubscriber() {
    console.log("state chenged");
  },

  addPost() {

    let newPost = {
      id:5,
      message: this._state.profilePage.newPostText,
      likeCounts: 0,
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText='';
    this._callSubscriber(this._state)
  },

  updateNewPostText(newText) {

    this._state.profilePage.newPostText = newText
    this._callSubscriber(this._state)
  },

  subscribe (observer) { 
    this._callSubscriber = observer;
  }

}

export default store;
window.store = store
