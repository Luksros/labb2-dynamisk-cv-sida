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
                <img src="https://previews.dropbox.com/p/thumb/ABl68r37kLMNFeawoDArlN9un0dwSdv9yGsLiVAUbCI9iS0b8c2kFh4-JDGeXgEIIg3iw-KhrzAu7Q2nE0TtV-jQLbU37ybTVBfxreHUa8Ecv3U5qYXfB69yCQp8i0T-lkriTL5_G5fZorhijQPqaUWjA8V0lSO0vL0Sgv7bmfgNaaEjHLV-HGYTcEBWoGo7usyXOMixbY5dnB57zwTtmBrLtkV1t9TxGnDC3jWx1Cfo_9jtUkqhE-O-6Z3-SLb9KeobillemKgHlK8mbV8g385Mhxjo305bu4K6pgeMYl8MmQe2KY0NGGFKkpSV8rIM5p2-LFBjZAn3u9Q6_tkrHQBo4T4Jhs6fQIDBXR1y1uMgglj_WVj779AfVmF7MMi_EAM/p.jpeg" alt="Porträttfoto av Lukas Rose"/>
            </div>      
        </div>
        <br/>
    </body>
    </div>
    )
}

export default Cv;