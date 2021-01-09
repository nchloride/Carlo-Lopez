import React from 'react';
import "./home.css"
import {motion} from "framer-motion";
const Home = () => {
    return (
        <motion.div initial={{x:-100}} animate={{x:0}} className="home">
            <h1>Home</h1>
        </motion.div>
    )
}

export default Home
