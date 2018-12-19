import firebase from "firebase";
export const saveGem = (favorite, state = []) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  try {
    const firestore = await getFirestore();
    const data = await getState();
    const favorites = await firestore
      .collection("users")
      .doc(data.firebase.auth.uid)
      .update({
        favorites: firebase.firestore.FieldValue.arrayUnion(favorite)
      });
    dispatch({ type: "SAVE_GEM", favorites });
  } catch (error) {
    dispatch({ type: "SAVE_GEM_ERROR", error });
  }
};

export const removeGem = gem => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  try {
    const firestore = await getFirestore();
    const data = await getState();
    const remove = await firestore
      .collection("users")
      .doc(data.firebase.auth.uid)
      .update({
        favorites: firebase.firestore.FieldValue.arrayRemove(gem)
      });
    dispatch({ type: "REMOVE_GEM_SUCCESS", remove });
  } catch (error) {
    dispatch({ type: "REMOVE_GEM_FAIL", error });
  }
};
