import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function UserFriend(props) {
 const { userFriend } = props;
 return (
  <>
   <div className="col-12">
    <div className="intro user-friend">
     <h3 className="intro-title">Friends</h3>
     <div className="row">
      {userFriend.length > 0 ? (
       <>
        {userFriend.map((friend) => (
         <div className="col-12 col-md-6 col-xl-4" key={friend.id}>
          <a href={`/user/${friend.username}`}>
           <div className="friend-card">
            <img
             alt="friend"
             className="friends-profile"
             src={
              friend.profilPicture == null
               ? `../../img/user.png`
               : `${friend.profilPicture}`
             }
            />
            <p className="friend-name">
             {friend.firstname} {friend.lastname}
            </p>
            <button className="btn btn-light">
             <FontAwesomeIcon icon="fa-solid fa-ellipsis" />
            </button>
           </div>
          </a>
         </div>
        ))}
       </>
      ) : (
       <>
        <Link to="/people" className="new-friend-text">
         Find new friends
        </Link>
       </>
      )}
     </div>
    </div>
   </div>
  </>
 );
}

function mapStateToProps(state) {
 return {
  userFriend: state.friendReducer,
 };
}

export default connect(mapStateToProps)(UserFriend);
