import React,{useState} from 'react'
import Anime from 'react-anime'

import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im' 
import { HiOutlineSun ,HiMoon} from 'react-icons/hi'


import navStyles from '../../Styles/Nav/Navbar.module.css'
import {Link } from 'react-router-dom';


import { useSelector, useDispatch } from 'react-redux'

import {whiteBgColor,blackBgColor} from '../../Redux-Actions/changeBgColor'


function NavBar() {

  const[close,setClose]=useState(true)


  const dispatch = useDispatch()

  const bgColor = useSelector((state) => state.color.bgColor)
  const textColor = useSelector((state) => state.color.textColor)
    const headlineColor = useSelector((state) => state.color.headlineColor)


 const laz = useSelector((state) => state.color.laz)


   const orangeColor=(a)=>{
    a.target.style.color=headlineColor
    a.target.transition='750ms'

   }

    const defaultColor=(b)=>{
    b.target.style.color=textColor
    b.target.transition='750ms'

   }


   function closeBarFun(){
     const icon =document.getElementById('icon')
     icon.style.transition='900ms'
     icon.style.transform='rotate(360deg)'

     setTimeout(() => {
      setClose(!close)
      
     }, 1100);

   }

 


  return (

    <div>

  


    <div className={navStyles.main} style={{background:bgColor}}>

      
        <div className={navStyles.first}>

        <Anime translateX={[-300,0]} duration={1500} delay={1500} opacity={[0,1]}>

                 <Link  style={{color:textColor}} onMouseOver={orangeColor} onMouseOut={defaultColor} to="/">Home </Link>
                 <Link  style={{color:textColor}} onMouseOver={orangeColor} onMouseOut={defaultColor} to="/about">  About</Link>
                 <Link  style={{color:textColor}} onMouseOver={orangeColor} onMouseOut={defaultColor}   to="/portfolio"> Portfolio</Link>
                 <Link  style={{color:textColor}} onMouseOver={orangeColor} onMouseOut={defaultColor}   to="/npm"> NPM / API</Link>
                 <Link  style={{color:textColor}} onMouseOver={orangeColor} onMouseOut={defaultColor}  to="/skills"> Skills </Link>
                 <Link  style={{color:textColor}} onMouseOver={orangeColor} onMouseOut={defaultColor}  to="/contact">Contact</Link>

              {laz  ? <HiOutlineSun onClick={()=>dispatch(whiteBgColor())} style={{color:textColor}} 
         
              className={navStyles.sun} />


              : <HiMoon  style={{color:textColor}} onClick={()=>dispatch(blackBgColor())} 
            
               className={navStyles.sun}  />  }
            </Anime>

             </div>
         </div>  




          {/* Items that appear 768px */}


            <div className={navStyles.barsDiv}>
               { close ? <FaBars onClick={closeBarFun} style={{color : textColor }} id="icon"  />  :   <ImCross onClick={closeBarFun} style={{color : textColor }} id="icon"  /> }

           </div>



            { ! close ?

                  <div className={navStyles.main768} style={{background: bgColor}}>

                    
                 <Link  style={{color:textColor}} onMouseOver={orangeColor} onMouseOut={defaultColor} to="/">Home </Link>
                 <Link  style={{color:textColor}} onMouseOver={orangeColor} onMouseOut={defaultColor} to="/about">  About</Link>
                 <Link  style={{color:textColor}} onMouseOver={orangeColor} onMouseOut={defaultColor}   to="/portfolio"> Portfolio</Link>
                 <Link  style={{color:textColor}} onMouseOver={orangeColor} onMouseOut={defaultColor}   to="/npm"> NPM / API</Link>
                 <Link  style={{color:textColor}} onMouseOver={orangeColor} onMouseOut={defaultColor}  to="/skills"> Skills </Link>
                 <Link  style={{color:textColor}} onMouseOver={orangeColor} onMouseOut={defaultColor}  to="/contact">Contact</Link>

              {laz  ? <HiOutlineSun onClick={()=>dispatch(whiteBgColor())} style={{color:textColor}} 
         
              className={navStyles.sun} />


              : <HiMoon  style={{color:textColor}} onClick={()=>dispatch(blackBgColor())} 
            
               className={navStyles.sun}  />  }


                  </div>


                  :"" }






      
   </div>
  )
}

export default NavBar;










