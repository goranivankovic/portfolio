import Anime from 'react-anime'


import Particles from 'react-particles-js';
import NavBar from '../Nav/NavBar';
import Footer from '../Footer/Footer'
import {Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'

import protfolioStyles from '../../Styles/Portfolio/Portfolio.module.css'


//Images

import shop from '../../img/shop.png'
import movies from '../../img/movies.jpeg'
import weather from '../../img/weather.jpeg'
import fit from '../../img/fit.png'
import laptop from '../../img/laptop.jpg'


import { useEffect } from 'react'


import { useSelector   } from 'react-redux'



function Portfolio() {

    const bgColor = useSelector((state) => state.color.bgColor)
   const textColor = useSelector((state) => state.color.textColor)
  const headlineColor = useSelector((state) => state.color.headlineColor)

	const particleColor = useSelector((state) => state.color.particleColor)


useEffect(() => {
  

  return () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}, [])





  return (

     <div style={{background:bgColor}}>
        <NavBar
		
                
                  
                     />

    <div className={protfolioStyles.main}  >
		 

		        
					 			
						 <Particles className={protfolioStyles.particles}
							params={{
								"particles": {
                  	    "color": {
                      "value": particleColor
                                 },
									"number": {
										"value": 100
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

							{/* Component Headline */}
					  

							<div className={protfolioStyles.firstDiv}>

							    <Anime translateY={[-100,0]} duration={3000} delay={1200} opacity={[0,1]}>
								    PORTFOLIO
								</Anime> 
                            
                            </div>

          
                                  
								  
								  
								   {/* Project 1 */}

							<div className={protfolioStyles.secondDiv} style={{color:textColor,boxShadow:'2px 1px 10px',textColor}}>
								<img className={protfolioStyles.secondDivItem1} src={shop} alt="shop-image" />

							    <div className={protfolioStyles.secondDivItem2} style={{color:textColor}}>
									<div className={protfolioStyles.secondDivItem2Headline} style={{color:headlineColor}}>E-Commerce Shop</div>

									<div>BRIEF</div>
								
									<div style={{color:textColor}}>
									
										Full e-Commerce Web App, completly responsive, made from scratch using: React, React Router, React-bootstrap and React-redux for state management.
										
										  With advanced cart functionalities, and many other features. For longer description visit github.
                                    </div>

									<div className={protfolioStyles.secondDivItem2Buttons}><a href='https://nscoder-shop.netlify.app' style={{color:textColor}}  target='_blank'>Live</a> <a href='https://github.com/goranivankovic/e-commerce-shop' style={{color:textColor}}  target='_blank'>Code</a> </div>

								</div>

							</div>





								   {/* Project 2 */}

							<div className={protfolioStyles.secondDiv} style={{color:textColor,boxShadow:'2px 1px 10px',textColor}}>
								<img className={protfolioStyles.secondDivItem1} src={movies} alt="movies-image" />

							    <div className={protfolioStyles.secondDivItem2} style={{color:textColor}}>
									<div className={protfolioStyles.secondDivItem2Headline} style={{color:headlineColor}}> Movie Website</div>

									<div>BRIEF</div>
								
									<div style={{color:textColor}}>
									
										Dynamic, completly responsive app made from scratch using : React , React Router, React-bootstrap, Dotenv, React-icons. For longer description visit github.
                                    </div>

									<div className={protfolioStyles.secondDivItem2Buttons}><a href='https://nscoder-movie.netlify.app' style={{color:textColor}}  target='_blank'>Live</a> <a href='https://github.com/goranivankovic/react-movie' style={{color:textColor}}  target='_blank'>Code</a> </div>

								</div>

							</div>






								   {/* Project 3 */}

							<div className={protfolioStyles.secondDiv} style={{color:textColor,boxShadow:'2px 1px 10px',textColor}}>
								<img className={protfolioStyles.secondDivItem1} src={weather} alt="weather-image" />

							    <div className={protfolioStyles.secondDivItem2} style={{color:textColor}}>
									<div className={protfolioStyles.secondDivItem2Headline} style={{color:headlineColor}}>Weather App</div>

									<div>BRIEF</div>
								
									<div style={{color:textColor}}>
										Dynamic app made from scratch using : React, CSS-modules , Axios, React-flags, that asynchronously collects data from two different APIs  'openweather'.  You can also search for any place on earth. For longer description visit github.
									
									
                                    </div>

									<div className={protfolioStyles.secondDivItem2Buttons}><a href='https://nscoder-weather.netlify.app' style={{color:textColor}}  target='_blank'>Live</a> <a href='https://github.com/goranivankovic/weather-app' style={{color:textColor}}  target='_blank'>Code</a> </div>

								</div>

							</div>






							   {/* Project 4 */}

							<div className={protfolioStyles.secondDiv} style={{color:textColor,boxShadow:'2px 1px 10px',textColor}}>
								<img className={protfolioStyles.secondDivItem1} src={fit} alt="fit-image" />

							    <div className={protfolioStyles.secondDivItem2} style={{color:textColor}}>
									<div className={protfolioStyles.secondDivItem2Headline} style={{color:headlineColor}}>Fitness Website</div>

									<div>BRIEF</div>
								
									<div style={{color:textColor}}>
									
									Dynamic, completly responsive app made from scratch using : React , React Router, React-icons. For longer description visit github.
                                    </div>

									<div className={protfolioStyles.secondDivItem2Buttons}><a href='https://nscoder-fit.netlify.app' style={{color:textColor}}  target='_blank'>Live</a> <a href='https://github.com/goranivankovic/royal-fit' style={{color:textColor}}  target='_blank'>Code</a> </div>

								</div>

							</div>








							
							   {/* Project 5 */}

							<div className={protfolioStyles.secondDiv} style={{color:textColor,boxShadow:'2px 1px 10px',textColor}}>
								<img className={protfolioStyles.secondDivItem1} src={laptop} alt="gomadesign-image" />

							    <div className={protfolioStyles.secondDivItem2} style={{color:textColor}}>
									<div className={protfolioStyles.secondDivItem2Headline} style={{color:headlineColor}}>Business Website</div>

									<div>BRIEF</div>
								
									<div style={{color:textColor}}>
									
									Dynamic, completly responsive app made from scratch using : React, Redux , React Router, React-icons, React-anime. For longer description visit github.
                                    </div>

									<div className={protfolioStyles.secondDivItem2Buttons}><a href='https://gomadesign.netlify.app' style={{color:textColor}}  target='_blank'>Live</a> <a href='https://github.com/goranivankovic/gomadesign' style={{color:textColor}}  target='_blank'>Code</a> </div>

								</div>

							</div>









                                 

							<div className={protfolioStyles.buttonLinkDiv}>

								 <Link to="/npm" style={{textDecoration:"none"}}><button  className={protfolioStyles.button} style={{color:textColor,borderColor:headlineColor}}> Next   <AiOutlineArrowRight /></button></Link>

							</div>
							

						

                     </div>

					 
							



                <Footer />


  </div>

  )
}

export default Portfolio