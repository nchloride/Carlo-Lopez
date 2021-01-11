import React ,{useState}  from 'react'
import {motion,AnimateSharedLayout, AnimatePresence} from "framer-motion";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Me from "../../Components/pictures/me.jpg";
import "./about.css"
import AboutInformation from './AboutInformation';
const About = () => {
    const [isDetailsOpen,setIsDetailsOpen] = useState(false);
    const toggleOpen = () => {
        setIsDetailsOpen(prevData => !prevData);
    }
    return (
        <AnimateSharedLayout>
            <motion.div initial={{opacity:0}} transition={{duration:.2,ease:"easeIn"}} animate={{opacity:1}} className="about">
                <motion.div layout className="about__details">
                    <motion.div layout className="about__profile" onClick={toggleOpen}>
                        <motion.img src={Me} alt="me" className="about__photo" ></motion.img>
                        <motion.h1 >Hi! Im Noel Carlo Lopez</motion.h1>
                        { !isDetailsOpen && <ArrowDownwardIcon className="about__arrow"/>}
                    </motion.div>
                    <AnimatePresence>
                        {isDetailsOpen && <AboutInformation toggleOpen={toggleOpen}/>}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </AnimateSharedLayout>
    )
}

export default About
