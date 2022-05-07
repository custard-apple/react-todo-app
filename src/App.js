import { useState, useEffect } from 'react';
import './App.css';
import Footer from './MyComponents/Footer';
import Header from "./MyComponents/Header";
import Todos from './MyComponents/Todos';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("don't delete me :(", todo);
    setTodos(todos.filter((e)=>e!==todo));
    //localStorage.setItem("todos", JSON.stringify(todos));
  }

  

  const addTodo = (title, desc) => {
    console.log("adding", title)
    let sno;
    if(todos.length === 0 ) {
      sno =1;
    } else {
      sno = todos[todos.length-1].sno+1;
    }
    const myTodo = {
      sno: sno,
      title:title,
      desc:desc
    }
    console.log(myTodo)
    setTodos([...todos, myTodo]);

    //if(localStorage.getItem("todos")){
    
    //}
  }

const [todos, setTodos] = useState(initTodo);

useEffect(()=>{
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos])

  return (
  <>
  <Router>
    <Header title="My List" searchBar={true}/>
    <Routes>
      <Route exact path='/' element={
          <>
          <AddTodo addTodo={addTodo}/>
          <Todos todos={todos} onDelete={onDelete}></Todos>
          </>
        }>
        
      </Route>
      <Route eact path='/about' element={<About></About>}>
        
      </Route>
   
    </Routes>
    <Footer/>
  </Router>
  </>
  );
}

export default App;
