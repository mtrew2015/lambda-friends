import React, { useEffect, useState } from 'react';
import './Friend.scss';
import axios from 'axios';

function Friend(props) {
	const [ current, setCurrent ] = useState([]);
	console.log(current);
	useEffect(
		() => {
			let id = props.match.params.id;
			console.log(id, 'from match params id ');
			let thisFriend = props.friends.find((friend) => {
				console.log(friend);
				return friend.id == id;
			});
			setCurrent(thisFriend);
		},
		[ props.friends ],
	);

	return (
		<div>
			{current && (
				<div>
					<h1>
						{current.first_name}
						{current.last_name}
					</h1>
					<p>
						{current.city}
						{current.state}
						{current.country}
					</p>
					<p>Job Title:{current.job_title}</p>
					<p>{current.tagline}</p>
					<div>
						<h2>About Me:</h2>
						<p>{current.gender}</p>
						<p>Education:{current.education}</p>
					</div>
				</div>
			)}
		</div>
	);
}

export default Friend;
