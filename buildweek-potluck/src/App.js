import { Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Logout from './Components/Logout';
import EventPage from './Components/EventPage';
import CreatePotluck from './Components/CreatePotluck';
import Event from './Components/Event';
import mockData from './mockData';
import './App.css';
import { useState } from 'react';



function App(props) {
	const [events, setEvents] = useState(mockData);

	return (
		<div className='App'>
			<Header />
			<Route exact path='/' component={Home} />
			<Route exact path='/home' component={Home} />
			<Route exact path='/login' component={Login} />
			<Route exact path='/logout' component={Logout} />
			<Route exact path='/event-page'>
				<EventPage {...props} events={events} />
			</Route>
			<Route exact path='/event/:id' component={Event} />
			<Route exact path='/create-potluck' component={CreatePotluck} />
		</div>
	);
}

export default App;
