import React from 'react';
import "./home.css";
import {motion} from "framer-motion";
import HomeIntroduction from './Introduction';
const Home = () => {
    return (
        <motion.div className="home" >
            <HomeIntroduction/>
        </motion.div>
    )
}

export default Home
