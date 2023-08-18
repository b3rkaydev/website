import "./Card.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { useState, useEffect } from "react";

export default function Card({ title, desc, url, type="git" }) {
    const [quote, setQuote] = useState({ content: "", author: "" });
    let newQuote  = () => {
        if (type === "quote") {
            fetch("https://api.quotable.io/quotes/random?maxLength=50")
            .then(response => response.json())
            .then(data => {
                setQuote({ content: data[0].content, author: data[0].author });
            })
            .catch(err => {
                console.log(`Error while fetching! -> ${err} // Please send the error report to bit@b3rkay.dev. `);
            });
        }
    };

    useEffect(() => {
        newQuote()
    }, [type])

    let [_desc,setDesc] = useState(desc)
    const copyMail = (mail) => {
        navigator.clipboard.writeText(mail)
        setDesc(`[ Copied to clipboard ]`)
        setTimeout(() => {setDesc(desc)},1000)                
    }
    return (
        <ScrollAnimation animateIn="_in" animateOut="_out" duration={0.4}>
            <a style={type=="mail" || type=="quote" ? {cursor:"pointer"} : {}} onClick={type!="mail" ? type=="quote" ? () => {newQuote()} : null : () => {copyMail(url)}} href={type!="mail" ? url : null} target="_blank" className="card">
                <h4><img src={`/icons/${type}.svg`}/>{title}</h4>
            <p>{
                type==="quote" ? quote.content : 
                type==="mail" ? _desc : desc
            }</p>
                <span>{type!="quote" ? null : `⎯ ${quote.author}`}</span>
            </a>
        </ScrollAnimation>
    )
}