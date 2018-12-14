const createProject = project => {
  return (dispatch, getState) => {
    //async call to be made here
    dispatch({ type: "CREATE_PROJECT", project });
  };
};

export default createProject;

//getState: to get the state of the store if we need to
