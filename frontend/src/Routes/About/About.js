import React ,{useState}  from 'react'
import {motion,AnimateSharedLayout, AnimatePresence} from "framer-motion";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Me from "../../Components/pictures/me.jpg";
import "./about.css"
const About = () => {
    const [isOpen,setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(prevData => !prevData);
        console.log(isOpen);
    }
    return (
            <motion.div initial={{scale:0}} transition={{duration:.2,ease:"easeIn"}} animate={{scale:1}}  className="about">
                <AnimateSharedLayout>
                    <motion.div layout className="about__details" >
                        <motion.div layout className="about__profile" onClick={toggleOpen}>
                            <motion.img src={Me} alt="me" className="about__photo"></motion.img>
                            <motion.h1 >Hi! Im Noel Carlo Lopez</motion.h1>
                          { !isOpen && <ArrowDownwardIcon className="about__arrow"/>}
                        </motion.div>
                        <AnimatePresence>
                                {isOpen && <motion.h1 layout initial={{opacity:0}} transition={{delay:.5, ease:'easeIn'}} animate={{opacity:1}} onClick={toggleOpen}>"KONNICHIYAWA"</motion.h1>}
                        </AnimatePresence>
                    </motion.div>
                </AnimateSharedLayout>
            </motion.div>
    )
}

export default About
