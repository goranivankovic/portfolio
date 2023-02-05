
import Particles from 'react-particles-js';
import {Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from '../Nav/NavBar';
import contactStyles from '../../Styles/Contact/Contact.module.css'
import Footer from '../Footer/Footer';
import axios from 'axios';

import { AiOutlineArrowRight ,AiOutlineCheckCircle} from 'react-icons/ai'



import { useSelector  } from 'react-redux'
import { useState } from 'react';
import { HiTrendingUp } from 'react-icons/hi';


function Contact() {
	const[email,setEmail]=useState('')
	const[text,setText]=useState('')
	const[laz,setLaz]=useState(false)

	  const bgColor = useSelector((state) => state.color.bgColor)
   const textColor = useSelector((state) => state.color.textColor)
  const headlineColor = useSelector((state) => state.color.headlineColor)

	const particleColor = useSelector((state) => state.color.particleColor)
	    


async	function sendData(c){
		c.preventDefault()
		

		try{

		

			const res = await axios.post(process.env.REACT_APP_POST_LINK,{email,text}) 

			console.log(res);
			


			const inputData =document.querySelectorAll('.data')
		     inputData.forEach((el)=>
			 el.value=''
			 )

			 setLaz(true)



			 setTimeout(() => {
				 setLaz(false)
			 }, 6000);
			




		}catch(err){
			console.log('Eror is :' + err)

		}


	
	}

	
  return (

	<div style={{background:bgColor}}>

		  <NavBar
                      
                     />

    <div className={contactStyles.main}>
		 

		        
		           
					 			
						 <Particles className={contactStyles.particles}
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
					  

							<div className={contactStyles.firstDiv}>
								CONTACT

							</div>


						

								<form className={contactStyles.secondDiv} style={{color:textColor}} onSubmit={sendData}>

									

								<div > Email	 
									<input type="email" placeholder='Enter a Email ...' 
									className= "data"
								
                                  
									 required={true}
									 style={{boxShadow:'2px 1px 10px',textColor}}
									
									onChange={a=>setEmail(a.target.value)}/> 
								</div>

									<div>
									  Message <textarea  placeholder='Enter a Message ...' rows="4" cols="50"
									   required={true}
									   className= "data"
									   style={{boxShadow:'2px 1px 10px',textColor}}
									         
									    onChange={b=>setText(b.target.value)}>
										</textarea>
									</div>
								{ !laz ?	<button  className={contactStyles.submitButton} style={{color:textColor}}  type="submit">Send</button> : <div style={{color:textColor}} className={contactStyles.submitMessage}><span>Success</span>  <AiOutlineCheckCircle style={{color:'green'}} /> </div> }

								</form>

						



							
							<div className={contactStyles.buttonLinkDiv}>

								 <Link to="/" style={{textDecoration:"none"}}><button  className={contactStyles.button} style={{color:textColor,borderColor:headlineColor}}> Next   <AiOutlineArrowRight /></button></Link>

							</div>


							</div>


           <Footer />


	</div> 
  )
}

export default Contact