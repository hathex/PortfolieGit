import React, { useState } from 'react';
import './Project.css';
import Project from './Project';

function Projecter() {

    const [Projecterne] = useState([

        { ProjectsImg: './Img/RunIncImg.jpg', Link: 'https://hathex.github.io/Scubaliving/', ProjectHeader: 'RunInc', id: 1 },

        { ProjectsImg: './Img/moellerupgods.jpg', Link: 'https://hathex.github.io/Scubaliving/', ProjectHeader: 'moellerupgods', id: 2 },

        { ProjectsImg: './Img/scubalivingImg.jpg', Link: 'https://hathex.github.io/Scubaliving/', ProjectHeader: 'scubaliving', id: 3 },

    ]);

    return (
        <div className="wrapperProdukter">
            <div className="ProjectBGC container">
                <h2 id="MyProjects">My Projects</h2>
                <div className="ProjectContainer">
                    <Project alleProjecterProps={Projecterne} />
                </div>
            </div>
        </div>
    )
}

export default Projecter;