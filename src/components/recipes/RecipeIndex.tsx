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
    nameOfDessert: string;
    recipe: string;
    directions: string;
    timeToBake: string;
    servings: number;
    photo: string;
    id: number
    recipes: [];
    updateActive:boolean;
    recipeToUpdate: {id: any};
}
 
class RecipeIndex extends React.Component<RecipeIndexProps, RecipeIndexState> {
    constructor(props: RecipeIndexProps) {
        super(props);
        this.state = { nameOfDessert:'',
        recipe:'',
        directions:'',
        timeToBake:'',
        servings:0,
        photo:'',
        id: 0, recipes: [], updateActive: false, recipeToUpdate: {id:0}};
    }

    recipeUpdate = () => {
        console.log(this.state.recipeToUpdate)
        fetch(`http://localhost:3000/recipe/update/${this.state.recipeToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({recipe: {nameOfDessert: this.state.nameOfDessert, recipe:this.state.recipe, directions: this.state.directions, timeToBake: this.state.timeToBake, servings: this.state.servings, photo: this.state.photo, userId: this.state.id}}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
        .then((res) => res.json())
        .then((recipeData)  => {
            this.setState({ updateActive: false })
            this.fetchRecipes();
        })
    }
    
    setUpdatedRecipe = (recipe) => {
        this.setState({recipeToUpdate: recipe})
    }

    handleUpdateOpen = () => {
        this.setState({updateActive: true})
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
                        <RecipeCreate sessionToken={this.props.sessionToken} fetchRecipes={this.fetchRecipes}/>
                        </Col> 
                        <Col md='8'>
                            <RecipeTable recipes={this.state.recipes} setUpdatedRecipe={this.setUpdatedRecipe} handleUpdateOpen={this.handleUpdateOpen} />
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