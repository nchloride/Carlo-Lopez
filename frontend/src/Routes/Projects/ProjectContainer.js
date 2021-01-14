import React,{useState} from 'react'
import {motion} from "framer-motion";
const ProjectContainer = ({name,description,link,repo, delay,picture,isDeveloped}) => {
    delay = delay * .10;
    const [isHovered,setIsHovered] = useState(false);
    const toggleHover =() =>setIsHovered(prevData=>!prevData);
    return (
        <motion.div layout className="project" initial={{scale:0}} transition={{delay}} onMouseEnter={toggleHover} onMouseLeave={toggleHover} animate={{scale:1}}>
            {picture && <img src={picture} alt={name}></img>}
            <motion.div className="project__details" animate={{opacity:isHovered?1:0}}>
                <h1>{name}</h1>
                <p>{description}</p>
                {link && <a href={link} rel="noreferrer" target="_blank">Link</a>}
                {repo && <a href={repo} rel="noreferrer" target="_blank">Github repo</a>}
                {!isDeveloped && <h1 className="status">Currently working on</h1>}
            </motion.div>
        </motion.div>
    )
}

export default ProjectContainer
