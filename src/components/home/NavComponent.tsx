import * as React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingIndex from '../landing/LandingIndex';
import Login from '../auth/Login';
import Register from '../auth/Register';

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
    updateToken: any;
    clearToken:any;
    
}
 
interface SugarShackNavState {
    isOpen: boolean;
}
 
class SugarShackNav extends React.Component<SugarShackNavProps, SugarShackNavState> {
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
                                <Link to='/recipes'>Recipes</Link>
                            </DropdownItem>                    
                        </DropdownMenu>
                    </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Account
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            <Link to='/register'>Register</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link to='/login'>Log In</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <a href='/' onClick={this.props.clearToken}>Logout</a> 
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                </Nav>
                </Collapse>
         </Navbar>
   

                      
 
        
           

        <Switch>
            <Route exact path='/'><LandingIndex /></Route>
            {/* <Route path='/auth'>< Auth/></Route> */}
            <Route path='/login'><Login updateToken={this.props.updateToken} /></Route> 
            <Route path='/register'><Register updateToken={this.props.updateToken} /></Route> 
            {/* <Route path='/account'><Account sessionToken={props.sessionToken} protectedViews={props.protectedViews} /></Route>             */}
        </Switch>
        </Router>
        </Container>
        </div>
        );
    }
}
 
export default SugarShackNav;