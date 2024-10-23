import Header from './components/Header'
import Title from './components/Title'
import Login from './pages/Login'
import Signup from './pages/Signup'
import 'bulma/css/bulma.css'
import './App.css'
import * as React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const App = () => {

  const router = createBrowserRouter([
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
    }
  ])

  return (
    <RouterProvider router={router} />
  )

}

export default App
