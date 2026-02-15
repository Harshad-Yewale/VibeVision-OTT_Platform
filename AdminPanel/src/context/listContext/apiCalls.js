import axios from "axios";

import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
  updateListFailure,
  updateListStart,
  updateListSuccess
} from "./ListActions";


// helper function to get token safely
const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? "Bearer " + user.accessToken : "";
};


// GET LISTS

export const getLists = async (dispatch) => {

  dispatch(getListsStart());

  try {

    const res = await axios.get("/api/lists", {
      headers: {
        token: getToken(),
      },
    });

    dispatch(getListsSuccess(res.data));

  } catch (err) {

    dispatch(getListsFailure());

    console.log(err);

  }

};



// CREATE LIST

export const createList = async (list, dispatch) => {

  dispatch(createListStart());

  try {

    const res = await axios.post("/api/lists", list, {
      headers: {
        token: getToken(),
      },
    });

    dispatch(createListSuccess(res.data));

  } catch (err) {

    dispatch(createListFailure());

    console.log(err);

  }

};



// DELETE LIST

export const deleteList = async (id, dispatch) => {

  dispatch(deleteListStart());

  try {

    await axios.delete("/api/lists/" + id, {
      headers: {
        token: getToken(),
      },
    });

    dispatch(deleteListSuccess(id));

  } catch (err) {

    dispatch(deleteListFailure());

    console.log(err);

  }

};



// UPDATE LIST

export const updateList = async (id, updatedList, dispatch) => {

  dispatch(updateListStart());

  try {

    const res = await axios.put(
      "/api/lists/" + id,
      updatedList,
      {
        headers: {
          token: getToken(),
        },
      }
    );

    dispatch(updateListSuccess(res.data));

  } catch (err) {

    dispatch(updateListFailure());

    console.log(err);

  }

};
