import React from 'react'

const NavigationButton = ({setNavOpen}) => {
    const toggleNav = ()=> setNavOpen(prevData=>!prevData)
    return (
        <button className="navigation__button" onClick={toggleNav}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </button>
    )
}

export default NavigationButton
