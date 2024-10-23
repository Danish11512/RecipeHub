import Header from './components/Header'
import Title from './components/Title'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import 'bulma/css/bulma.css'
import './App.css'
import * as React from "react"
import { createHashRouter, RouterProvider } from "react-router-dom"

const App = () => {

  const router = createHashRouter([
    {
      path: "/",
      element: (
        <div className='app'>
          <Header />
          <Title />
        </div>
      ),
    },
    {
      path: "login",
      element: (
        <div className='app'>
          <Header />
          <Login />
        </div>
      )
    },
    {
      path: "signup",
      element: (
        <div className='app'>
          <Header />
          <Signup />
        </div>

      )
    },
    {
      path: "home",
      element: (
        <div className='app'>
          <Header />
          <Home />
        </div>

      )
    }
  ])

  return (
    <RouterProvider router={router} />
  )

}

export default App
