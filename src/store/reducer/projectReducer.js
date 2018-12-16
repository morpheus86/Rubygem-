//this dummy data will be stored on the state of the projectReducer in the store (project property).
const initialState = {
  projects: [
    { id: "1", title: "Help me grow", content: "voila" },
    { id: "2", title: "Help me fly", content: "almost there" },
    { id: "3", title: "keep pushing", content: "salt and peppa" }
  ]
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("project success");
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("project error");
      return state;
    default:
      return state;
  }
};

export default projectReducer;
