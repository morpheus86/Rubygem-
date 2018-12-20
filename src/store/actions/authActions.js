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
    dispatch({ type: "RESET" });
  } catch (error) {
    console.log(error);
  }
};

export const signUp = newUser => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  try {
    const firebase = await getFirebase();
    const firestore = await getFirestore();
    const data = await firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password);
    await firestore
      .collection("users")
      .doc(data.user.uid)
      .set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
      });
    dispatch({ type: "SIGNUP_SUCCESS" });
  } catch (error) {
    dispatch({ type: "SIGNUP_ERROR", error });
  }
};
