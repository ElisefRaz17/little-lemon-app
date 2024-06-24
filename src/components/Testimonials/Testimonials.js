import React from "react";
import reviews from "./data.js";
import "../../styles/testimonials.css";

function Testimonials() {
  const testimonials = reviews.map((review) => (
    <div key={review.id} className="review">
      <p style={{marginTop:'20px', paddingBottom:'10px'}}>Rating: {review.rating}</p>
      <div className="review-and-pic">
        <p style={{width:'130px', float:'right', textAlign:'left',paddingTop:'10px'}}>{review.name}</p>
        <div style={{width:'50px'}}>
          <img
            src={review.picture}
            key={review.image}
            alt="reviewer"
            className="reviewer-image"
          />
        </div>
      </div>
      <p className="review-text">{review.review}</p>
    </div>
  ));
  return (
    <div className="main-testimonial-container">
      <h2
        style={{
          fontFamily: "MarkaziText-Medium",
          fontSize: "36px",
          textAlign: "center",
          paddingTop: "130px",
          paddingLeft:'50px'
        }}
      >
        Testimonials
      </h2>
      <span className="reviews">{testimonials}</span>
    </div>
  );
}

export default Testimonials;
