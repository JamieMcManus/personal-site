import React from 'react'


export default ({array})=> {
    console.log("arr",array)
    const TechList = array.map((tech,i) => {
                    console.log(array[i])
                    return (
                     <li> {tech} </li>
                    )
                  })
            
    

return (
    
    <ul>
        {TechList}
      </ul>
);   
}