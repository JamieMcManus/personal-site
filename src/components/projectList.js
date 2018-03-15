import React from 'react'


export default ({data,filterText,selectedProject})=> {
    
    const projectList =data.filter(project =>{
        //remove non filter names 
        const arr = project.techList.toLocaleString().toLowerCase().split(','); 
        console.log(arr)
         if ((project.title.toLowerCase().indexOf(filterText.toLowerCase()) >=0 ) || (arr.indexOf(filterText.toLowerCase()) >=0 ) ) {
             return project;
         }
         else
            console.log("none found")
            return null
        // add check to tech list for filterText || project.techList.toLowerCase().includes(filterText.toLowerCase()) >=0  ??
        //return ((project.title.toLowerCase().indexOf(filterText.toLowerCase()) >=0 ) )
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




