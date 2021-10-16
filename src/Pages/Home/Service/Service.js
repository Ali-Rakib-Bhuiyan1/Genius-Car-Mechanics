import React from 'react';
import './Service.css'
 

const Service = ({service}) => {
    const {name,price,description,img} = service;
    return (
        <div className ="service">
            <h3>{name}</h3>
            <img src={img} alt="" />
            <h4>price:{price}</h4>
            <p className ="px-3">{description}</p>
        </div>
    );
};

export default Service; 