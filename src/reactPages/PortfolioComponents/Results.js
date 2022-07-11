import React from 'react';
import BarLoader from 'react-spinners/BarLoader';

const Results = (props) => {
    const { repos } = props;
    const listRepos = repos.length !== 0 
    ? 
    repos.data.map((item) => <li key={item.id}><a href={item.html_url}><h4 style={{marginLeft: "0"}}>{item.name}</h4></a>{item.description}<br/><br/></li>) 
    :
    <div style = {{marginLeft: "21.5%", paddingTop: "10%"}}><BarLoader color = '#5C5C5C' loading="true" width = '40%' height = '20px'/></div>;
    
    return  <div>
                <h2>Publika Git-repos:</h2>
                {/* <div style = {{marginLeft: "21.5%", paddingTop: "10%"}}><BarLoader color = '#5C5C5C' loading="true" width = '40%' height = '20px'/></div>; */}
                <br/>
                <ul style={{marginLeft: "16.5%"}}>{listRepos}</ul>
            </div>
            
}

export default Results;