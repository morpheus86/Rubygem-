import axios from "axios";

export const fetchRuby = (term = null) => async dispatch => {
  try {
    const url = await `http://localhost:8000/api/v1/search.json?query=${
      term.input
    }`;
    const res = await axios.get(url);
    const gems = res.data;
    dispatch({ type: "FETCH_RUBY", gems });
  } catch (error) {
    dispatch({ type: "FETCHING_GEMS_ERROR", error });
  }
};

export const fetchDependencies = term => async dispatch => {
  try {
    const url = await `http://localhost:8000/api/v1/search.json?query=${term}`;
    console.log("term", term);
    console.log(url);
    const res = await axios.get(url);
    const gem = await res.data[0];
    // console.log("GEMS", gems[0]);
    dispatch({ type: "FETCH_RUBY_DEPENDENCY", gem });
  } catch (error) {
    dispatch({ type: "FETCHING_DEPENDENCY_ERROR", error });
  }
};
