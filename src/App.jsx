import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Body from "./Components/Body"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Contact from "./Components/Contact"
import Projects from "./Components/Projects"
import About from "./Components/About"


function App() {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
      children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/projects",
        element:<Projects/>
      },
    ]
    },
  ])

      return <RouterProvider router={appRouter} />;


}

export default App
