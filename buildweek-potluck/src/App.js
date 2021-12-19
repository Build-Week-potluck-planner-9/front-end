import { Route, Router } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login'
import Logout from './Components/Logout'
import Dashboard from './Components/Dashboard'
import './App.css';

function App() {
  return (
      <div className="App">
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/dashboard' component={Dashboard} />
      </div>
  );
}

export default App;
