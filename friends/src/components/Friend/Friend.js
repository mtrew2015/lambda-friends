import React, { useEffect, useState } from 'react';
import './Friend.scss';
import axios from 'axios';

function Friend(props) {
	const { friend } = props;
	const [ current, setCurrent ] = useState([]);
	useEffect(() => {
		let id = props.match.params.id;
		props.friends.find((friend) => {
			setCurrent(friend.id === id);
		});
	}, []);

	return <div />;
}

export default Friend;
