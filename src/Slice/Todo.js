import { createSlice } from '@reduxjs/toolkit'
import firebase from "../firebase";
// Slice


const slice = createSlice({
  name: 'todos',
  initialState: {
    Todos: "",
  },
  reducers: {
    ItemSuccess: (state, action) => {
      state.Todos = "Posted to Firebase";
    },
  },
});

export default slice.reducer

// Actions
const { ItemSuccess } = slice.actions

export const Item = ({ title, desc }) => async dispatch => {
  try {
    const db = firebase.firestore();
    db.collection("Todos").add({ 
      title: title,
      desc:desc,
      timestamp:firebase.firestore.Timestamp.fromDate(new Date())
    });
    //alert("Added Successfully")
    dispatch(ItemSuccess());
  } catch (e) {
    return console.error(e.message);
  }
}

