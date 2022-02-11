import React from 'react';
import './contact.scss';

const Contact = () => {
  return (
    <section>
      <h1 className="heading">contact us</h1>
      <div className="contact">
        <div className="image">
          <img src="https://www.bloombraineducation.com/assets/images/contact_image_ddd.png" alt="" />
        </div>

        <form action="">
          <div className="inputBox">
            <input type="text" placeholder='name' />
            <input type="email" placeholder='email' />
          </div>
          <input type="text" placeholder='subject' className='box' />
          <textarea placeholder='message' name="" id="" cols="30" rows="10"></textarea>
          <input value='send' type="submit" className='btn' />
        </form>
      </div>
    </section>
  )
}

export default Contact