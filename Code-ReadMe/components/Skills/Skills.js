import React, { useState } from 'react';
import Skill from './Skill';
import './Skills.css';

function Skills() {

    const [Skillsne] = useState([

        { produkterimg: './Img/react-1.svg', LinkLogo: 'https://reactjs.org/', id: 1 },

        { produkterimg: './Img/javascript.svg', LinkLogo: 'https://www.javascript.com/', id: 2 },

        { produkterimg: './Img/adobe-xd.svg', LinkLogo: 'https://www.adobe.com/dk/creativecloud/business/enterprise/xd.html', id: 3 },

        { produkterimg: './Img/download.png', LinkLogo: 'https://da.wikipedia.org/wiki/HTML', id: 4 },

        { produkterimg: './Img/download1.png', LinkLogo: 'https://da.wikipedia.org/wiki/CSS', id: 5 },

        { produkterimg: './Img/b781dfa4e85083fbc1ac135b22b5bde7.jpg', LinkLogo: 'https://www.adobe.com/dk/products/photoshop.html', id: 6 },

        { produkterimg: './Img/office_ny.jpg', LinkLogo: 'https://www.office.com/', id: 7 },

    ]);

    return (
        <div className="wrapperProdukter">
            <div className="SkillBGC container">
                <h2 id="MySKills">My Skills</h2>
                <div className="skillContainer">
                    <Skill alleSkillsProps={Skillsne} />
                </div>
            </div>
        </div>
    )
}

export default Skills;