const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      photoUrl:
        "https://www.fightsaga.com/media/reviews/photos/original/1c/0e/07/200px-OleksandrUsyk-41-1551091483.jpg",
      followed: false,
      fullName: "Oleksandr",
      status: "I em a boss",
      location: { city: "Ternopil", country: "Ukraine" },
    },
    {
      id: 2,
      photoUrl:
        "https://www.fightsaga.com/media/reviews/photos/original/1c/0e/07/200px-OleksandrUsyk-41-1551091483.jpg",
      followed: true,
      fullName: "Dima",
      status: "I em a teacher",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: 3,
      photoUrl:
        "https://www.fightsaga.com/media/reviews/photos/original/1c/0e/07/200px-OleksandrUsyk-41-1551091483.jpg",
      followed: false,
      fullName: "Ivan",
      status: "I em a specialist",
      location: { city: "English", country: "London" },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }

    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
