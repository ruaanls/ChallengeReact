



import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PaginaInicial from "./components/PaginaInicial/PaginaInicial";

import { Outlet } from "react-router-dom";

export default function App()
{
  return(
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}