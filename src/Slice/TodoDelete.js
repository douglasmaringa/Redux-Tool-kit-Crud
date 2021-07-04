import { createSlice } from '@reduxjs/toolkit'
import firebase from "../firebase";
// Slice


const slice = createSlice({
  name: 'TodoDelete',
  initialState: {
    TodoDelete: "",
  },
  reducers: {
    UpdateSuccess: (state, action) => {
      state.TodoDelete = "Todo Updated to Firebase";
    },
  },
});

export default slice.reducer

// Actions
const { DeleteSuccess } = slice.actions

export const TodoDeleteAction = ({ id }) => async dispatch => {
  try {
    const db = firebase.firestore()
    
    db.collection('Todos').doc(id).delete()
    //alert("Added Successfully")
    dispatch(DeleteSuccess());
  } catch (e) {
    return console.error(e.message);
  }
}

