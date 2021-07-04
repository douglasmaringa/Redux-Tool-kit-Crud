import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import user from '../Slice/UserSlice'
import Todos from "../Slice/Todo"
import TodoList from "../Slice/TodoList"
import TodoUpdate from "../Slice/TodoUpdate"
import TodoDelete from "../Slice/TodoDelete"

const reducer = combineReducers({
  user,
  Todos,
  TodoList,
  TodoUpdate,
  TodoDelete,
})

const store = configureStore({
  reducer,    
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})

export default store;