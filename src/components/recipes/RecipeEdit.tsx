import * as React from 'react';
import { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';


interface RecipeEditProps {
    update: any;
    recipe: any;
}
 
interface RecipeEditState {
    nameOfDessert: string;
    recipe: string;
    directions: string;
    timeToBake: string;
    servings: number;
    photo: string;
    id: number
}
 
class RecipeEdit extends React.Component<RecipeEditProps, RecipeEditState> {
    constructor(props: RecipeEditProps) {
        super(props);
        this.state = { 
    nameOfDessert:'',
    recipe:'',
    directions:'',
    timeToBake:'',
    servings:0,
    photo:'',
    id: 0
          };
    }

    componentWillUnmount() {
        this.setState({
            id: this.props.recipe.id,
            nameOfDessert: this.props.recipe.nameOfDessert,
            recipe: this.props.recipe.recipe,
            directions: this.props.recipe.directions,
            timeToBake: this.props.recipe.timeToBake,
            servings: this.props.recipe.servings,
            photo: this.props.recipe.photo,


        })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name] : event.target.value } as unknown as RecipeEditState)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }


    render() { 
        return ( 
            <div>
                <Modal isOpen={true} > //1
                <ModalHeader >Edit Your Recipe</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleSubmit} >
                        <FormGroup>
                            <Label for="nameOfDessert">Name Of Dessert</Label>
                            <Input id="nameOfDessert" type="text" name="nameOfDessert" value={this.state.nameOfDessert} //2
                            placeholder="enter result" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="recipe">Type</Label>
                            <Input id="recipe" name="recipe" type="text" value={this.state.recipe} onChange={this.handleChange} placeholder="Type" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="directions">Notes</Label>
                            <Input id="directions" type="text" name="directions" value={this.state.directions} placeholder="enter directions" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="timeToBake">Type</Label>
                            <Input id="timeToBake" name="timeToBake" type="text" value={this.state.timeToBake} onChange={this.handleChange} placeholder="Type" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="servings">Type</Label>
                            <Input id="servings" name="servings" type="text" value={this.state.servings} onChange={this.handleChange} placeholder="Number" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="phot">Type</Label>
                            <Input id="url" name="photo" type='url' value={this.state.photo} onChange={this.handleChange} placeholder="Type" />
                        </FormGroup>
                        <Button type="submit" color="primary"> Submit </Button>
                    </Form>
                </ModalBody>
            </Modal>
            </div>
         );
    }
}
 
export default RecipeEdit;