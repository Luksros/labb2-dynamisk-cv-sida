import React from 'react';
import './style.css'
import {Link} from "react-router-dom";

function Contact(){
    return(
        <div>
            <head>  
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
        <meta charset = "UTF-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0"/>
        <title>Kontakt</title>
    </head>
    <body>
        <nav>
            <div className="logo">
                <h4>Lukas Rose</h4>
            </div>
            <ul className="navlinks">
            <li>
                    <Link to = "/labb2/aboutme">Om Mig</Link>
                </li>
                <li>
                    <Link to = "/labb2/cv">CV</Link>
                </li>
                <li>
                    <Link to = "/labb2/portfolio">
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to ="/labb2/interviews">
                        Intervjuer
                    </Link>
                </li>
                <li>
                    <Link to = "/labb2/contact">
                        Kontakt
                    </Link>
                </li>
            </ul>
        </nav>  
        <h1 className="main">
            Kontakta Mig
        </h1>
        <div className="container">
            <div className="contactBox">   
               <div className="right">
                       <h1 className="contactHeader">Kontaktformulär</h1>
                       <input type="text" className="field" placeholder="Ditt namn"/>
                       <input type="email" className="field" placeholder="Din email"/>
                       <input type="text" className="field" placeholder="Ditt telefonnummer"/>
                       <textarea className="field" placeholder="Meddelande"></textarea>
                       <button className="send">Skicka</button>
               </div>
            </div>          
        </div>           
    </body>
    </div>
    )
}

export default Contact;