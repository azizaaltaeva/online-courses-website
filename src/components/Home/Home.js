import React from 'react';
import './home.scss';

const Home = () => {
  return (
    <section className='home'>
      <div className="image">
        <img src="https://s35691.pcdn.co/wp-content/uploads/2021/08/young-man-with-computer-fills-schedule-calendar-and-complete-business-vector-id1161496973.jpg" alt="" />
      </div>
      <div className="content">
        <h2>Start learning with us</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione fuga at quod quos quia, accusantium et dolorum minima maiores porro?</p>
        <a href="#" className='btn'>get started</a>
      </div>

    </section>
  )
}

export default Home