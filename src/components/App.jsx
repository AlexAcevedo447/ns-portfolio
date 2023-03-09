import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Home } from './routes/Home' 

const routes = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<>Supongo que te encuentras en una pagina que no existe</>
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
      <RouterProvider router={routes}/>
  )
}

export default App
