import '../src/components/css/MyWorks.css'
import React from 'react';


const MyWorks = () => {

    return (
        <div>
            <div className="worksCont">
                <h1>MY WORKS</h1>
                <div className="worksCard">
                    <div className="card">
                        <a href="https://github.com/EpitechWebAcademiePromo2023/W-WEB-090-STG-1-1-spotify-zacharie1.doghmi" target='_blank'><img src="spotify.png" alt="spot" /></a>
                        <div className="cardInfo">
                            <h2>Spotify</h2>
                            <p>Création d’un lecteur multimédia online</p>
                            <p>Lors de ce projet j'ai utilisee et maîtrisee les outils suivants: <br /> <br />
                                • Javascript/React <br />
                                • Les APIs <br />
                                • Le JSON</p> <br />
                        </div>
                    </div>
                    <div className="card">
                        <a href="https://github.com/EpitechWebAcademiePromo2023/W-PHP-501-STG-1-1-mymeetic-adlan.isaev" target='_blank'><img src="meetic.png" alt="meet" /></a>
                        <div className="cardInfo">
                            <h2>my_meetic</h2>
                            <p>Projet web orienté ajax, jquery, et PHP orienté objet</p>
                            <p>• HTML5/CSS <br />
                                • JQuery <br />
                                • Ajax <br />
                                • PHP <br />
                                • Programmation orienté objet <br />
                                • Validation des données côté front puis côté back</p>
                        </div>
                    </div>
                    <div className="card">
                        <a href="https://github.com/EpitechWebAcademiePromo2023/W-JSC-501-STG-1-1-puissance4-adlan.isaev" target='_blank'><img src="puissance.png" alt="puis" /></a>
                        <div className="cardInfo">
                            <h2>Puissance 4</h2>
                            <p>Création d’un jeu interactif</p>
                            <p>• Javascript (ES6) <br />
                                • Algorithmie <br />
                                • Implémentation d’un jeu</p> <br />
                        </div>

                    </div>
                    <div className="card">
                    <a href="https://github.com/EpitechWebAcademiePromo2023/W-JSC-501-STG-1-1-battleship-ambre.barah" target='_blank'><img src="battleship.png" alt="batt" /></a>
                        <div className="cardInfo">
                            <h2>My_Battleship</h2>
                            <p>Création d’un jeu interactif <br /> <br />
                                •JavaScript <br />
                                •HTML <br />
                                •CSS</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}


export default MyWorks;