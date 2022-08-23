import React from 'react';
import './style.css'
import {Link} from "react-router-dom";
import CvScript from  './cvScript';

function Cv(){
    return (
    <div>
        <head>  
        <title>CV</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href = "/Css/style.css"/>
        <meta charset = "UTF-8"/>
    </head>
    <body>
 
        <nav>
            <div className="logo">
                <h4>Lukas Rose</h4>
            </div>
            <ul className="navlinks">
            <li>
                    <Link to = "/">Om Mig</Link>
                </li>
                <li>
                    <Link to = "/cv">CV</Link>
                </li>
                <li>
                    <Link to = "/portfolio">
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to ="/interviews">
                        Intervjuer
                    </Link>
                </li>
                <li>
                    <Link to = "/contact">
                        Kontakt
                    </Link>
                </li>
            </ul>
        </nav>   
        <h1 className="main">
            CV
        </h1>

        <div className="cvBox">
            <CvScript></CvScript>
            <div className = "pictureContainer">   
                <img src="https://previews.dropbox.com/p/thumb/ABoes4wOgAbUp50D7cgAwPv6aSf8xCNk3UBth4XT29C1thytZSRaiZMbUwuEkzwGR9fGL5RQ-r23NJri2y0uOMAyMzV_iDrgydWAEbfuu8po7gRSvc5P5-FBAi0AJVcaRWNfTSAwnUR1zFyM4fVGxrT8zq_825tkX5l-UUWIo6r7RrZVB31mtz7w2SYN2cK1avy2GqCe7K5fVl9nppNlohwCTRtyo-aeqttBx49d8m0Nh5yZQ-4p2H8i3fTpDXMib5Yz7fq56Crw3e3NEcS9XJkyWsXfJpG0Op49Vsj6ve6KEKjfFr8mcG_09KazC1GqvlBk536AVQ_uJhtBuaTnyrlEg9bzRrlZrzOQVyk-8Ug9nehtxONvZg7N4_lRgNPDqk4QuzjRtlgb2KLhkVE4HL4i/p.jpeg" alt="Porträttfoto av Lukas Rose"/>
            </div>      
        </div>
        <br/>
    </body>
    </div>
    )
}

export default Cv;