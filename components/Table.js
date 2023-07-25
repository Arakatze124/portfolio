import React, { useEffect, useState } from "react"

export default function Table(url){
    const [width, setWidth] = useState(1000);
    useEffect(() => {
      function handleResize() {
        setWidth(document.body.clientWidth / 1.2);
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
                <iframe width={width} height={350} src={url.url}></iframe>
            </div>
        </>
    )
}