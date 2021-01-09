import React from 'react';
import {motion} from "framer-motion";
import css from "../../Components/Icon/css-3.svg";
import html from "../../Components/Icon/html5.svg";
import js from "../../Components/Icon/javascript.svg";
import nodeJs from "../../Components/Icon/nodejs.svg";
import react from "../../Components/Icon/react.svg";
import mysql from "../../Components/Icon/mysql.svg";
import mongodb from "../../Components/Icon/mongodb-ar21.svg";
import csharp from "../../Components/Icon/hashtag.svg";
import Icon  from "./Icon.js";
const AboutInformation = ({toggleOpen}) => {
    const icons = [css,html,js,nodeJs,react,mysql,mongodb,csharp]
    const variants={
        shrink:{scale:0},
        grow:{scale:1}
    }
    return (
        <motion.div className="about__information"  layout initial={{opacity:0}} transition={{delay:.5, ease:'easeIn'}} animate={{opacity:1}} onClick={toggleOpen}>
            <motion.p className="introduction" variants={variants} initial="shrink" transition={{delay:1}} animate="grow" >A computer science graduate from STI college with and also an aspiring Software Developer</motion.p>
            <motion.div className="skills">
                <motion.h2>Skills</motion.h2>
                <motion.div className="skills__logo">
                   {icons.map((icon,id)=>(<Icon key={id} icon={icon} delay={id}/>))}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default AboutInformation
