import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';
import Preference from './components/Preference';
import useToken from './useToken';

function App() {
  const { token, setToken } = useToken();
  
  if(!token) {
    return <Signin setToken={setToken}/>
  }

  return (
    <div className="wrapper">
      <h1>Admin</h1>
      <Dashboard token={token} />    
      <BrowserRouter>
        <Switch>
          <Route path="/preferences">
            <Preference />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;