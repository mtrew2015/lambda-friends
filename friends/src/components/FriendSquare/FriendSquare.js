import React from 'react'
import './FriendSquare.scss'

export default function FriendSquare(props) {
    const {friend} = props; 
    return (
        <div className="square">
            <p>{friend.first_name}</p>
            <p>{friend.last_name}</p>
            <p>{friend.city}, {friend.state}, {friend.country}</p>
        </div>
    )
}
