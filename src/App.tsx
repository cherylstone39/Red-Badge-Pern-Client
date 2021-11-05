import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Component } from 'react';
import Nav from './home/nav.component';
import { BrowserRouter} from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Home from './components/Auth/Auth';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';


class App extends Component  {




  render() {
  return (
    
    <div className="App">
      <BrowserRouter>
        
         <Nav />

        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />

        </Switch>
    
    </BrowserRouter>
        </div>
  );
}
}


export default App;
