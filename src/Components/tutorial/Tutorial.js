import React from 'react';
import './Tutorial.css';

const Tutorial = (props) => {
    // console.log(props.tutorial.name);
    // console.log(props);
    const {img,name,tutor,price}=props.tutorial
    return (

        <div className="online-tutorial">

        <div>
                <img src={img} alt=""/>
        </div>
        <div>
          <h4>This is tutorial : {name}</h4>
        
        <p><small>By: {tutor}</small></p>
        <p>{price}</p>

        <button onClick ={()=>props.handleAddCourse(props.course)} className="btn btn-success">Enroll Now</button>
        
        </div>
       

    
        </div>
    );
};

export default Tutorial;