const INITIAL_STATE = {
  users: [],
  current_user: [],
};
export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        current_user: action.payload,
      };
    case "GET_USER":
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
