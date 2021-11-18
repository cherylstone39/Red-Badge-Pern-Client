import * as React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Auth from '../auth/Auth';
import RecipeIndex from '../recipes/RecipeIndex';
import Home from './Home';
import Sweets from '../site/Recipes';
import RatingsIndex from '../feedback/RatingsIndex';

import { 
    Container,
    Nav,
    Navbar,
    Button,
    NavbarBrand, 
    NavbarToggler,
    Collapse,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

interface SugarShackNavProps {
    // updateToken: any;
    clearToken:any;
    sessionToken:any;
    // protectedViews: any;
    
}
 
interface SugarShackNavState {
    isOpen: boolean;
    
    
}
 
class SugarShackNav extends Component<SugarShackNavProps, SugarShackNavState> {
    constructor(props: SugarShackNavProps) {
        super(props);
        this.state = { isOpen: false};
    }

    

    toggle = () => {
        this.setState({isOpen: true});
    }

    render() { 
        return (
            <div>
                <Container className='container'>
                    <Router>
            <Navbar className='navbar navbar-expand navbar-light fixed-top'>
            <NavbarBrand href="/" className="mr-auto" style={{color: 'rgb(0,0,0)'}}>Sugar Shack Recipes</NavbarBrand>
            <NavbarToggler onClick={this.toggle} className="mr-2" /> 
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Categories
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <a href='/home'>Home</a>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to='/recipes'>Sweets</Link>
                            </DropdownItem>  
                            <DropdownItem>
                                <Link to='/ratings'>RateDessert</Link>
                            </DropdownItem>                               
                        </DropdownMenu>
                    </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Account
                    </DropdownToggle>
                    <DropdownMenu right>
                    <DropdownItem>
                            <Link to='/auth'>Account Home</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <a href='/register'>Register</a>
                        </DropdownItem>
                        <DropdownItem>
                            <a href='/login'>Log In</a>
                        </DropdownItem>
                        <DropdownItem>
                            <Button onClick={this.props.clearToken}>Logout</Button> 
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                </Nav>
                </Collapse>
         </Navbar>
   

                      
 
        
           

         <Switch> 
            <Route exact path='/'><Home /></Route>
            <Route path='/ratings'><RatingsIndex sessionToken={this.props.sessionToken} /></Route>
            {/* <Route path='/'><{protectviews()}/></Route> */}
            {/* <Route path='/login'><Login updateToken={this.props.updateToken} /></Route> 
            <Route path='/register'><Register updateToken={this.props.updateToken} /></Route>  */}
            <Route path='/recipes'><RecipeIndex sessionToken={this.props.sessionToken}/></Route>           
        </Switch>
        </Router> 
        </Container>
        </div>
        );
    }
}
 
export default SugarShackNav;