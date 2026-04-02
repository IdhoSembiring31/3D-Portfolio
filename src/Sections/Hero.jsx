import React from 'react'
// sm:	≥ 640px
// md:	≥ 768px
// lg:	≥ 1024px
// xl:	≥ 1280px
// 2xl:	≥ 1536px
// ==========text-xs → 0.75rem (12px)
// text-sm → 0.875rem (14px)
// text-base → 1rem (16px)
// text-lg → 1.125rem (18px)
// text-xl → 1.25rem (20px)
// text-2xl → 1.5rem (24px)
// text-3xl → 1.875rem (30px)
import { words } from '../constants'
import Button from '../Components/Button'
import HeroExperience from '../Components/HeroModels/HeroExperience'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import AnimatedCounter from '../Components/AnimatedCounter';
function Hero() {
    useGSAP(()=>{
        gsap.fromTo(['.hero-text h1', '.hero-text .slide','#hero p'],{
            opacity:0,
            y:50,
            
        },{
            opacity:1,
            y:0,
            duration:1,
            ease:'power1.inOut',
            stagger:0.2,

        })
    })
  return (
    <section id="hero" className='relative overflow-hidden'>
        <div className='absolute top-0 left-0 z-10'>
            <img src="/images/bg.png" alt="background" />
        </div>
        <div className="hero-layout">
            {/* LEFT HERO CONTENT */}
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                <div className="flex flex-col gap-7">
                    <div className="hero-text">
                        <h1>Shaping 
                            <span className='slide'>
                                <span className='wrapper'>
                                    {words.map((word,index)=>(
                                        <span key={index} className='flex items-center md:gap-3 gap-1 pb-2 '>
                                            <img src={word.imgPath} alt={word.text} className='xl:size-12 
                                            md:size-10 size-7 md:p-2 p-1 rounded-full bg bg-white-50'/>
                                            <span className='text-white text-2xl font-semibold'>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                    
                        <h1>into Real Project</h1>
                        <h1>that Deliver Results</h1>
                    </div>
                    <p className='md:text-xl pointer-events-none text-white-50 relative z-10'>
                        HI, i'm idho 
                        base in indonesia with a passion for code.</p>
                    <Button className="text-center  md:w-80 md:h-16 w-60 h-12" text="See my Work" id="button"/>
                </div>
            </header>
            {/* RIGHT: 3D MODEL */}
            <figure>
                <div className="hero-3d-layout">
                    <HeroExperience/>
                </div>
            </figure>
        </div>
        <AnimatedCounter/>
    </section>
  )
}

export default Hero