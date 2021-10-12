
import axios from "axios"
import ReactStars from "react-rating-stars-component";
import React,{useState, useEffect} from "react"
import { fetchReviews } from "../../redux/reviews/actions"
import { connect } from 'react-redux'
import './Reviews.css';
        
const ReviewsList  = ({ productId, fetchReviews, reviewState}) => {
  const onChangeFunc = (new_rating) => {
    console.log(new_rating)
}
useEffect( () => {
   fetchReviews(productId) 
},[])

return (
         <div>
          {reviewState.map(r => { 
              return (
            <div>
             <div className="stars-email">
            <span className="email-container">{r.user.email}</span>  
            </div>
            <p className="review-description">{r.description}</p>

                <ReactStars
                  onChange={onChangeFunc}
                  value={r.rating}
                  edit={false}
                  size={28}
                  activeColor="orange"
                />

            </div>  
              ) 
            })}
        </div>
        )
}
const mapStateToProps = (state) => {
        return {
          reviewState: state.reviews.reviews
        };
      };




export default connect(mapStateToProps, {  fetchReviews })(ReviewsList);
