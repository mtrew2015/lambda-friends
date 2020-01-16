import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import axios from 'axios';

function App() {
	const [ friends, setFriends ] = useState([]);
	useEffect(() => {
		axios
			.get('https://lambda-friends.now.sh/api/friends')
			.then((res) => setFriends(res.data))
			.catch((err) => console.log(err));
	}, []);
	return <div className='App'>Friends</div>;
}

export default App;
