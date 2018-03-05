import React from 'react'


export default ({data,filterText,selectedProject})=> {
    
    const projectList =data.filter(project =>{
        //remove non filter names 
        return project.title.toLowerCase().indexOf(filterText.toLowerCase()) >=0
    })
    .map(project =>{
    
    return (
      <li key={project.id} 
          className={project.tag}
          onClick={() =>selectedProject(project.id)}
          >
          {project.title}</li>
    )
} )

return (
    
  <div className="App">
    
    <ul>
        {projectList}
      </ul>

  </div>
);   
}




