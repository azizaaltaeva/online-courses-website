import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactPage from '../pages/ContactPage'
import CoursePage from '../pages/CoursePage'
import HomePage from '../pages/HomePage'
import PricePage from '../pages/PricePage'
import ReviewsPage from '../pages/ReviewsPage'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/course' element={<CoursePage />} />
        <Route path='/price' element={<PricePage />} />
        <Route path='/reviews' element={<ReviewsPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes