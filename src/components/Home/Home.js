
import Particles from 'react-particles-js';
import { FaBars,FaLinkedin,FaYoutube,FaGithub,FaFacebook } from 'react-icons/fa'

import {Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Anime from 'react-anime';

import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from '../Nav/NavBar';


import homeStyles from '../../Styles/Home/Home.module.css'
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';

import { useSelector  } from 'react-redux'


function Home() {

	const[ar,setAr]=useState({})


	
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


	<div style={{background:bgColor}}>

		        <NavBar

				  tColor="#f0ad4e"
                  
                  
                     />


    <div className={homeStyles.main}>
		
				
						 <Particles className={homeStyles.particles}
				
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
								},
						
							
								
							}}
							 />
					  

							<div className={homeStyles.firstDiv}>

                               <Anime translateY={[-100,0]} duration={3000} delay={1200} opacity={[0,1]}>
								<div className={homeStyles.firstdivHeadline}>GORAN IVANKOVIĆ</div>
								</Anime>
								<Anime translateY={[250,0]} duration={3000} delay={2000} opacity={[0,1]}>
								<div  className={homeStyles.firstdivText} style={{color:textColor}}>Frontend Developer, Designer, Coder, Debugger</div>
								</Anime>
				
							</div>




							
							<div className={homeStyles.buttonLinkDiv}>

								 <Link to="/about" style={{textDecoration:"none"}}><button  className={homeStyles.button} style={{color:textColor,borderColor:headlineColor}}> Next   <AiOutlineArrowRight /></button></Link>

							</div>


          


	</div> 



 <Footer />


   </div>


  )
}

export default Home