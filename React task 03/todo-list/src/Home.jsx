import React from 'react'
import Data from './Data';

function Home(props) {
const {updatedList,passingdata,statusFilter, setStatusFilter,editingIndex ,handleUpdateTodo,setTaskName,taskName,taskDescription,setTaskDescription} =props

function handleAddTodo(event) {
  event.preventDefault();

  const todo_name = document.getElementById("todo-name");


  const todo_description = document.getElementById("todo-description");


  const name =  todo_name.value.trim();
  // console.log(name);
  const description =  todo_description.value.trim();
  
 if (name == ""|| description  == "") {
   return;
  
 }

let newData = passingdata();


newData.push({name:name ,description:description,status:"completed"})
console.log("hiiii",newData);

updatedList([...newData])

// clear  
todo_description.value ="";
todo_name.value ="";


}
const updatebtn =()=>{
  handleUpdateTodo()
}

console.log(taskDescription);

  return (
    <div className="container my-4 py-4 border" >
        <h1 className='text-center'>My Todo</h1>
        <div className="m-0">
        <form className="my-3 d-flex justify-content-between" onSubmit={handleAddTodo}>
        <div className="m-3">
                <input value={taskName} onChange={(e) => setTaskName(e.target.value)}   type="text" className="w-100"id='todo-name'name='todo-name' placeholder='name' size={70}/>
            </div>
            <div className="m-3">
                <input value={taskDescription}  onChange={(e) => setTaskDescription(e.target.value)} type="text" className="w-100" id='todo-description'name='todo-description' placeholder='description' size={70}/>
            </div>
            <div id='addtodo' className="m-3">
            {editingIndex === -1 ? (
                <button onClick={handleAddTodo} type=' button' name='todo-button' className="btn btn-primary">AddTodo</button>
                ) : (
                  <button onClick={updatebtn} type=' button' name='todo-button' className="btn btn-primary">UpDate</button>
                  )}
            </div>
        </form>
        </div>
        
        <div className="d-flex justify-content-between">
          <h5>My todo list:</h5>
          <div className="d-flex">
            <h5> Status filter: </h5>
                <select
          id="statusFilter"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">completed</option>
          <option value="not-completed">not-completed</option>
                  </select>
                </div>
          </div>
        </div>
    
  )
}

export default Home