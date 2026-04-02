import React from 'react'
import { socialImgs } from '../constants'

function Footer() {
  return (
    <footer className='footer'>
        <div className="footer-container">
            <div className="flex flex-col justify-center items-center">
                <a href="/">Visit my Blog</a>
            </div>
            <div className="socials">
                {socialImgs.map((img)=>(
                    <a className='icon' target='_blank' href={img.url} key={img.url}>
                        <img src={img.imgPath}/>
                    </a>
                ))}
                   
            </div>
        </div>
    </footer>
  )
}

export default Footer