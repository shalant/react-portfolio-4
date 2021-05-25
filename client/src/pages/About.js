import React from 'react';
import '../App.css';
import { SiMysql, SiRedux, SiMongodb, SiJest, SiMicrosoftword, SiMicrosoftexcel, SiMaterialUi } from 'react-icons/si';
import { IconContext } from "react-icons";

function About() {
    return (
        <div className='about'>
            <h1>Peace in the Middle East</h1>
            <div className='fontawesome-icons'>
                <i class="fab fa-html5 fa-3x"></i>
                <i class="fab fa-css3-alt fa-3x"></i>
                <i class="fab fa-js-square fa-3x"></i>
                <i class="fab fa-react fa-3x"></i>
                <i class="fab fa-node fa-3x"></i>
                <i class="fas fa-database fa-3x"></i>
                <i class="fab fa-npm fa-3x"></i>
                <i class="fab fa-bootstrap fa-3x"></i>
                <i class="fas fa-passport fa-3x"></i>
            </div>
            <IconContext.Provider value={{ className: "global-class-name" }}>
                <SiRedux />
                <SiMysql />
                <SiMongodb />
                <SiJest />
                <SiMicrosoftword />
                <SiMicrosoftexcel />
                <SiMaterialUi />
            </IconContext.Provider>
        </div>
    )
}

export default About
