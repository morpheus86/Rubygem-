const initialState = {
  gems: []
};
const fetchingGemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_RUBY":
      console.log("ACTIONS", action);
      return {
        ...state,
        gems: action.gems
      };
    case "FETCHING_GEMS_ERROR":
      console.log("fetching error");
      return state;
    default:
      return state;
  }
};

export default fetchingGemReducer;
