import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
    return (
      <div className="Main">
        <h1 style={{margin:'10% 10% 10% 40%', alignItems:'center',justifyContent:'center',fontSize:'50px'}}>Select View</h1>
        <ul style={{margin:'10% 0% 40% 35%'}}>
            <Link to = '/chr2'><button style={{ alignItems:'center',justifyContent:'center',color:'white', background:'black', cursor:'pointer', fontSize:'20px',borderRadius:'5px', padding:'10px 60px', margin:'10px 0px'}}>Chromosome Position View</button></Link>
            <br/>
            <Link to = '/cancer'><button style={{ alignItems:'center',justifyContent:'center',color:'white', background:'black', cursor:'pointer', fontSize:'20px',borderRadius:'5px', padding:'10px 60px', margin:'10px 0px'}}>Cancer Screen View</button></Link>
        </ul>
          
      </div>
    );
  }
  
  export default Main;