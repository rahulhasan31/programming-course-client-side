import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const FaqPage = () => {
    return (
        <div className='container mb-5'>
           <div className="row row-cols-1 row-cols-md-2 g-4 ">
  <div className="col shadow-lg p-3 mb-5 bg-body rounded">
    <div className="card">
  
      <div className="card-body">
        <h5 className="card-title">What this site about?</h5>
        <p className="card-text">Programming Future is E-learning platform.Where you can
Learn Essential topics about web-development such as javasscript, HTML, CSS, React JS etc wiht an affortable price.</p>
      </div>
    </div>
  </div>

  <div className="col shadow-lg p-3 mb-5 bg-body rounded">
    <div className="card ">
      
      <div className="card-body">
        <h5 className="card-title">How many videos are there?</h5>
        <p className="card-text">Well each course have 400+ videos, 12 Assignments, Weekly Zoom confernce,24/7 support session,
Qualityful Videos etc.</p>
      </div>
    </div>
  </div>
  <div className="col shadow-lg p-3 mb-5 bg-body rounded">
    <div className="card">
    
      <div className="card-body">
        <h5 className="card-title">Why Programming Future ?</h5>
        <p className="card-text">We are in this particular stage since 2015. We have came a long way. Our support session is top notch.
Even if you complete the course on time and do good then we have a special team they will hepip you to find your dream job</p>
      </div>
    </div>
  </div>
  <div className="col shadow-lg p-3 mb-5 bg-body rounded">
    <div className="card">
      
      <div className="card-body">
        <h5 className="card-title">Why learn Web-development?</h5>
        <p className="card-text">
Nowa-days web development is a really good skill to have. A expirienced web developer earns so much money that you can think.Also you can use it for your personal work.Such as you have a buisness you can build a website for your business</p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default FaqPage;