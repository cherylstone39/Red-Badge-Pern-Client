import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import * as React from 'react';
import { Component } from 'react';
import Nav from './components/home/NavComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth from './components/auth/Auth';
import RecipeIndex from './components/recipes/RecipeIndex';
import Footer from './components/home/Footer';
import Home from './components/home/Home';



interface AppProps {
  
}
 
interface AppState {
  sessionToken: any;
  role: string;
}
 
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { sessionToken: '' , role: ''};
  }
  componentDidMount() {
    if (localStorage.getItem('token')){
      this.setState({ sessionToken: localStorage.getItem("token")});
      
    }
    if(localStorage.getItem('admin')){
      this.setState({role: localStorage.getItem("admin")})
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


//   logout = () => {
//   this.setState({ 
//     sessionToken: '', 
//   });
//   localStorage.clear();
// }


protectedViews = () => {
  return(this.state.sessionToken === localStorage.getItem('token') ? <RecipeIndex sessionToken={this.state.sessionToken} />
  : <Auth updateToken={this.updateToken} />)
 
}

  render() { 
    return ( 
      <div className="App">
          
        <Nav  clearToken={this.clearToken} />
        <Router>
          {this.protectedViews()}
        {/* <Home /> */}
       </Router>
       <Footer />
        {/* <Auth updateToken={this.updateToken} /> */}
        
       
        </div>
     );
  }
}


export default App;
