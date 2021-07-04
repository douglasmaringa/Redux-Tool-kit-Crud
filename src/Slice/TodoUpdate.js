import { createSlice } from '@reduxjs/toolkit'
import firebase from "../firebase";
// Slice


const slice = createSlice({
  name: 'TodoUpdate',
  initialState: {
    TodoUpdate: "",
  },
  reducers: {
    UpdateSuccess: (state, action) => {
      state.TodoUpdate = "Todo Updated to Firebase";
    },
  },
});

export default slice.reducer

// Actions
const { UpdateSuccess } = slice.actions

export const TodoUpdateAction = ({ title, desc,id,timestamp }) => async dispatch => {
  try {
    const db = firebase.firestore()
    db.collection('Todos').doc(id).update({
     title:title,
     desc:desc,
     timestamp:timestamp
    })
    dispatch(UpdateSuccess());
  } catch (e) {
    return console.error(e.message);
  }
}

