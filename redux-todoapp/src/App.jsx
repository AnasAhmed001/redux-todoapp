import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from './config/redux/reducers/todoSlice'

const App = () => {

  const todoVal = useRef()

  // dispatch
  const dispatch = useDispatch()

  //selector
  const selector = useSelector(state => state.todos.todo);
  console.log(selector);


  const addTodoInRedux = (event) => {
    event.preventDefault()
    console.log("todo added", todoVal.current.value)
    dispatch(addTodo({
      title: todoVal.current.value
    }))
  }


  const deleteItemFromRedux = (index)=>{
    console.log("delete item" , index);
    dispatch(removeTodo({
      index
    }))

  }


  return (
    <>
     <h1 style={{
      display : "flex",
      justifyContent: "center",
     }}>Todo App</h1>
     <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
     }}>
      <form>
        <input type="text" ref={todoVal} />
        <button onClick={addTodoInRedux}>add Todo</button>
      </form>
      </div>
      <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "30px",
     }}>
        <ul>
          {selector.length > 0 ? selector.map((item , index) => {
            return <li key={item.id}>{item.title}
            <button onClick={()=> deleteItemFromRedux(index)}> delete</button></li>
          }) : <h1>No data found</h1>}
        </ul>
      </div>  
        
    </>
  )
};

export default App