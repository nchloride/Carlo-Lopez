import React, { useEffect, useState } from 'react';
import useSound from "use-sound";
import {motion} from "framer-motion";
import chorvald from "../../Components/pictures/ChorVald.jpg";
import soundClip from "./donttouchme.m4a";



const HomeIntroduction = () => {
    const [play] = useSound(soundClip);
    const [tagLineCount,setTagLineCount] = useState(0);
    const tagLines = ["Hello there! You are in my website","that means","I already knew your personal information","Just kidding I'm dumb","GOOD DAY SIR!"];
    useEffect(() => {
        const updateText = () => {
            setTagLineCount(prevCount => prevCount !==tagLines.length-1 ? prevCount +1: tagLines.length-1);
        }
        const updateTagline = setInterval(updateText, 3000);
        return () => clearInterval(updateTagline);
    }, [])
    return (
        <section className="home__intro">
            <motion.img onMouseEnter={play} animate={{rotate:360}} src={chorvald}></motion.img>
            <div>
                <h1 className="tagline">{tagLines[tagLineCount]}</h1>
            </div>
        </section>
    )
}

export default HomeIntroduction
