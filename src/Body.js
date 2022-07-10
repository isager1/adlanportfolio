import '../src/components/css/Body.css'
import { FaJs, FaPhp, FaReact, FaSass, FaLaravel, FaSymfony, FaDatabase, FaHtml5, FaCss3Alt, FaAd } from 'react-icons/fa';

const Body = () => {



    return (
        <div>
            <div className="aboutCont">
                <div className='schoolCont'>
                    <h1>Formations</h1>
                    <div className='wac'>
                        <h4>Webacademie by Epitech</h4>
                        <h6>Titre professionnel developpeur web (BAC+2)</h6>
                        <div className='years'>
                            <p>2021</p>
                            <p>2023</p>
                        </div>
                        <div className='timeRate'></div>
                    </div>
                    <div className='open'>
                        <h4>Openclassrooms</h4>
                        <h6>Titre professionnel developpeur web (BAC+2)</h6>
                        <div className='years'>
                            <p>2021</p>
                            <p>2021</p>
                        </div>
                        <div className='timeRate'></div>
                    </div>
                    <div className='iesc'>
                        <h4>IESC</h4>
                        <h6>Agent de prevention et de securite (C.Q.P)</h6>
                        <div className='years'>
                            <p>2016</p>
                            <p>2016</p>
                        </div>
                        <div className='timeRate'></div>
                    </div>
                </div>
                <div className="iconsCont">
                    <h1>MY SKILLS</h1>
                    <div className="icons">
                        <div className="langProgram">
                            <h4>LANGAGES DE PROGRAMMATION</h4>
                            <div className='skillScore'>
                                <FaJs className='js dev-btn' />
                                <div className=' js-skill'></div>
                            </div>
                            <div className='skillScore'>
                                <FaPhp className='php dev-btn' />
                                <div className='php-skill'></div>
                            </div>
                            <div className='skillScore'>
                                <FaDatabase className='database dev-btn' />
                                <div className='data-skill'></div>
                            </div>
                            <div className='skillScore'>
                                <FaHtml5 className='html5 dev-btn' />
                                <div className='html-skill'></div>
                            </div>
                            <div className='skillScore'>
                                <FaCss3Alt className='css3 dev-btn' />
                                <div className='css-skill'></div>
                            </div>
                        </div>
                        <div className="fraemworks dev-btn">
                            <h4>FRAEMWORKS-SYSTEMES</h4>
                            <div className='skillScore'>
                                <FaReact className='react dev-btn' />
                                <div className=' react-skill'></div>
                            </div>
                            <div className='skillScore'>
                                <FaSass className='sass dev-btn' />
                                <div className='sass-skill'></div>
                            </div>
                            <div className='skillScore'>
                                <FaLaravel className='laravel dev-btn' />
                                <div className='laravel-skill'></div>
                            </div>
                            <div className='skillScore'>
                                <FaSymfony className='symfony dev-btn' />
                                <div className='symfony-skill'></div>
                            </div>
                            <div className='skillScore'>
                                <FaAd className='ad dev-btn' />
                                <div className='ad-skill'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="myInfo">
                    <h1>About me</h1>
                    <div className="hobbies">
                        <h4>Hobby</h4>
                        <h5>- Brazilian Jiu-Jitsu</h5>
                        <h5>- Football</h5>
                        <h5>- Photoshop</h5>
                    </div>
                    <div className="langues">
                        <h4>Langues</h4>
                        <h5>English - B1</h5>
                        <h5>RUSSIE - BILINGUE</h5>
                        <h5>POLOGNE - BILINGUE</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Body;