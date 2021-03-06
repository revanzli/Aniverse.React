import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';

function About(props) {
 const {
  firstname,
  lastname,
  username,
  address,
  birthday,
  gender,
  bio,
  id,
  profilPicture,
  coverPicture,
 } = props.user.data;

 return (
  <>
   <div className="">
    <div className="intro about-user ">
     <h3 className="intro-title">About</h3>
     <div className="row about-row">
      <ul>
       <li>
        <FontAwesomeIcon icon="fa-solid fa-user-pen" className="icon" />
        <span className="about-items">{bio}</span>
       </li>
       <li>
        <FontAwesomeIcon icon="fa-solid fa-location-dot" className="icon" />
        <span className="about-items">{address}</span>
       </li>
       <li>
        <FontAwesomeIcon icon="fa-solid fa-cake-candles" className="icon" />
        <span className="about-items">
         <Moment format="MMM DD YYYY">{Date.parse(birthday)}</Moment>
        </span>
       </li>
       <li>
        <FontAwesomeIcon icon="fa-solid fa-venus-double" className="icon" />
        <span className="about-items">{gender}</span>
       </li>
       <li>
        <FontAwesomeIcon icon="fa-solid fa-user" className="icon" />
        <span className="about-items">{username}</span>
       </li>
      </ul>
     </div>
    </div>
   </div>
  </>
 );
}
const mapStateToProps = (state) => {
 return {
  user: state.userReducer,
  userFriend: state.friendReducer,
  userAuth: state.userLoginReducer,
 };
};

export default connect(mapStateToProps)(About);
