import { Route, Switch } from 'react-router-dom';
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
        <Route path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout} />
        <Route path='/dashboard' component={Dashboard} />
    </div>
  );
}

export default App;
