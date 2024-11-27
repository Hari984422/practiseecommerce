import React from 'react'
import AdminNavbar from './AdminNavbar'
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom'
import AdminDashBoard from './AdminDashBoard'
import AdminViewItems from './AdminViewItems'
import AdminAddProducts from './AdminAddProducts'
import UpdateProducts from './UpdateProducts'

export default function AdminHomePage() {
  return (
    <div className='AdminHomePage'>
        <AdminNavbar/>
        <Routes>
          <Route path='/' element={<AdminDashBoard/>}/>
          <Route path='/viewproducts' element={<AdminViewItems/>}/>
          <Route path='/addproducts' element={<AdminAddProducts/>}/>
          <Route path='/updateproducts/:id' element={<UpdateProducts/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}
