import React from 'react'
import './Intro.css'
import Github from "../../img/github.png";
import Linkdin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boys from '../../img/boys.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/floating'


const Intro = () => {
  return (
    <div className='Intro'>
      <div className='i-left'>
            <div className='i-name'>
                <span>Hi! I AM</span>
                <span>Apu Sarkar</span>
                <span>Full Stack Developer with high level of experience web desigining and development , producing the client friendly quality work </span>
            </div>

            <button className='button i-button'>Hire Me</button>

            <div className='i-icons'>
                <img src={Github} alt="" />
                <img src={Linkdin} alt="" />
                <img src={Instagram} alt="" />
                     
            </div>
      </div> 

      <div className='i-right'>
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boys} alt="" />
        <img src={glassimoji} alt="" />


        <div style={{top:'-4%' , left: '68%'}}>
           <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
        </div>

        <div style={{top:'20rem' , left: '2rem'}}>
           <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
        </div>

        <div className='blur' style={{background:'rgb(238 210 255)'}}>

        </div>

        <div className='blur' style={{background:'#C1F5FF',
                                       top:'17rem',
                                       left:'-9rem',
                                       width:'21rem',
                                       height:'11rem'
                                       }}>

        </div>
        
         
      </div>


    </div>
  )
}

export default Intro