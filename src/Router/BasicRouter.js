import { Route,createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import RootLayout from "./Layouts/RootLayout";

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route  index element={<Home/>}></Route>
      <Route  path="about" element={<About/>}></Route>
    </Route>
  )
)

function BasicRouter() {
  return (
   
    <RouterProvider router={router}/>
  
     
  );
}

export default BasicRouter;
