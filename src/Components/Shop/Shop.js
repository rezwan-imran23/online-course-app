import React from 'react';
import fakeData from '../../fakeData/course';
import { useState } from 'react';
import Tutorial from '../tutorial/Tutorial';
import './Shop.css';



const Shop = () => {
    
    const courseClass = fakeData;
    const [course, setCourse] = useState(courseClass);
    const [cart, setCarte] = useState([]);

   const handleAddCourse = (course) => {
       console.log('added',course);
       const newCart = [...cart,course]
       setCarte(newCart);
   }


    return (

   
 
        <div className="tutorial-container">

            <div className="tutorial">

  
            {
               course.map(tutorial => <Tutorial handleAddCourse={handleAddCourse} tutorial = {tutorial}></Tutorial>)
            }

            </div>
            <div className="cart-container">

            <h2>Selected Course : {cart.length }</h2>
            <button  className={'btn btn-warning'} >BUY NOW</button>

            </div>
           
           
         </div>
    );
};

export default Shop;
    
 
    



    


