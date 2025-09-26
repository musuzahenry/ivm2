import  React from 'react'
import { useEffect } from "react";
import { parsePath, useLocation } from 'react-router-dom';



const PageScroll= () => {

  const { pathname } = useLocation();

  useEffect(()=>{
     window.scrollTo(0,0);
  }, [pathname]);

 
  return null
}

export default PageScroll