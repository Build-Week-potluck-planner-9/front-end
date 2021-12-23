import { Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Logout from './Components/Logout';
import EventPage from './Components/EventPage';
import PrivateRoute from './Components/PrivateRoute';
import CreatePotluck from './Components/CreatePotluck';
import './App.css';





function App() {
	return (
		<div className='App'>
			<Header />
			<Route exact path='/' component={Home} />
			<Route exact path='/home' component={Home} />
			<Route exact path='/login' component={Login} />
			
			<Route exact path='/logout' component={Logout} />
			<Route exact path='/event-page' component={EventPage} />
			<Route exact path='/event-page/create-potluck' component={CreatePotluck} />
		</div>
	);
}

export default App;
