const initialState = {
  gems: [],
  favoriteGem: []
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
    case "SAVE_GEM":
      return {
        ...state,
        favoriteGem: action.favorites
      };
    case "SAVE_GEM_ERROR":
      console.log("save gem error");
      return state;
    case "REMOVE_GEM_SUCCESS":
      return {
        ...state,
        favoriteGem: action.remove
      };
    case "REMOVE_GEM_FAIL":
      console.log("Removal failed");
      return state;
    default:
      return state;
  }
};

export default fetchingGemReducer;
