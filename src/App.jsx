import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Components/Home/HomePage'
import ContextHome from './topics/Context-reverse/components-contenx/Home-context-page/Context-home'
import ContextProvider from './topics/Context-reverse/context/contextData'
import BudgetApp from './topics/Context-reverse/components-contenx/budgetComponents/BudgetApp'
import HomePageHoc from './topics/HOC/HocHome/HomePageHoc'
import StatesHomePage from './topics/StatesOfReact/StatesHomePage'
import Echo from './topics/Echo/Echo'
import MainForCustomHook from './topics/CustomHook/MainForCustomHook'
const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/budget' element={<BudgetApp />} />
          <Route path='/context' element={<ContextHome />} />
          <Route path='/hoc' element={<HomePageHoc />} />
          <Route path='/states' element={<StatesHomePage />} />
          <Route path='/echo' element={<Echo />} />
          <Route path='/custom' element={<MainForCustomHook />} />
          <Route path='*' element={
            <h2 className='font-bold text-3xl text-bg-danger p-4 text-center text-white mt-50'>
              Error 404 Not Found
            </h2>
          } />
        </Routes>
      </Router>
    </ContextProvider>
  )
}

export default App