import React from 'react'
import Home from './pages/Home'
import Cart from "./components/Cart"
import Header from './components/Header'
import Footer from './components/Footer'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
  
const App = () => {

  const Layout = () => {
    return (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
        path: "/",
        element: <Home /> 
      },
      {
        path:"/cart",
        element: <Cart />
      }
    ]
    }])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App