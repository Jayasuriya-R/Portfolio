import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import About from "./Components/About";
import ProjectDetails from "./Components/ProjectDetails";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/home",
      element: <Body />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/projectdetails/:projId",
          element: <ProjectDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
