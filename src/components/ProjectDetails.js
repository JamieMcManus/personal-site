import React from 'react';


export default ({data,selectedId})=>{
    
    const ProjectDetails  =data.map(Project =>{
        if(Project.id ===selectedId){
        return (
            <div key={Project.id} className="projectDetails">
                <h4>{Project.title}</h4>
                <p>{Project.description}</p>
                <a href={Project.link} >Here</a>
             </div> 
        ) }
        else {
            return null
        }
    }) 

    return (
      <div>
          <p>Project Details</p>
            {ProjectDetails}
        </div>
     
    )

}