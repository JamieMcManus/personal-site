import React from 'react';

export default ({data,selectedId,selectedProject})=>{

    const ProjectDetails  =data.map(Project =>{
        if(Project.id ===selectedId){
                 console.log(Project.imagePath)// 
                // get the tech tags of the project as li's
                const TechList = Project.techList.map((tech,i) => {
                    console.log(tech,i)// 
                    return (
                    <li key={i}> {tech} </li>
                    )
                })
                return (
                    <div key={Project.id} className="projectDetails">
                         <i class="fa fa-close projectClose" onClick={() =>selectedProject('')} aria-hidden="true"></i>
                        <h3 className="projectTitle">{Project.title}</h3>
                        <div className="projectImage">
                           <img className="projectImage"src={Project.imagePath} alt={Project.title} />
                        </div>
                        <p>{Project.description}</p>
                        <button className="btn button"><a href={Project.link} >Check it out</a></button>
                        
                        <ul className="techTags">
                            {TechList}
                        </ul>
                    </div> 
                ) }
                else {
                    return null
                }
    }) 

    return (
      <div>
          
            {ProjectDetails}
        </div>
     
    )

}