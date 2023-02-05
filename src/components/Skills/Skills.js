
import Particles from 'react-particles-js';

import {Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Anime from 'react-anime';


import 'aos/dist/aos.css';
import NavBar from '../Nav/NavBar';


import skillsStyles from '../../Styles/Skills/Skills.module.css'
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';



import { useSelector  } from 'react-redux'


function Skills() {
	const[ar,setAr]=useState({})

	// Numbers
	const[num1,setNum1]=useState(98)
	const[num2,setNum2]=useState(95)
	const[num3,setNum3]=useState(90)
	const[num4,setNum4]=useState(78)
	const[num5,setNum5]=useState(89)

	const[num6,setNum6]=useState(94)
	const[num7,setNum7]=useState(91)
	const[num8,setNum8]=useState(80)
	const[num9,setNum9]=useState(89)
	const[num10,setNum10]=useState(68)

		
  const bgColor = useSelector((state) => state.color.bgColor)
   const textColor = useSelector((state) => state.color.textColor)
  const headlineColor = useSelector((state) => state.color.headlineColor)

	const particleColor = useSelector((state) => state.color.particleColor)


	useEffect(() => {
	  
	
	  return () => {

		setAr({})

		
	  }
	}, [])
	
	
  return (

	<div style={{background:bgColor}} >

		
		        <NavBar
                   
                  
                     />


    <div className={skillsStyles.main}>
		 
					 			
						 <Particles className={skillsStyles.particles}
							params={{
								"particles": {
									 "color": {
                                "value": particleColor
                                 },
									"number": {
										"value": 115
									},
									"size": {
										"value": 4
									}
								},
								"interactivity": {
									"events": {
										"onhover": {
											"enable": true,
											"mode": "repulse"
										}
									}
								}
							}} />


							
							<div className={skillsStyles.firstDiv}>

							    <Anime translateY={[-100,0]} duration={3000} delay={1200} opacity={[0,1]}>
								   SKILLS
								</Anime>


                            </div>


						<div className={skillsStyles.secondDiv}>

							<div className={skillsStyles.secondDivItem1} style={{color:textColor}}>

								<div>HTML <input type="range"   min="0" max="100" defaultValue={num1} /></div>
								<div>CSS <input type="range"  min="0" max="100" defaultValue={num2} /></div>
								<div>RESPONSIVE DESIGN <input type="range"  min="0" max="100"  defaultValue={num3} /></div>
								<div>BOOTSTRAP<input type="range"  min="0" max="100" defaultValue={num4} /> </div>
								<div>FIGMA <input type="range"   min="0" max="100" defaultValue={num5}  /></div>


							 </div>


								<div className={skillsStyles.secondDivItem2} style={{color:textColor}}>

									
							     	<div>REACT / NEXT.JS <input type="range"   min="0" max="100" defaultValue={num6} /></div>
									<div>VSCODE / ATOM / GITHUB <input type="range"   min="0" max="100" defaultValue={num7} /></div>
								    <div>NODE.JS / EXPRESS.JS <input type="range"  min="0" max="100" defaultValue={num8} /></div>
									<div>MONGO.DB / MYSQL<input type="range"   min="0" max="100" defaultValue={num9} /></div>
									<div>CPANEL  <input type="range"   min="0" max="100" defaultValue={num10} /></div>
								   
								   
								   
									
								</div>


						

							</div>


							




							
							<div className={skillsStyles.buttonLinkDiv}>

								 <Link to="/contact" style={{textDecoration:"none"}}><button  className={skillsStyles.button} style={{color:textColor,borderColor:headlineColor}}> Next   <AiOutlineArrowRight /></button></Link>

							</div>

							



           </div>


       <Footer />


	</div> 
  )
}

export default Skills