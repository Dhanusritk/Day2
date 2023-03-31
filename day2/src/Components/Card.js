import React from 'react'
import img1 from "../Images/Car1.jpg";

import img2 from "../Images/car2.jpg";
import img3 from "../Images/Car3.jpg";
import img4 from "../Images/Car4.jpg";

import "../Components/Card.css"

export default function Card() {
  return (
    <section id='header3'>
    <div className='divmain'>
     <div className='product'>
        <img src={img1} alt="" />
        <h2>Revell Mervedes AMG GT</h2>
        <h2>Price : $102,600</h2>
        <h2>Color: Yellow</h2>
      <a href='' className='btn'>Book Now</a>
     </div>
     <div className='product1'>
        <img src={img2} alt="" />
        <h2>AMG GT R Coupe</h2>
        <h2>Price : $92,500</h2>
        <h2>Color: Green</h2>
    <a href='' className='btn'>Book Now</a>
     </div>
     <div className='product2'>
        <img src={img3} alt="" />
        <h2>Mercedes-Benz GLA</h2>
        <h2>Price : $37,500</h2>
        <h2>Color : Red</h2>
      <a href='' className='btn'>Book Now</a>
     </div>
     <div className='product3'>
        <img src={img4} alt="" />
        <h2>E-Class Sedan</h2>
        <h2>Price : $73,250</h2>
        <h2>Color : Black</h2>
      <a href='' className='btn'>Book Now</a>
     </div>
    </div>



    
    </section>
  )
}
