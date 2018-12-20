const initialState = {
  gems: [],
  favoriteGem: [],
  ruby: []
};
const fetchingGemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_RUBY":
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
    case "FETCH_RUBY_DEPENDENCY":
      return {
        ...state,
        ruby: action.gem
      };
    case "FETCHING_DEPENDENCY_ERROR":
      console.log("Dependency could not be fetched");
      return state;
    default:
      return state;
  }
};

export default fetchingGemReducer;
