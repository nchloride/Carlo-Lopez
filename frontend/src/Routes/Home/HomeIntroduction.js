import React, { useEffect, useState } from 'react';
import useSound from "use-sound";
import {motion} from "framer-motion";
import chorvald from "../../Components/pictures/ChorVald.jpg";
import soundClip from "./donttouchme.m4a";



const HomeIntroduction = () => {
    const [play] = useSound(soundClip);

    const tagLines = ["Hello there! You are in my website","that means","I already know your personal information","Just kidding I'm dumb","GOOD DAY SIR!"];

    return (
        <section className="home__intro">
            <motion.img onMouseEnter={play} animate={{rotate:360}} src={chorvald}></motion.img>
            <div className="tagLines">
                {tagLines.map((tagLine,index)=><TagLineContainer tagLine={tagLine} delay={index} key={index}/>)}
            </div>
           
        </section>
    )
}
const TagLineContainer = ({tagLine,delay})=> {
    delay = delay *.50;
    return (
        <motion.div className="tagline" initial={{opacity:0}} transition={{delay,ease:"easeIn"}} animate={{opacity:1}}>
            {tagLine}
        </motion.div>
    )
 }

export default HomeIntroduction
