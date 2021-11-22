import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import RecipeIndex from '../recipes/RecipeIndex';
import RatingsIndex from '../feedback/RatingsIndex';
import cklog from '../assets/cklog.jpg';

const Sweets = (props) => {
  
    
        return (
          /*this.state.modalopen*/
          <div>
          <Container fluid='sm'>
              <Row>
                  {props.recipes.map((recipe, index) => {

return( <Col md='4' key={index}>

<div className="card" style={{width: "18rem",textAlign: 'center'}}>
<img src={recipe.photo} style={{}} className="card-img-top" alt="photo" />
<div className="card-body" >
<h5 className="card-title">{recipe.nameOfDessert}</h5>
<p className="card-text">Striped Frosting stacked cake with sprinkles</p>
</div>
<ul className="list-group list-group-flush">
<li className="list-group-item">{recipe.recipe}</li>
<li className="list-group-item">{recipe.directions}</li>
<li className="list-group-item">{recipe.timeToBake}</li>
<li className="list-group-item">{recipe.servings}</li>
</ul>
<div className="card-body">
<a href="#" className="card-link">Rate Dessert</a>
<a href="#" className="card-link">Baker-Post a Recipe</a>
</div>
</div>
 </Col>
                   )})}
              </Row>
          </Container>
          </div>
      )
}

export default Sweets;