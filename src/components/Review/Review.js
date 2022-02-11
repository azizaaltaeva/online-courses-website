import React from 'react';
import './review.scss';

const Review = () => {
  return (
    <section>
      <h1 className='heading'>student's review</h1>
      <div className="review">

        <div className="box">
          <div className="student">
            <div className="student-info">
              <img src="https://blog.coursify.me/wp-content/uploads/2021/01/creating-online-courses-coursifyme.jpg" alt="" />
              <div className="info">
                <h3>John Smith</h3>
                <span>student</span>
              </div>
            </div>
            <i className="fas fa-quote-right"></i>
          </div>
          <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, soluta veniam aliquam suscipit eveniet dolorem sed laborum omnis accusantium odit.</p>
        </div>

        <div className="box">
          <div className="student">
            <div className="student-info">
              <img src="https://www.interviewbit.com/blog/wp-content/uploads/2021/06/Front-End-Developer-Skills-1.jpg" alt="" />
              <div className="info">
                <h3>Alex Karev</h3>
                <span>student</span>
              </div>
            </div>
            <i className="fas fa-quote-right"></i>
          </div>
          <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, soluta veniam aliquam suscipit eveniet dolorem sed laborum omnis accusantium odit.</p>
        </div>

        <div className="box">
          <div className="student">
            <div className="student-info">
              <img src="https://cdn1.bgu4u.co.il/wp-content/uploads/2020/09/16151701/5131.jpg" alt="" />
              <div className="info">
                <h3>Ann White</h3>
                <span>student</span>
              </div>
            </div>
            <i className="fas fa-quote-right"></i>
          </div>
          <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, soluta veniam aliquam suscipit eveniet dolorem sed laborum omnis accusantium odit.</p>
        </div>

        <div className="box">
          <div className="student">
            <div className="student-info">
              <img src="https://www.eleapsoftware.com/wp-content/uploads/2020/04/effective-virtual-trainings.jpg" alt="" />
              <div className="info">
                <h3>Liam</h3>
                <span>student</span>
              </div>
            </div>
            <i className="fas fa-quote-right"></i>
          </div>
          <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, soluta veniam aliquam suscipit eveniet dolorem sed laborum omnis accusantium odit.</p>
        </div>

        <div className="box">
          <div className="student">
            <div className="student-info">
              <img src="https://icsblog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2021/04/28105920/ICS-Blog-28th-April-1.jpg" alt="" />
              <div className="info">
                <h3>Kate Black</h3>
                <span>student</span>
              </div>
            </div>
            <i className="fas fa-quote-right"></i>
          </div>
          <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, soluta veniam aliquam suscipit eveniet dolorem sed laborum omnis accusantium odit.</p>
        </div>

        <div className="box">
          <div className="student">
            <div className="student-info">
              <img src="https://www.teachers.ab.ca/SiteCollectionImages/Publications/ATA%20News/54-11/iStock-1164543414%20(L).jpg" alt="" />
              <div className="info">
                <h3>John Snow</h3>
                <span>student</span>
              </div>
            </div>
            <i className="fas fa-quote-right"></i>
          </div>
          <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, soluta veniam aliquam suscipit eveniet dolorem sed laborum omnis accusantium odit.</p>
        </div>

      </div>
    </section>
  )
}

export default Review;