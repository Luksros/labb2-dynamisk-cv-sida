import 'json-loader';
import id from "./cv.json";
import React from 'react';

// function createHtml(htmlType, value){
//     const section = Object.assign(document.createElement(`${htmlType}`), { id: `id`, 
//             innerHTML: `${value}`}); 
//             document.body.appendChild(section);
//         }


// function printCv() {
//     (fetch("cv.json")
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(element => {
//                 createHtml("h2", element.category)
//                 createHtml("br", "")
    
//                 element.content.forEach(element => {
//                     createHtml("h3", element.name)
//                     createHtml("h3", element.type)
//                     createHtml("h4", element.time)
//                     createHtml("p", element.description)  
//                     createHtml("br", "")
//         });
//         });                    
//     }));
//   };



const cvScript = ()=>{
    return(<>
        <div>
            <h2>{id[0].category}</h2>
            <br/>
            <h3>{id[0].content[0].name}</h3>
            <h3>{id[0].content[0].type}</h3>
            <h4>{id[0].content[0].time}</h4>
            <p>{id[0].content[0].description}</p>
            <br/>
            <h3>{id[0].content[1].name}</h3>
            <h3>{id[0].content[1].type}</h3>
            <h4>{id[0].content[1].time}</h4>
            <p>{id[0].content[1].description}</p>
            <br/>
            <h3>{id[0].content[2].name}</h3>
            <h3>{id[0].content[2].type}</h3>
            <h4>{id[0].content[2].time}</h4>
            <p>{id[0].content[2].description}</p>
            <br/>
            <h3>{id[0].content[3].name}</h3>
            <h3>{id[0].content[3].type}</h3>
            <h4>{id[0].content[3].time}</h4>
            <p>{id[0].content[3].description}</p>
            <br/>
            <h2>{id[1].category}</h2>
            <br/>
            <h3>{id[1].content[0].name}</h3>
            <h3>{id[1].content[0].type}</h3>
            <h4>{id[1].content[0].time}</h4>
            <p>{id[1].content[0].description}</p>
            <br/>
            <h3>{id[1].content[1].name}</h3>
            <h3>{id[1].content[1].type}</h3>
            <h4>{id[1].content[1].time}</h4>
            <p>{id[1].content[1].description}</p>
            <br/>
       </div>
    </>       
    )
}

export default cvScript;