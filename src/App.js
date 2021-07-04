import React,{useState,useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {login, logout} from './Slice/UserSlice'
import {Item} from "./Slice/Todo"
import {TodoListAction} from "./Slice/TodoList"
import {TodoUpdateAction} from "./Slice/TodoUpdate"
import {TodoDeleteAction} from "./Slice/TodoDelete"

function App() {
  const[title,setTitle]=useState("")
  const[desc,setDesc]=useState("")

  const[title2,setTitle2]=useState("")
  const[desc2,setDesc2]=useState("")

  const dispatch = useDispatch()
 // const { user } = useSelector(state => state.user)
 const { TodoList } = useSelector(state => state.TodoList)

 useEffect(() => {
  dispatch(TodoListAction())
 
}, []);

const submit =()=>{
  //dispatch(login({username:name}))
  dispatch(Item({title:title,desc:desc}))
 
}

const update =(id,timestamp)=>{
  //dispatch(login({username:name}))
  
  dispatch(TodoUpdateAction({title:title2,desc:desc2,id:id,timestamp}))
 
}

const deleted =(id)=>{
  
  dispatch(TodoDeleteAction({id:id}))
 
}
  return (
    <div className="home-container">
      <div className="home-form">
        <input type="text" placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
        <input type="text" placeholder="Description" value={desc} onChange={(e)=>{setDesc(e.target.value)}} />
        <button onClick={submit}>Save</button>
      </div>
      <table id="customers">
       
  <tr>
    <th>Title</th>
    <th>Description</th>
    <th>Title</th>
    <th>Description</th>
    <th>Title</th>
    <th>Description</th>
  </tr>
  {
          TodoList.map(m=>(
            <tr key={m.id}>
            <td>{m.title}</td>
            <td>{m.desc}</td>
            <td><input type="text" placeholder="Title" value={title2} onChange={(e)=>{setTitle2(e.target.value)}} /></td>
            <td><input type="text" placeholder="Description" value={desc2} onChange={(e)=>{setDesc2(e.target.value)}} /></td>
            <td><button onClick={()=>{update(m.id,m.timestamp)}}>Update</button></td>
            <td><button onClick={()=>{deleted(m.id)}}>Delete</button></td>
          </tr>
          ))
        }
 
  </table>
    </div>
  );
}

export default App;