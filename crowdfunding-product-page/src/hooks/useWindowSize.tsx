import { useState, useEffect } from "react";


// this function is returning a Size interface
export default function useWindowSize(): Size {
    // set a state to keep track of the current windowsize
    const [windowSize, setWindowSize] = useState<Size>({
        width: 0,
        height: 0,
    });

    // hook to check for the changing value of the browser
    useEffect( () => {
        function handleResize(){
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);

        handleResize();
        
        // clean up the event listener 
        return () => window.removeEventListener("resize", handleResize);
    },[])



    return windowSize;
}

