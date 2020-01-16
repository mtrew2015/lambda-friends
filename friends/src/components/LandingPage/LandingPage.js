import React from 'react'
import './LandingPage.scss';
import Friend from '../Friend/Friend';
import {Link} from 'react-router-dom';
import FriendSquare from '../FriendSquare/FriendSquare';

 function LandingPage(props) {
     const {friends} = props;
    return (
        <div className="container">
            {friends.map((el) => {
              return <Link to={`/friends/${el.id}`}><FriendSquare friend={el}/></Link>
            })}
        </div>
    )
}

export default LandingPage