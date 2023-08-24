import { useEffect, useState } from 'react'
import './App.css'
import Cards from './Cards'
import Home from './Home'
import Data from './Data'
function App() {

const [reRender,setReRender] = useState(false);


const [data,setData] =useState([...Data]);
const [statusFilter, setStatusFilter] = useState('all');

const updatedList =  (list) =>{
  setData(list);
  setTaskName('');
  setTaskDescription('')
  setReRender(!reRender );
  // console.log("updated list");
}
const handleUpdateStatus = (index, newStatus) => {
  const updatedTodos = data.map((val, i) =>
    i === index ? { ...val, status: newStatus } : val
  );
  setData(updatedTodos);
};
const filteredTodos = data.filter((val) => {
  if (statusFilter === 'completed') {
    return val.status === 'completed';
  } else if (statusFilter === 'not-completed') {
    return val.status === 'not-completed';
  }
  return true;
});
const handleDelete = (id)=>{
  console.log("delete",id)
 
 const newArray= data.filter((item,i)=> i !== id ) ;
       setData(newArray)
       //        setReRender(!reRender );

// another way to delete
// const newArray = data.splice(id,1)
  // setNameinput(newArray);
}

// perfect  way to tranfer data
const passingdata = () =>{
  return data
}

const [taskName, setTaskName] = useState('');
const [taskDescription, setTaskDescription] = useState('');
const [editingIndex, setEditingIndex] = useState(-1);


const handleEditClick = (index) => {
  setEditingIndex(index);
  setTaskName(data[index].name);
  setTaskDescription(data[index].description)
  // console.log(data[index].description);
};

const handleUpdateTodo = () => {
  if (editingIndex !== -1 && taskName.trim() !== '' && taskDescription.trim() !== '') {
    const updatedTodos = data.map((todo, index) =>
      index === editingIndex ? { ...todo, name: taskName, description: taskDescription } : todo
    );
   
    setData(updatedTodos);
    setTaskName('');
    setTaskDescription('')
    setEditingIndex(-1);
  }
};


useEffect(() =>{
   console.log("data updated");
},[data])


  return (
    <>
  <Home  updatedList={updatedList} passingdata={passingdata} setTaskName ={setTaskName} setTaskDescription ={setTaskDescription}
  editingIndex ={editingIndex} handleUpdateTodo={handleUpdateTodo} taskName={taskName}
  statusFilter ={statusFilter} setStatusFilter ={setStatusFilter} taskDescription ={taskDescription}
  />
    <div className="cards">
      { data && data.length > 0 
      ?
      filteredTodos.map((item,i) =>(
<Cards key = {i} item={item} index= {i} handleDelete={handleDelete} 
 setData={setData} handleEditClick ={handleEditClick}
 updatedList ={updatedList} onUpdateStatus={handleUpdateStatus} 
/>

   )) :"no data available" }
      </div>

    </>
  )
}
export default App
