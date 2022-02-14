import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel';

    function Homepage(){
        return(
        <div >
        
        <section id="title" class="colored">
        <div class="container-first">
        <div class="row" >
        <div class="col-lg-6">
          <h1 class="big-heading">Incubation Management System.</h1>
          <p>The concept of nurturing start-up and early-stage groups at managed workspaces appears straightforward but is complex in structure and execution. We are here to make it easy for you.</p>
        </div>
        <div class="col-lg-6">
          <img src="https://assets.entrepreneur.com/content/3x2/2000/1611080496-Startup.jpg" class="title-img" alt="iphone-mockup" />
        </div>
      </div>
    </div>
    </section>

    <section id="features" class="white"> 
  <div class="container-fluid">   
      <div class="row">
        <div class="col-lg-4 feature-box">
          <i class="fas fa-check-circle fa-4x features-icon"></i>
          <h3>Easy to use.</h3>
          <p class="features-text">So easy to use, incubator and startup friendly.</p>
        </div>
        <div class="col-lg-4 feature-box">
          <i class="fas fa-bullseye fa-4x features-icon"></i>
          <h3>Elite Clientele</h3>
          <p class="features-text">We have all the top incubators in the city.</p>
        </div>
        <div class="col-lg-4 feature-box">
          <i class="fas fa-user-clock fa-4x features-icon"></i>
          <h3>Guaranteed efficiency.</h3>
          <p class="features-text">No more paperwork, just smartwork.</p>
        </div>
      </div>     
      </div>
  </section>

  <section id="testimonials" class="colored">
  <Carousel>
      <Carousel.Item>
      <p class="testimonial-text">They effectively manage and track entrepreneur support programs. The robust system successfully implements, monitors and reports on business incubation and enterprise development programs.</p>
      </Carousel.Item>
      <Carousel.Item>
      <p class="testimonial-text">They managed to smoothly facilitatte workflow management between the stakeholders, extend funding & services to the startups, project management, tracking progress, monitoring and evaluation of performances, and overall life cycle management of the incubation support.</p>
      </Carousel.Item>
    </Carousel>
  </section>

    <section id="cta" class="colored">
    <div class="container-fluid">
    <h3 class="cta-heading">Book a demo with us today!</h3>
   </div>
  </section>

  <footer id="footer" class="white">
    <div class="container-footer">
    <p class="footer-text">© Copyright 2021</p>
    </div>
  </footer>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    </div>
        
    )
}

export default Homepage;
