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
                    <Link to = "/aboutme">Om Mig</Link>
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
                <img src="https://previews.dropbox.com/p/thumb/ABnuHz54ji5sS3HeULPF6nIfY7g5Kx8jVrgPi3R0GiZRQDLZExx33NHawMRCKRe5QgAxPuKyElhO0hOHcjToVI8FWPAEmyZspTfowLTuNCeE9FvyBRvORGp4stlAC2JD-t6JiGIiEGguerujsJn1AEEWPTpSmLlAtkIGi7K6GjcvI56lLy6mXv9m4sJswPW0tVm_0EtOW1wHDSWWsa8zIOyQsfH4k8ve7HQ8UztXrwDA_eRezfboTMHvY0-mR2KporwV8QaUlrDK77wmANA2HY-i03aWUbd9XGkioj9KFkQk6nBPsJ8crZvMJLwhWCnNyuhKwS3I0JnqcjFjU6rkq5RErnJzi7xVPsEXCFll2KfjLSqZ71YBwaExC13bmdE5Jd8/p.jpeg" alt="Porträttfoto av Lukas Rose"/>
            </div>      
        </div>
        <br/>
    </body>
    </div>
    )
}

export default Cv;