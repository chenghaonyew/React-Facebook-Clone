// initial state of the reducer, how the data layer initially looks like
export const initialState = {
  user: null,
};

// action
export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log(action);
  // dispatch action into data layer
  switch (action.type) {
    // if receive an action of SET_USER, then we return whatever it currently looks like & change the user to whatever we passed in as an user payload
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    // if we didn't receive any matched action, we return the state
    default:
      return state;
  }
};

export default reducer;
