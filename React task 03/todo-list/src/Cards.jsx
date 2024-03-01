import React, { useState } from 'react'

function Cards(props) {
   const {item,index,handleDelete,onUpdateStatus ,getName,handleEdit,handleUpdatename,handleEditClick} = props;

   const controlDelete = (id) =>{
      handleDelete(index)
   }
   const setvalue = (e) =>{
    handleEditClick(index)
     
   }
   const handleStatusChange = (e) => {
    onUpdateStatus(index, e.target.value);
    console.log(index, e.target.value);
  };

  // for checking
  // const id = index
  // ()=>alert(id)}


  return (
    <>
   <div className="card text-bg-dark mb-3" key={index}>
   <div className="card-header"><h3>📃Name : {item.name}</h3></div>
     <div className="card-body">
         <p className="card-text">📌Description: {item.description}</p>
         <h6 className='d-flex '>🚩Status Update:</h6>
         <select value={item.status} onChange={handleStatusChange}>
        
        <option value="completed">completed</option>
        <option value="not-completed">not-completed</option>
      </select><br />
         <button className='mt-5  btn btn-primary out' onClick={setvalue}>Edit</button>
         <button className=' mt-5  btn btn-danger delete'onClick={controlDelete} >Delete</button>
    </div>
</div>
    </>
  )
}

export default Cards