import React from 'react';
import './style.css';
import {Link} from "react-router-dom";
import FindRepos from "./PortfolioComponents/FindRepos";


function Portfolio(){
    return(
        <div>
            <head>  
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
                <link rel="stylesheet" href = "/Css/style.css"/>
                <meta charset = "UTF-8"/>
                <title>Portfolio</title>
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
                    Portfolio
                </h1>
                <FindRepos/>
            </body>
        </div>
    )
}

export default Portfolio;