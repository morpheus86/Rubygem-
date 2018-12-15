export const signIn = credentials => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  try {
    const firebase = await getFirebase();
    await firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password);
    dispatch({ type: "LOGIN_SUCCESS" });
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error });
  }
};

export const signOut = () => async (dispatch, getState, { getFirebase }) => {
  try {
    const firebase = await getFirebase();
    await firebase.auth().signOut();
    dispatch({ type: "SIGNOUT_SUCCESS" });
  } catch (error) {
    console.log(error);
  }
};
