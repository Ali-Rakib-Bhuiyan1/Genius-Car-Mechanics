import React from 'react';


const Expart = ({expart}) => {
    const {name, img, expertize} = expart;
    return (
        <div className ="col-lg-4  col-sm-6 col-12">
           <img className ="img-fluid" src={img} alt="" />
           <h3>name:{name}</h3>
           <h3 className ="text-danger">expart:{expertize}</h3>
    

        </div>
    );
};

export default Expart;