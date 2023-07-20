import React from 'react';
import Link from 'next/link';
import '../styles/NavigationBar.css';

export default function NavigationBar() {
  return (
    <>
           
       
       <div id="container" >
   
         <nav className='sticky'>
           <div id="logo">
             Dean Opara
           </div>
           <ul>
             <li><Link href={"/home"}>Home</Link></li>
            
             <li class="dropdown" onmouseover="hover(this);" onmouseout="out(this);"><a href="#">Hobbies ▼</a>
               <div class="dd">
                 <div id="up_arrow"></div>
               <ul>
                 
                 <li><Link href={"/sports"}>Sport</Link></li>
                 <li><Link href={"/bikes"}>Motorräder</Link></li>
                 <li><Link href={"/gaming"}>Gaming</Link></li>
                 <li><Link href={"/aviation"}>Aviation</Link></li>
                 <li><Link href={"/media"}>Medien</Link></li>
               </ul>
               </div>
             </li>
             
             <li class=""><Link href={"/career"}>Karriere</Link></li>
               <li><Link href={"/contact"}>Kontakt</Link></li>
           </ul>
         </nav>
       </div>
   </>
  );
}
