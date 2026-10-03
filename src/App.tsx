import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Technologies from "./components/technologies/Technologies"
import Footer from "./components/Footer";
import  { Suspense } from "react";
import type { ITechType } from "./types/types";


const technologiesFetch = async ():Promise<ITechType[]> =>{
  const res = await fetch("/stackData.json");
  const data = res.json();
  return data;
}


function App() {
  const technologiesPromise = technologiesFetch()
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Suspense fallback={"Loading...."}>
      <Technologies technologiesPromise = {technologiesPromise}></Technologies>
    </Suspense>
    <Footer></Footer> 
    
    </>
  )
}

export default App
