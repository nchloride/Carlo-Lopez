import React from 'react';
import {motion} from "framer-motion";
const NavigationButton = ({setNavOpen}) => {
    const toggleNav = ()=> setNavOpen(prevData=>!prevData)
    return (
        <motion.button className="navigation__button"
         drag 
         dragConstraints={{
            top:-50,
            left:-50,
            right:100,
            bottom:100
        }} onClick={toggleNav}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </motion.button>
    )
}

export default NavigationButton
