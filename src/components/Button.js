import React from 'react';
import "./Button.css";

const Button = ({className, value, onClick}) => {
   return ( 
      <div className={className}  onClick={onClick}>
         {value}
      </div>
   );
};

export default Button;