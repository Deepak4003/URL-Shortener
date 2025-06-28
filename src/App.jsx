// import { Button } from "@/components/ui/button"

import { Children } from 'react'
import './App.css'
const router=createBrowserRouter([
  {
    element:<AppLayout/>
    Children:[]
  }
])

function App() {


  return (
    <div className=" text-2xl ">
      Hello, world!
    </div>
  )
}

export default App
