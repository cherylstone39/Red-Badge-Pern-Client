import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import RecipeIndex from '../recipes/RecipeIndex';
import RatingsIndex from '../feedback/RatingsIndex';

const Sweets = (props) => {
    return (
        <Container>
            <Row>
                <Col md='4'>

        <div className="card" style={{width: "18rem"}}>
  <img src="https://images.unsplash.com/photo-1547778057-e5188f83549c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHdoaXRlJTIwY2FrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="photo" />
  <div className="card-body">
    <h5 className="card-title">White Cake</h5>
    <p className="card-text">Striped Frosting stacked cake with sprinkles</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Recipe</li>
    <li className="list-group-item">Directions</li>
    <li className="list-group-item">Time to bake</li>
    <li className="list-group-item">Servings</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Rate Dessert</a>
    <a href="#" className="card-link">Baker-Post a Recipe</a>
  </div>
</div>
                </Col>
                <Col md='4'>
                <div className="card" style={{width: "18rem"}}>
  <img src="https://images.unsplash.com/photo-1595930142063-797ef7b5bbbe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHdoaXRlJTIwY2FrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="photo" />
  <div className="card-body">
    <h5 className="card-title">Chocolate Cake</h5>
    <p className="card-text">Carmel frosting with gingerbread decorations</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Recipe</li>
    <li className="list-group-item">Directions</li>
    <li className="list-group-item">Time to bake</li>
    <li className="list-group-item">Servings</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Rate Dessert</a>
    <a href="#" className="card-link">Baker-Post a Recipe</a>
  </div>
</div>
                </Col>
                <Col md='4'>
                <div className="card" style={{width: "18rem"}}>
  <img src="https://images.unsplash.com/photo-1595272568891-123402d0fb3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjBjYWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="photo" />
  <div className="card-body">
    <h5 className="card-title">Blackberries on White Cake</h5>
    <p className="card-text">Fruit on top of white buttercream frosting</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Recipe</li>
    <li className="list-group-item">Directions</li>
    <li className="list-group-item">Time to bake</li>
    <li className="list-group-item">Servings</li>
  </ul>
  <div className="card-body">
    <Link to="/ratings" className="rate">Rate Dessert</Link>
    <Link to="/recipes" className="create">Baker-Post a Recipe</Link> 
  </div>
</div>
                </Col>
            </Row>




            <Switch>
              <Route path='/ratings'><RatingsIndex sessionToken={props.sessionToken} /></Route>
              <Route path='/recipes'><RecipeIndex sessionToken={props.sessionToken} /></Route>
            </Switch>
        </Container>
    )
}

export default Sweets;