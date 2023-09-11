import React from 'react'
import './Works.css'
import upwork from '../../img/Upwork.png'
import amazon from '../../img/amazon.png'
import shopify from '../../img/Shopify.png'
import facebook from '../../img/Facebook.png'
import fiverr from '../../img/fiverr.png'


const Works = () => {
  return (
    <div className='works'>


        <div className='awesome'>

            <span>Work For All These</span>
            <span>Companies & Brand</span>
            <span>Lorem ipsum dolor sit amet consectetur 
                
            <br />
            adipisicing elit. Corporis dolor, 
                
            <br/>  
            dolorum cu=e eveniet soluta voluptates?</span>
                
                <button className='button s-button'>Hire Me</button>
                
                <div className='blur s-blur1' style={{background:'#ABF1FF94'}}></div>
 
          </div>

          <div className='w-right'>
            <div className='w-mainCircle'>
                <div className='w-secCircle'>
                    <img src={upwork} alt="" />

                </div>

                <div className='w-secCircle'>
                    <img src={facebook} alt="" />

                </div>

                <div className='w-secCircle'>
                    <img src={fiverr} alt="" />

                </div>

                <div className='w-secCircle'>
                    <img src={amazon} alt="" />

                </div>

                <div className='w-secCircle'>
                    <img src={shopify} alt="" />

                </div>

            </div>

            <div className='w-backCircle blueCircle'></div>
            <div className='w-backCircle yellowCircle'></div>

          </div>

    </div>
  )
}

export default Works