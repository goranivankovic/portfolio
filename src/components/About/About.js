
import Particles from 'react-particles-js';


import {Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Anime from 'react-anime';

import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from '../Nav/NavBar';


import aboutStyles from '../../Styles/About/About.module.css'
import Footer from '../Footer/Footer';
import { useEffect } from 'react';
import { useSelector  } from 'react-redux'


function About() {
		
  const bgColor = useSelector((state) => state.color.bgColor)
   const textColor = useSelector((state) => state.color.textColor)
  const headlineColor = useSelector((state) => state.color.headlineColor)

	const particleColor = useSelector((state) => state.color.particleColor)

	
  return (

	<div style={{background:bgColor}}>

		  <NavBar

		

		   
                  
                     />




          <div className={aboutStyles.main}>

		    

				 <Particles className={aboutStyles.particles}
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


			
							<div className={aboutStyles.firstDiv}>

                               <Anime translateY={[-100,0]} duration={3000} delay={1200} opacity={[0,1]}>
								<div className={aboutStyles.firstdivHeadline}>ABOUT</div>
								</Anime>
								<Anime translateY={[250,0]} duration={3000} delay={2000} opacity={[0,1]}>
								<div className={aboutStyles.firstdivText} style={{color:textColor}} >Hello, my name is Goran Ivankovic, and I am a self-taught Programmer and Designer. 
                                    I enjoy creating fully responsive websites with user-friendly web experiences and deliver highly accurate products that meet the quality standard. I love to learn new technologies and make unique UI/UX designs.
                                   


                                </div>
								</Anime>


									<Anime translateY={[450,0]} duration={3000} delay={3000} opacity={[0,1]}>
								<div className={aboutStyles.firstdivText} style={{color:textColor}} >

									I can work closely with designers, helping them create beautiful designs, code pixel-perfect layouts, and bring the website to life with nice animations.
Also, I enjoy problem-solving and creating fast and dynamic React applications.
                                  


                                </div>
								</Anime>

							</div>



                   	
							<div className={aboutStyles.buttonLinkDiv}>

								 <Link to="/portfolio" style={{textDecoration:"none"}}><button  className={aboutStyles.button} style={{color:textColor,borderColor:headlineColor}}> Next   <AiOutlineArrowRight /></button></Link>

							</div>

		   </div>
 <Footer />

	
</div>

  )
}

export default About