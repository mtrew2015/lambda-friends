import React from 'react'
import './LandingPage.scss';
import Friend from '../Friend/Friend';
import {Link} from 'react-router-dom';

 function LandingPage(props) {
     const {friends} = props;
    return (
        <div>
            {friends.map((el) => {
              return <Link to={`/friends/${el.id}`}><Friend key={el.id} friend={el}/></Link>
            })}
        </div>
    )
}

export default LandingPage