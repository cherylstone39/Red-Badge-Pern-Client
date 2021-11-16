import * as React from 'react';
import { Component } from 'react';
import { Container, Row, Col, } from 'reactstrap';
import RecipeCreate from './RecipeCreate';
import RecipeEdit from './RecipeEdit';
import RecipeTable from './RecipeTable';



interface RecipeIndexProps {
    sessionToken: any;
    // protectedViews: any;
}
 
interface RecipeIndexState {
    recipes: [];
    updateActive:boolean;
    recipeToUpdate: {};
}
 
class RecipeIndex extends React.Component<RecipeIndexProps, RecipeIndexState> {
    constructor(props: RecipeIndexProps) {
        super(props);
        this.state = {recipes: [], updateActive: false, recipeToUpdate: {}};
    }

    recipeUpdate = () => {
        fetch('http://localhost:3000/recipe/update/:id', {
            method: 'PUT',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
        .then((res) => {
            this.setState({ updateActive: false })
            this.fetchRecipes();
        })
    }
    
    setUpdatedRecipe = (event, recipe) => {
        this.setState({recipeToUpdate: recipe , updateActive: true})
    }

    fetchRecipes = () => {
        fetch('http://localhost:3000/recipe/get', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
        .then ((res) => res.json())
        .then((recipeData) => {
            console.log(recipeData)
            return this.setState({recipes: recipeData})
        })
    }

    componentDidMount() {
        this.fetchRecipes()
    }

    render() { 
        return (  
            <Container>
                <Row>
                    <Col md='4'>
                        <RecipeCreate sessionToken={this.props.sessionToken}/>
                        </Col> 
                        <Col md='8'>
                            <RecipeTable recipes={this.state.recipes}/>
                        </Col>                           
                </Row>
                <Col md='12'>
                    {this.state.updateActive ? <RecipeEdit update={this.recipeUpdate} recipe={this.state.recipeToUpdate} /> : <div></div>}
                </Col>
            </Container>
        );
    }
}
 
export default RecipeIndex;