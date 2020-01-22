import React from 'react';


const Project = ({ alleProjecterProps }) => {

    const ProjectList = alleProjecterProps.map(
        n =>
            <figure className="ProjectFigure" key={n.id}>
                <div className=" Projecterneimg "><img className="Projectlogo" src={n.ProjectsImg} alt="" />
                    <h3 className="LinkHeader"> {n.ProjectHeader} </h3>
                    <a className="projectLink" href={n.Link}>VIEW PROJECT</a>
                </div>
            </figure>
    );


    return (
        <div className="alleProjecter">
            {ProjectList}
        </div>
    )
}

export default Project;