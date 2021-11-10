import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { Component } from 'react';
import Nav from './components/home/NavComponent';
import { BrowserRouter as Router } from 'react-router-dom';
// import Auth from './components/auth/Auth';



interface AppProps {
  
}
 
interface AppState {
  sessionToken: string;
}
 
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { sessionToken: ''  };
  }
  componentWillMount() {
    const token = localStorage.getItem('token');
    if (token && !this.state.sessionToken) {   
      this.setState({ sessionToken: token });
    }
  }
 updateToken = (newToken: string) => {
  localStorage.setItem('token', newToken);
  this.setState({sessionToken: newToken})
  
}

 clearToken = () => {
  localStorage.clear();
  this.setState({sessionToken: ''})
}

  logout = () => {
  this.setState({ 
    sessionToken: '', 
  });
  localStorage.clear();
}

  render() { 
    return ( 
      <div className="App">
         <Router>    
        <Nav  updateToken={this.updateToken} clearToken={this.clearToken}/>
        </Router>

        {/* <Auth setToken={this.updateToken} /> */}
        
       
        </div>
     );
  }
}


export default App;
