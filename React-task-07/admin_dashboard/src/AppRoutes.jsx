import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from './Menu/Dashboard'
import ManageBooks from './Menu/ManageBooks'
import ManageAuthors from './Menu/ManageAuthors'
import AddBookSAuthor from './Menu/AddBookSAuthor'
import Editbooks from './LibrayManagement/Editbooks'
import EditAuthor from './LibrayManagement/EditAuthor'

function AppRoutes() {
  return (
    
        <Routes>
            <Route path='/' element ={<Dashboard/>}></Route>
            <Route path='/manageBooks' element ={<ManageBooks/>}></Route>
            <Route path='/manageAuthors' element ={<ManageAuthors/>}></Route>
            <Route path='/addBooksAuthor' element ={<AddBookSAuthor/>}></Route>
            <Route path='/edit/:id' element ={<Editbooks/>}></Route>
            <Route path='/editAuthor/:id' element ={<EditAuthor/>}></Route>
        </Routes>
   
  )
}

export default AppRoutes