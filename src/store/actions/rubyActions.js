import axios from "axios";

export const fetchRuby = (term = null) => async dispatch => {
  try {
    const url = await `http://localhost:8000/api/v1/search.json?query=${
      term.input
    }`;
    const res = await axios.get(url);
    const gems = res.data;
    console.log("GEMS", gems);
    dispatch({ type: "FETCH_RUBY", gems });
  } catch (error) {
    dispatch({ type: "FETCHING_GEMS_ERROR", error });
  }
};
