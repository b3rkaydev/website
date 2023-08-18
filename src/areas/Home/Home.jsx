    import Typewriter from 'typewriter-effect/dist/core';
    import "./Home.css"
    import { Tooltip } from 'react-tooltip'
    import React, { useState, useEffect } from 'react';
    import About from '../AboutMe/About.jsx';
    import styled from 'styled-components';

    let upperCaseFirstChar=e=>{let r=e.charAt(0).toUpperCase(),t=e.slice(1);return r+t};

    let statusColor = (dark,dcStatus) => {
        let colors = {
            online: dark ? "#0f4928" : "#22a55b",
            idle: dark ? "#8c671c" : "#f1b233",
            dnd: dark ? "#8f2425" : "#f33f42",
            offline: dark ? "#45464d" : "#81848f",
        }
        return colors[dcStatus] || colors.offline
    }

    const PfpStatus = styled.span`
    width: 24px;
    height: 24px;
    border-radius: 1000px;
    background: ${props => statusColor(false, props.dcstatus)};
    display: inline-block;
    position: absolute;
    bottom: 8px;
    left: 108px;
    outline: 6px ${props => statusColor(true, props.dcstatus)} solid;
    transition: 300ms all;
    z-index: 2;

    &:before {
        content: "";
        width: 24px;
        height: 24px;
        border-radius: 1000px;
        background: ${props => statusColor(false, props.dcstatus)};
        display: inline-block;
        position: absolute;
        outline: 6px ${props => statusColor(true, props.dcstatus)} solid;
        animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        transition: 300ms all;
        z-index: 1;
        pointer-events: none;
    }
`;

    export default function Home() {
        const [dcStatus, setDcStatus] = useState("")
        const [playing, setPlaying] = useState("")
        

        let twStrings = [
            "Fullstack Dev.",
            "Linux User",
            "(i use arch btw)",
            "SciADV Fan",
            "PureCSS Enjoyer"
        ]

        useEffect(() => {
            let updateStatus = () => {
                fetch('https://api.lanyard.rest/v1/users/517760741680611349')
                .then(response => response.json())
                .then(data => {
                    setDcStatus(data.data.discord_status)
                    try {
                        setPlaying(data.data.activities[0].name)
                    }
                    catch(err){
                        setPlaying("Nothing")         
                    }
                })
                .catch(err => {
                    console.log("err: ",error)
                });
            }
            setInterval(updateStatus,5000);
            updateStatus();
            new Typewriter('#typewriter', {
                strings: twStrings,
                autoStart: true,
                loop: true,
                delay:100
            });
        })
    
        return (
            <main id="area" className='home'>
                <Tooltip id="xtooltip" style={{background:"#000",color:statusColor(false,dcStatus)}} />
                <span id="pfp">
                    <img style={{outlineColor:statusColor(false,dcStatus)}} src="/pfp.png" alt="pfp" />
                    <PfpStatus dcstatus={dcStatus} data-tooltip-id="xtooltip" data-tooltip-content={playing=="Nothing" || playing=="Custom Status" ? upperCaseFirstChar(dcStatus) : "Playing "+playing} />
                </span>
                <div>
                    <h1>B3rkay</h1>
                    <h3 id="typewriter">Fullstack Developer</h3>
                    <div id="links">
                        <a href="https://github.com/b3rkaydev" target="_blank">
                            <img src="/icons/git.svg" />
                        </a>
                        <a href="https://www.youtube.com/@b3rkay" target="_blank">
                            <img src="/icons/youtube.svg"/>
                        </a>
                        <a href="https://steamcommunity.com/id/b3rkaydev" target="_blank">
                            <img src="/icons/steam.svg" />
                        </a>
                    </div>
                </div>
                <button><div><img src="/icons/sd.svg" alt="scroll down" /><span></span></div></button>
            </main>
        )
    }