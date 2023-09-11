import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from "../Card/Card";
import Resume from './resume.pdf'

const Services = () => {
  return (
    <div className='services'>
          <div className='awesome'>

            <span>My Awesome</span>
            <span>Services</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor, 
                
              <br/>  
                dolorum cu=e eveniet soluta voluptates?</span>
                <a href={Resume} download>
                <button className='button s-button'>Download CV</button>
                </a>
                <div className='blur s-blur1' style={{background:'#ABF1FF94'}}></div>
 
          </div>

          <div className='cards'>
<div style={{left: '14rem'}}>


           <Card
               emoji = {HeartEmoji}
               heading = {'Design'}
               detail = {'Figma , XD , Wix, Photoshop'}
           
           />
           </div>

           <div style={{top:'12rem', left: '-4rem'}}>


           <Card
               emoji = {Glasses}
               heading = {'Developer'}
               detail = {'Html ,CSS ,ReactJs, PHP, Laravel, Node Js'}
           
           />
           </div>


           <div style={{ top:'25rem',left: '14rem'}}>


           <Card
               emoji = {Humble}
               heading = {'UI/UX'}
               detail = {'lorem iipsom sudgsd fsffgs sfgsfgf sfgsfuigfs sfuihusf '}
           
           />
           </div>

           <div className='blur s-blur2' style={{background:'var(--purple)'}}>

           </div>

          </div>
    </div>
  )
}

export default Services