import { createSlice } from '@reduxjs/toolkit'
import firebase from "../firebase";
// Slice


const slice = createSlice({
  name: 'todolist',
  initialState: {
    TodoList: [],
  },
  reducers: {
    ListSuccess: (state, action) => {
      state.TodoList = action.payload;
    },
  },
});

export default slice.reducer

// Actions
const { ListSuccess } = slice.actions

export const TodoListAction = () => async dispatch => {
  try {
    const db = firebase.firestore();
      const data = await db.collection("Todos").orderBy('timestamp','desc').onSnapshot(snapshot=>{
        dispatch(ListSuccess(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))))
      })
    
    //dispatch(ListSuccess(data));
  } catch (e) {
    return console.error(e.message);
  }
}

