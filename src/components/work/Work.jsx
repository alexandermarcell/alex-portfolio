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

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const onClickUrl = (url) => {
    return () => openInNewTab(url)
  }  

  return (
    <div className='w-full max-w-screen-2xl flex flex-col items-center py-8 box-border' 
    id='work'>
      <div className='w-full flex flex-col flex-wrap py-2 items-center box-border lg:items-start'>
        <h2 className='w-full flex flex-col items-center font-bold text-5xl box-border'>This is my work</h2>
        <div className='w-full flex flex-wrap flex-col p-2 box-border'>
          <div className='p-1 flex flex-col items-center justify-center md:flex-row md:flex-wrap md:w-full'>
            {projects.map(project => {
              return(
                <div className='w-full h-full m-4 max-h-[550px] p-4 cursor-pointer max-w-sm rounded-2xl box-border md:max-w-xs lg:min-w-[275px] lg:max-w-sm shadow-lg'
                onClick={onClickUrl(project.link)} key={project.id}>
                  <img src={project.image} alt='' 
                  className='w-full h-80 overflow-hidden max-w-sm rounded-md object-cover object-top border-solid border border-slate-300 shadow-sm' />
                  <h2 className='w-full font-semibold text-left text-xl mt-4'>
                    {project.title}</h2>
                  <p className='w-full text-base text-left mt-1'>
                    {project.stack}</p>
                  <p className='w-full text-base text-left mt-1'>
                    {project.synopsis}</p>
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