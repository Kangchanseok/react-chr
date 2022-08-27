import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
    return (
      <div className="Main">
        <h1>메인 페이지 입니다.</h1>
        <ul>
            <Link to = '/chr2'><button style={{color:'white', background:'black', cursor:'pointer', fontSize:'20px',borderRadius:'5px', padding:'10px 60px', margin:'10px 0px'}}>chr</button></Link>
            <br/>
            <Link to = '/cancer'><button style={{color:'white', background:'black', cursor:'pointer', fontSize:'20px',borderRadius:'5px', padding:'10px 60px', margin:'10px 0px'}}>cancer</button></Link>
        </ul>
          
      </div>
    );
  }
  
  export default Main;