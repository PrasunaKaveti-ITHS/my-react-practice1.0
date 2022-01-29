import "./Button.css";
import React, { useState } from 'react';

const Button = () => {
    const [style, setStyle] = useState("skyblue");
   
    const changeStyle = () => {
        console.log("You have changed style");     
        setStyle("green");
      };
    return (
     
      <div className="App">
          
        <h1>Click the button to chage color</h1>
        <div className={style}>
        <button className="button" onClick={changeStyle}>
          Change color!
        </button>
      </div>
           </div>
         
    );
};

export default Button;