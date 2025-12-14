import logo from '/logo.png';
import { useState } from 'react';
import { Menu, X } from "lucide-react";
import '../styles/navbar.css';


function Navbar() {
   const [isOpen, setIsOpen] = useState(false)

   const taphandler = ()=> setIsOpen(false)

    return (
       <>

       <nav className="navbar">
         <div className="nav-container">
            <div className="nav-logo">
               <img src={logo} alt="Logo" />
            </div>

            <ul className={`nav-links ${isOpen ? "open" : "" }`}>
                 <li><a href="#home" onClick={taphandler}>Home</a></li>
                 <li><a href="#about" onClick={taphandler}>About Us</a></li>
                 <li><a href="#services" onClick={taphandler}>Services</a></li>
                 <li><a href="#contact" onClick={taphandler}>Contact Us</a></li>
            </ul>
            <button onClick={()=>setIsOpen(!isOpen)} className='menu-icon'>
            {isOpen? <X/>:<Menu size={24} /> }
            </button>


            <button
                  className="navbutton"
                  onClick={() => {
                     document
                        .getElementById("contact")
                        .scrollIntoView({ behavior: "smooth" });
                  }}
                  >
                  Contact Us
            </button>
            </div>
       </nav>
      
       
       </>
    )
        
    }

export default Navbar;