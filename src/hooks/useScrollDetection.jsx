import { useEffect, useRef, useState } from "react";

const useScrollDetection=()=>{
    // eslint-disable-next-line
     const [scrollDirection,setScrollDirection]=useState("");
     const prevScrollY=useRef();

    useEffect(()=>{
     window.addEventListener("scroll",handleScroll);

     return () => {
        window.removeEventListener("scroll",handleScroll);
     };
    },[]);


    const handleScroll=()=>{
       prevScrollY.current > window.scrollY 
       ? setScrollDirection("UP")
       : setScrollDirection("DOWN");


       prevScrollY.current=window.scrollY;
    
    }

    return scrollDirection;

}

export default useScrollDetection;