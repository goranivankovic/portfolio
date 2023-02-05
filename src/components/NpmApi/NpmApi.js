import Anime from 'react-anime'


import Particles from 'react-particles-js';
import NavBar from '../Nav/NavBar';
import Footer from '../Footer/Footer'
import {Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'

import npmStyles from '../../Styles/NPM/Npm.module.css'


//Images

import footer from '../../img/footer.png'
import navbar from '../../img/navbar.png'


import wcApi from '../../img/wc-api.png'
import blog from '../../img/blog.png'


import { useEffect } from 'react'


import { useSelector   } from 'react-redux'



function NpmApi() {

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

    <div className={npmStyles.main}  >
		 

		        
					 			
						 <Particles className={npmStyles.particles}
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
					  

							<div className={npmStyles.firstDiv}>

							    <Anime translateY={[-100,0]} duration={3000} delay={1200} opacity={[0,1]}>
								   NPM
								</Anime> 
                            
                            </div>

          
                                  
						


								   {/* Project 1 */}

								   <div className={npmStyles.secondDiv} style={{color:textColor,boxShadow:'2px 1px 10px',textColor}}>
								<img className={npmStyles.secondDivItem1} src={navbar} alt="navbar-image" />

							    <div className={npmStyles.secondDivItem2} style={{color:textColor}}>
									<div className={npmStyles.secondDivItem2Headline} style={{color:headlineColor}}>NPM Navbar-Package</div>

									<div>BRIEF</div>
								
									<div style={{color:textColor}}>

									Responsive navbar with props. Simple and light npm package. Technologies use: React,React-hooks, babel. Required: Node.js, NPM, React. I hope you liked and feel happy to enjoy and download.
									
										
                                    </div>

									<div className={npmStyles.secondDivItem2Buttons}><a href='https://www.npmjs.com/package/react-nscoder-navbar' style={{color:textColor}}  target='_blank'>NPM</a> <a href='https://github.com/goranivankovic/react-nscoder-navbar' style={{color:textColor}}  target='_blank'>Code</a> </div>

								</div>

							</div>


                                 {/* Project 2 */}


							<div className={npmStyles.secondDiv} style={{color:textColor,boxShadow:'2px 1px 10px',textColor}}>
								<img className={npmStyles.secondDivItem1} src={footer} alt="footer-image" />

							    <div className={npmStyles.secondDivItem2} style={{color:textColor}}>
									<div className={npmStyles.secondDivItem2Headline} style={{color:headlineColor}}>NPM Footer-Package</div>
                                    
									<div>BRIEF</div>
								
									<div style={{color:textColor}}>
									
										Responsive footer with props. Simple and light npm package. Technologies use: React,React-hooks, babel. Required: Node.js, NPM, React. I hope you liked and feel happy to enjoy and download.

                                    </div>

									<div className={npmStyles.secondDivItem2Buttons}><a href="https://www.npmjs.com/package/react-nscoder-footer" style={{color:textColor}}  target='_blank'>NPM</a> <a href='https://github.com/goranivankovic/react-nscoder-footer' style={{color:textColor}}  target='_blank'>Code</a> </div>

								</div>

							</div>

							  

							






                             	<div className={npmStyles.firstDiv}>

							    <Anime translateY={[-100,0]} duration={3000} delay={1200} opacity={[0,1]}>
								 API
								</Anime> 
                            
                            </div>





                            
								   {/* Project 3 */}

							<div className={npmStyles.secondDiv} style={{color:textColor,boxShadow:'2px 1px 10px',textColor}}>
								<img className={npmStyles.secondDivItem1} src={wcApi} alt="wc-api-image" />

							    <div className={npmStyles.secondDivItem2} style={{color:textColor}}>
									<div className={npmStyles.secondDivItem2Headline} style={{color:headlineColor}}>Modern Wc-Api Website</div>
                                    
									<div>BRIEF</div>
								
									<div style={{color:textColor}}>
									
									Dynamic, completly responsive Wc-api with integrate API, made from scratch using: Next.js , React , CSS-Moduels... And many other features. For longer description visit github.
                                    </div>

									<div className={npmStyles.secondDivItem2Buttons}><a href='https://nscoder-wc-api.vercel.app' style={{color:textColor}}  target='_blank'>Live</a> <a href='https://github.com/goranivankovic/wc-api' style={{color:textColor}}  target='_blank'>Code</a> </div>

								</div>

							</div>

							   {/* Project 4 */}

							<div className={npmStyles.secondDiv} style={{color:textColor,boxShadow:'2px 1px 10px',textColor}}>
								<img className={npmStyles.secondDivItem1} src={blog} alt="blog-image" />

							    <div className={npmStyles.secondDivItem2} style={{color:textColor}}>
									<div className={npmStyles.secondDivItem2Headline} style={{color:headlineColor}}>Blog Website</div>

									<div>BRIEF</div>
								
									<div style={{color:textColor}}>

										Dynamic, completly responsive Blog with integrate API, made from scratch using: Next.js , React , CSS-Moduels... And many other features. For longer description visit github.
									
										
                                    </div>

									<div className={npmStyles.secondDivItem2Buttons}><a href='https://nscoder-blog.vercel.app' style={{color:textColor}}  target='_blank'>Live</a> <a href='https://github.com/goranivankovic/nscoder-blog' style={{color:textColor}}  target='_blank'>Code</a> </div>

								</div>

							</div>












                                 

							<div className={npmStyles.buttonLinkDiv}>

								 <Link to="/skills" style={{textDecoration:"none"}}><button  className={npmStyles.button} style={{color:textColor,borderColor:headlineColor}}> Next   <AiOutlineArrowRight /></button></Link>

							</div>
							

						

                     </div>

					 
							



                <Footer />


  </div>

  )
}

export default NpmApi;