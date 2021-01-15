import React from 'react';
import "./home.css";
import {motion} from "framer-motion";
import HomeIntroduction from './HomeIntroduction';
import HomeTimeLine from './HomeTimeLine';
const Home = () => {
    return (
        <motion.div className="home" >
            <HomeIntroduction/>
            <HomeTimeLine/>
        </motion.div>
    )
}

export default Home
