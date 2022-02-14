import React from 'react';
import ReactDOM from 'react-dom';
import {RemoveScrollBar} from 'react-remove-scroll-bar';

    function Pricing(){
        return(
        <div>
        <RemoveScrollBar /> 
            <section id="pricing" class="pricing-bg">
            <h2>A Plan for Every Incubator's Needs</h2>
            <p>Simple and affordable price plans for your incubator.</p>
            <div class="row">
            <div class="col-lg-4 col-md-6 pricing">
                <div class="card">
                <div class="card-header">
                    <h3>Basic</h3>
                </div>
                <div class="card-body">
                    <h2>Rs. X /month</h2>
                    <p>20 Startup profiles</p>
                    <p>10 Mentor profiles</p>
                    <p>Unlimited App Usage</p>
                    <button class="btn btn-outline-dark btn-lg btn-block" type="button">Sign Up</button>
                </div>          
                </div>
      </div>

      <div class="col-lg-4 col-md-6 pricing">
        <div class="card">
          <div class="card-header">
            <h3>Deluxe</h3>
          </div>
          <div class="card-body">
            <h2>Rs. Y /month</h2>
            <p>Unlimited Startup profiles</p>
            <p>30 Mentor profiles</p>
            <p>Unlimited App Usage</p>
            <button class="btn btn-outline-dark btn-lg btn-block" type="button">Sign Up</button>
          </div>          
        </div>
      </div>

      <div class="col-lg-4 pricing">
        <div class="card">
          <div class="card-header">
            <h3>Premium</h3>
          </div>
          <div class="card-body">
            <h2>Rs. Z / month</h2>
            <p>Unlimited Startup profiles</p>
            <p>Unlimited Mentor profiles</p>
            <p>Unlimited App Usage</p>
            <button class="btn btn-outline-dark btn-lg btn-block" type="button">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </section>
            </div>    
    )
}

export default Pricing