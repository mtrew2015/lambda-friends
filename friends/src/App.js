import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import axios from 'axios';
import LandingPage from './components/LandingPage/LandingPage';
import Friend from './components/Friend/Friend';

function App() {
	const [ friends, setFriends ] = useState([]);
	useEffect(() => {
		axios
			.get('https://lambda-friends.now.sh/api/friends')
			.then((res) => setFriends(res.data))
			.catch((err) => console.log(err));
	}, []);
	return (
		<React.Fragment>
            <Route  exact path='/' render={() => <LandingPage friends={friends} /> }/>
            <Route exact path='/friends/:id' render={(props) => <Friend {...props} friends={friends}/>}/>
		</React.Fragment>
	);
}

export default App;
