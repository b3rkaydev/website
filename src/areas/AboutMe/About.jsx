import Typewriter from 'typewriter-effect/dist/core';
import "./About.css"
import { Tooltip } from 'react-tooltip'
import React, { useState, useEffect } from 'react';
import Card from "../../components/Card/Card.jsx"
import ScrollAnimation from 'react-animate-on-scroll';
export default function About() {

    let upperCaseFirstChar=e=>{let r=e.charAt(0).toUpperCase(),t=e.slice(1);return r+t};
    let skills = [
        "html","css","javascript","typescript","sass","tailwind","react","svelte","php","node.js","python","linux"
    ]
    return (
        <>
            <Tooltip id="stooltip" style={{background:"#111",color:"white",fontWeight:"500",zIndex:"2"}} opacity={1} />
            <main id="area" className='about'>
                <div className="container">
                    <div className='about-top'>
                        <div>
                            <h2><ScrollAnimation animateIn="_in" animateOut="_out" duration={0.4}><span>👋 Hello Stranger,</span></ScrollAnimation> <ScrollAnimation animateIn="_in" animateOut="_out" duration={0.4}>My name is Berkay. I'm a Junior Full-stack developer. I enjoy watching anime and reading manga in my free time.</ScrollAnimation></h2>
                            <div id="skills">
                                {
                                    skills.map((skill,i) => {
                                        return (
                                            <ScrollAnimation key={i} animateIn="_in" style={{display:"flex",justifyContent:"center",alignItems:"center"}} animateOut="_out" duration={0.4}>
                                                <img src={`/icons/skill/${skill}.svg`} alt={skill} 
                                                data-tooltip-id="stooltip" 
                                                data-tooltip-content={upperCaseFirstChar(skill)} />
                                            </ScrollAnimation>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div>
                            <ScrollAnimation animateIn="_in" animateOut="_out" duration={0.4}>
                                <img src="/cat.svg" className="cat" />
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className='about-bottom'>
                        <div className="cards">
                                <Card type="mail" title="E-mail" desc="My e-mail address for contact or other purposes." url="bit@b3rkay.dev" />
                                <Card type="git" title="Source Code" desc="This website is open source, so you can view the codes from github." url="https://github.com/b3rkaydev/website" />
                                <Card type="link" title="Blog" desc="My personal blog. Not finished yet. Coming soon. Probably?"/>
                                <Card type="gear" title="About My Computer" desc="I use Arch Linux 64 Bit on my computer with using Openbox window manager." />
                                <Card type="mal" title="My Anime list" desc="I'm not a weeb. I'm not a weeb. I'm not a weeb. I'm not a we- " url="https://myanimelist.net/profile/b3rkay" />
                                <Card type="quote" title="Random Quote " />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
