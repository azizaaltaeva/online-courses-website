import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss'

const Footer = () => {
  return (
    <section className='footer'>
      <div className="box-container">

        <div className="box">
          <h3>about us</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, illum?</p>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <Link to="/">Home</Link>
          <Link to="/course">Course</Link>
          <Link to="/price">Price</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="box">
          <h3>follow us</h3>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">linkedin</a>
        </div>

        <div className="box">
          <h3>contact us</h3>
          <a href="#"><i class="fas fa-phone"></i> +996 555 111 222</a>
          <a href="#"><i class="fas fa-phone"></i> +996 777 111 222</a>
          <a href="#"><i class="fas fa-envelope"></i> onlinecourses@gmail.com</a>
          <a href="#"><i class="fas fa-map-marker-alt"></i> Bishkek, Kyrgyzstan</a>
        </div>

      </div>
    </section>
  )
}

export default Footer