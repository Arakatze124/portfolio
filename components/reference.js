import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import "../styles/reference.css"

export default function Reference(reference) {
    function handleClick() {
        window.open(reference.link, '_blank');
      }
      const [width, setWidth] = useState(1000);
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    function handleResize() {
      setWidth(document.body.clientWidth / 20);
      if(width*2 < 769){
        setMobile(true);
      }

    }
  
    handleResize();
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
    return (<>
    <div className='reference'>
        <div className="reference-content" onClick={handleClick}>
        <Image
           src={reference.icon}
           width={94}
           alt={reference.text}
        ></Image>
        <p className=''>{reference.title}</p>
      </div>
      <div className='title3 reference-footer'>{reference.text}
      </div>
      </div>
      
      </>
    )
}
