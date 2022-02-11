import React from 'react';
import './price.scss';

const Price = () => {
  return (
    <section>
    <h1 className="heading">select the plan</h1>
    <div className="price">

      <div className="box">
        <h3>basic</h3>
        <div className="amount">$20</div>
        <ul>
          <li>certificates</li>
          <li>full courses</li>
          <li>full modules</li>
          <li>live projects</li>
          <li>24 / 7 supports</li>
        </ul>
        <a href="#" className='btn'>select plan</a>
      </div>

      <div className="box">
        <h3>standart</h3>
        <div className="amount"> <span>$50</span> </div>
        <ul>
          <li>certificates</li>
          <li>full courses</li>
          <li>full modules</li>
          <li>live projects</li>
          <li>24 / 7 supports</li>
        </ul>
        <a href="#" className='btn'>select plan</a>
      </div>

      <div className="box">
        <h3>premium</h3>
        <div className="amount"> <span>$90</span> </div>
        <ul>
          <li>certificates</li>
          <li>full courses</li>
          <li>full modules</li>
          <li>live projects</li>
          <li>24 / 7 supports</li>
        </ul>
        <a href="#" className='btn'>select plan</a>
      </div>

    </div>
    </section>
  )
}

export default Price