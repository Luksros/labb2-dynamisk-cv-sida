import React from 'react';
import './style.css'
import {Link} from "react-router-dom";

function AboutMe(){
    React.useEffect(()=> {
        document.body.style.backgroundImage = "url('https://free4kwallpapers.com/uploads/originals/2020/09/11/firewatch-dark-version-wallpaper.jpg')"
    })    
    React.useEffect(() => {
        document.getElementById('easteregg').addEventListener('click', easterEgg)
        function easterEgg() {
            document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp5569141.jpg')"
            document.body.style.backgroundColor = "none";
        }
    })
    React.useEffect(() => {
            let index = 0;
            var arrOfKeys = [];
            document.addEventListener(
              "keyup",
              (event) => {
                if(event.key !== 'undefined' && (event.key === 'c' ||event.key === 'l' || event.key === 'o' || event.key === 'c' || event.key === 'k')){
                  arrOfKeys[index] = event.key  
                  console.log(event.key + index)
                  console.log(arrOfKeys.join(''))
                  index++;
                }
                if(arrOfKeys.join('') === 'clock'){
                  alert('Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?')
                  return null;
                }
              },
              false
            );       
    })
    return (
    <div>
            <head>  
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href = "labb2\src\reactPages\style.css"/>
        <meta charset = "UTF-8"/>
        <title>Om Mig</title>
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
        
        <div id = "about">
        <a id = "easteregg" class="button">Go to Google</a>
            <h1>Om Mig</h1>
            <br/>
            <p>En 27 år gammal musikproducent, som för tillfället även utbildar mig till Systemutvecklare med inriktning mot .NET.</p>
            <p>De senaste 7 åren innan utbildningen, som började 2021, har jag jobbat som säljare på Kjell & Co i Varberg.</p>
            <p>Som säljare har jag både utvecklat en bred produktkunskap inom flera tekniska områden, och en stark social kompetens.</p>
            <p>Jag är absolut en lagspelare, och tar gärna kommandot när det behövs, men trivs även med att följa instruktioner.</p>
        </div>           
        <div className="aboutBox">
            <ul>
                <li>
                    <div className = "aboutPicContainer">              
                        <img src="https://scontent.fbma1-1.fna.fbcdn.net/v/t1.6435-9/78683730_598232014263059_2697187239380647936_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=ml4OcCkAnwsAX-lfQNy&_nc_ht=scontent.fbma1-1.fna&oh=00_AT9DfuJN3l1s3r6xUXcuBD6YObRwV6lozsKiyGFhSlfdAA&oe=62E461AC" alt="Clockvice DJing at Umra Unleashed event, at Dynamo in Eindhoven"/>    
                    </div>
                </li>
            </ul>  
        </div>
        <br/><br/>
    </body>
    </div>
    )
}

export default AboutMe;