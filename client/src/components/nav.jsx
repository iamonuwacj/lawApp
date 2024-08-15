import React, { useState } from "react";
import logo from '../../src/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'



const Nav = () => {

    const anchors = [
        {
            id: 0,
            name: "Home",
            ids: "home", 
        },
        {
            id: 1,
            name: "About Us",
            ids: "about",
        },
        {
            id: 2,
            name: "Our Clients",
            ids: "clients",
        },
        {
            id: 3,
            name: "Services",
            ids: "service"
        },
    ]

    const [currentTab, setCurrentTab] = useState(0)


    function handleClick(getCurrentIndex){
        setCurrentTab(getCurrentIndex)
    }

    return(
        <div className="nav">
            <div className="nav-brand">
                <img src={logo} alt="" />
                <h3>LAWYA</h3>
            </div>
            <ul className="nav-link">
                {
                    anchors.map((anchor, index) =>
                        <li
                            key={index}
                            onClick={() => handleClick(index)}
                            >
                            <h3><AnchorLink href={`#${anchor.id === index ? anchor.ids : null}`} className={`${currentTab === index && "active"} nav-link-item`}>{anchor.name}</AnchorLink></h3></li>
                    )
                }
            </ul>
            <div className="nav-item">
                <AnchorLink href="#contact" className="nav-btn">Contact Us</AnchorLink>
            </div>
        </div>
    )
}

export default Nav
