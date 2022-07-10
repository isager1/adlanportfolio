import '../src/components/css/Header.css'
import React from 'react';
import { FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import Mycv from './Mycv';



const Header = () => {

    const handleScrollAbout = () => {
        window.scroll({
            top: document.body.offsetHeight,
            down: 1,
            behavior: 'smooth',
        });
    }

    const handleScrollWorks = () => {
        window.scroll({
            top: document.body.offsetHeight,
            down: 2,
            behavior: 'smooth',
        });
    }

    const handleScrollContact = () => {
        window.scroll({
            top: document.body.offsetHeight,
            down: 2,
            behavior: 'smooth',
        });
    }

    return (
        <div>
            <div className="headerContainer">
                <div className="iconsBlock">
                    <h1> WEBACADEMIE <span>BY EPITECH</span>  </h1>
                    <h2> Recherche un contrat en alternance </h2>

                    <div className="myInfo">
                            <a href="https://www.linkedin.com/in/adlan-isaev-1097a6227/"
                                target='_blank'
                                className='linkDin' >
                                <FaLinkedin />
                            </a>

                            <a href="https://github.com/isager1"
                                target='_blank'
                                className='gitHub'>
                                <FaGithub />
                            </a>
                            <Mycv />
                        </div>
                        <p>CV</p>
                    <div className="btns">
                        <button className='btn btn-compet' onClick={handleScrollAbout}>
                            <span> ABOUT ME </span> </button>
                        <button className='btn btn-projet' onClick={handleScrollWorks}>
                            <span > MY WORKS </span> </button>
                        <button className='btn btn-projet' onClick={handleScrollContact}>
                            <span> CONTACT ME </span>
                        </button>
                    </div>

                </div>
                <div className="allInfo" >
                    <div className="infoBlock" >
                        <h1 className="bonjBienv" > Bonjour et Bienvenue </h1>
                        <h3>Je m 'appelle</h3>
                        <h1>ADLAN ISAEV</h1>
                        <h3>Je suis un</h3>
                        <h2>DEVELOPPEUR FULL - STACK </h2>
                        <h4 > < FaMapMarkerAlt /> Strasbourg, France </h4>
                    </div>
                    <img src="./myphoto.jpg" alt="myphoto" />
                </div>
            </div>
        </div>
    );
}


export default Header;