export const saveGem = favorite => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  try {
    const firestore = await getFirestore();
    // const newFavorite = await getState().ruby.gems;
    const data = await getState();
    // const singleFavorite = newFavorite.filter((el, idx) => {
    //   if (favorite.name !== el.name) {
    //     return el[idx];
    //   }
    // });
    const favorites = await firestore
      .collection("users")
      .doc(data.firebase.auth.uid)
      .collection("favorites")
      .add({
        favoriteGem: favorite
      });
    dispatch({ type: "SAVE_GEM", favorites });
  } catch (error) {
    dispatch({ type: "SAVE_GEM_ERROR", error });
  }
};
