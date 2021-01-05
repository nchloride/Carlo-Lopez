import React from 'react';
import {motion} from "framer-motion";
const Home = () => {
    return (
        <motion.div initial={{x:-100}} animate={{x:0}} exit={{x:100}}>
            <h1>Home</h1>
        </motion.div>
    )
}

export default Home
