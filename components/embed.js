import React, { useEffect, useState } from "react"

export default function Embed({url, height}){
    const [width, setWidth] = useState(1000);
    const [stateHeight, setStateHeight] = useState(height ? height : 300);
    useEffect(() => {
      function handleResize() {
        setWidth(document.body.clientWidth / 1.37);
        setStateHeight(document.body.clientWidth / 2.5);
      }
      handleResize();
      window.addEventListener("resize", handleResize);
    
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return (
        <>
            <div className="center gridi-center">
                <iframe width={width} height={stateHeight} src={url}></iframe>
            </div>
        </>
    )
}