import './Work.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Work() {
  const [ projects, setProjects ] = useState([]);

  useEffect(() => {
    async function getProjects(){
      const response = await axios
      .get('https://alex-portfolio-server.herokuapp.com/api/v1/projects/');
      setProjects(response.data)
    };
    getProjects();
  },[]);

  return (
    <div className='work'>
      <div className="work__wrap">
        <h2 className="work__header">Hi. I'm Alexander,</h2> 
        <h2 className='work__header'>A Web Developer.</h2>
        <div className="work__cards">
          <div className="work__cardbody">
            {projects.map((project) => {
              return(
                <div className='work__project' key={project.id}>
                  <a target="_blank" rel='noreferrer' 
                  className='work__link' href={project.link}>
                    <img src={project.image} alt='' className="work__image" />
                    <h2 className="work__projectName">
                      {project.title}</h2>
                    <p className="work__info">
                      {project.stack}</p>
                    <p className="work__info">
                      {project.synopsis}</p>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Work