import React from 'react';

const Skill = ({ alleSkillsProps }) => {

    const SkillList = alleSkillsProps.map(
        n =>
            <figure className="SkillFigure" key={n.id}><a href={n.LinkLogo}>
                <div className=" SkillImg "><div className="midText"><p className="textP">More Info</p></div>
                    <img className="SkillLogo" src={n.produkterimg} alt="" />
                </div></a>
            </figure>
    );


    return (
        <div className="alleSkillsene">
            {SkillList}
        </div>
    )
}

export default Skill;