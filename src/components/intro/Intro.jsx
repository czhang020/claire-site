import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            showCursor: true,
            strings: ["computer science","fine arts"],
        })
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="./assets/profile.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>hi there, i'm</h2>
                    <h1>claire zhang</h1>
                    <h3>studying <span ref = {textRef}></span></h3>
                </div>
                <a href="#about">
                    <img src="./assets/blackarrow.png" alt=""/>
                </a>
            </div>
        </div>
    )
}