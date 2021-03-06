import * as React from 'react';
import { Component } from 'react';
import { Button, Container, Row, Col, Form, Label, Input } from 'reactstrap';
import APIURL from '../../helpers/environment';


interface RecipeCreateProps {
    sessionToken:any;
    fetchRecipes:() => void;
    
}
 
interface RecipeCreateState {
    nameOfDessert: string;
    recipe: string;
    directions: string;
    timeToBake: string;
    servings: number;
    photo: string;
    userId: number;
}
 
class RecipeCreate extends Component<RecipeCreateProps, RecipeCreateState> {
    constructor(props: RecipeCreateProps) {
        super(props);
        this.state = { 
            nameOfDessert: '',
            recipe : '',
            directions: '',
            timeToBake: '',
            servings: 0,
            photo: '',
            userId: 0
         };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name] : event.target.value } as unknown as RecipeCreateState)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // if(userId.role === 'admin') {

            fetch(`${APIURL}/recipe/create` , {
                method: 'POST',
                body: JSON.stringify({recipe: {nameOfDessert: this.state.nameOfDessert, recipe:this.state.recipe, directions: this.state.directions, timeToBake: this.state.timeToBake, servings: this.state.servings, photo: this.state.photo, userId: this.state.userId}}),
                headers: new Headers ({
                    'Content-Type': 'application/json',
                    'Authorization': this.props.sessionToken
    
                })
            })
            .then((res) => res.json())
            .then((recipeData) => {
                this.setState({
                    nameOfDessert: '',
                    recipe: '',
                    directions: '',
                    timeToBake: '',
                    servings: 1,
                    photo: '',
                                    
                })
                this.props.fetchRecipes()
            })
        // }
    }

    render() { 
        return (  
            <div>
                <h1>Create A Recipe</h1>
                <hr />
                <Container>
                 <Form onSubmit={this.handleSubmit}>
                    {/* <img src={''}  value={this.state.photo} alt='' onChange={this.handleChange}/> */}
                    <Row>
                        <Col md='4'>
                            <Label htmlFor='nameOfDessert'/>
                            <Input name='nameOfDessert' placeHolder='Name Of Dessert' value={this.state.nameOfDessert} onChange={this.handleChange} />
                            <Label htmlFor='recipe'/>
                            <Input name='recipe' placeHolder='Recipe' value={this.state.recipe} onChange={this.handleChange} />
                            <Label htmlFor='directions'/>
                            <Input name='directions' placeHolder='Directions' value={this.state.directions} onChange={this.handleChange} />
                            <Label htmlFor='timeToBake'/>
                            <Input name='timeToBake' placeHolder='Bake Time' value={this.state.timeToBake} onChange={this.handleChange} />
                            <Label htmlFor='servings'/>
                            <Input name='servings' placeHolder='Num of Servings' value={this.state.servings} onChange={this.handleChange} />
                            <Label Img src='photo'/>
                            <Input name='photo' placeHolder='Image of Dessert' value={this.state.photo} onChange={this.handleChange} />
                            <br/>
                        <Button type='submit'>Click to Submit</Button>
                        </Col>
                    </Row>
                    </Form>
                </Container>
            </div>
        );
    }
}
 
export default RecipeCreate;