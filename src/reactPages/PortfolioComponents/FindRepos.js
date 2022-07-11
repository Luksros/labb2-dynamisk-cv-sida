import React, {useState} from 'react';
import axios from 'axios';
import Results from './Results';


const FindRepos = () => {
    const [repos, setRepos] = useState([]);

    const handleClick = async () => {
        try{
            const result = await axios('https://api.github.com/users/luksros/repos');

            setRepos(result);
        }catch(err){
            console.log(err)
        }
    }

    React.useEffect(() => {
        handleClick();
    })

    return  <div>    
                <Results repos={repos}/>                 
            </div>
}

export default FindRepos;