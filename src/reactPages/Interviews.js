import React from 'react';
import './style.css'
import {Link} from "react-router-dom";

function Interviews(){
    return(
        <div>
        <head>  
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href = "/Css/style.css"/>
        <meta charset = "UTF-8"/>
        <title>Intervjuer</title>
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
            INTERVJUER
        </h1>

        <div className='interviewsText'>
            <h2>
                In The DAW - Tudiskava 
            </h2>
            <ul className = "portList">
                <li>Intervju i två delar, där jag och två andra producenter visar hur vi producerade låten Tudiskava</li>
            </ul>
        </div>
        
            <div className="mainCent">  
                <div className="ytContainer">
                    <iframe width="1024" height="576" src="https://www.youtube.com/embed/b1DzsuDuejw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>             
            </div>     
        <br/>  
            <div className="mainCent">
                <div className="ytContainer">
                    <iframe width="1024" height="576" src="https://www.youtube.com/embed/MPzPHoBKyw4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div> 
            <br/><br/><br/>
        <div className = "interviewsText">
            <h2>
                Behind the DAW
            </h2>
            <ul className = "portList">
                <li>En intervju med mig och Vorso, där vi snackar en del om musikproduktion och allt omkring det</li>
            </ul>   
        </div>    
        
        <div className="mainCent">

            <iframe width="35%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/396522252&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" title="behindTheDaw"></iframe>

        </div>
        <br/><br/><br/>      
    </body>
    </div>
    )
}

export default Interviews;