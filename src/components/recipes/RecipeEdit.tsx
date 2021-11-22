
import * as React from 'react';
import { Component } from 'react';
import { Button, Form, FormGroup, Label, ModalFooter, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';


interface RecipeEditProps {
    // update: any;
    fetch: Function,
    recipe: any,
    // recipeToUpdate: any;
    sessionToken: any,
    // updateActive: boolean;
    // fetchRecipes: Function;
    // handleUpdateClosed: () => void
}
 
interface RecipeEditState {
    nameOfDessert: string;
    recipe: any,
    directions: string;
    timeToBake: string;
    servings: number;
    photo: string;
    id: number
    modal: boolean
}
 
class RecipeEdit extends React.Component<RecipeEditProps, RecipeEditState> {
    constructor(props: RecipeEditProps) {
        super(props);
        this.state = { 
            id: this.props.recipe.id,
            nameOfDessert: this.props.recipe.nameOfDessert,
            recipe: this.props.recipe.recipe,
            directions: this.props.recipe.directions,
            timeToBake: this.props.recipe.timeToBake,
            servings: this.props.recipe.servings,
            photo: this.props.recipe.photo,
            modal: false
          };
    }

    recipeUpdate = (e : any) => {
        e.preventDefault();
        // console.log(this.state.recipeToUpdate);
        fetch(
          `http://localhost:3000/recipe/update/${this.props.recipe.id}`,
          {
            method: "PUT",
            body: JSON.stringify({
              recipe: {
                nameOfDessert: this.state.nameOfDessert,
                recipe: this.state.recipe,
                directions: this.state.directions,
                timeToBake: this.state.timeToBake,
                servings: this.state.servings,
                photo: this.state.photo,
                userId: this.state.id,
              },
            }),
            headers: new Headers({
              "Content-Type": "application/json",
              Authorization: this.props.sessionToken,
            }),
          }
        )
          .then((res) => res.json())
          .then((recipeData) => {
           this.toggle()
            this.props.fetch();
          });
      };

    // componentDidMount() {
    //     this.setState({
    //         id: this.props.recipe.id,
    //         nameOfDessert: this.props.recipe.nameOfDessert,
    //         recipe: this.props.recipe.recipe,
    //         directions: this.props.recipe.directions,
    //         timeToBake: this.props.recipe.timeToBake,
    //         servings: this.props.recipe.servings,
    //         photo: this.props.recipe.photo,


    //     })
    // }

    handleChange = (event) => {
        this.setState({ [event.target.name] : event.target.value } as unknown as RecipeEditState)
    }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     this.props.update(event, this.state)
    // }

    toggle = () => this.setState({modal: !this.state.modal})

    render() { 
        console.log(this.props.recipe.id)
        return ( 
            <div>
     <Button color="secondary"  style={{borderRadius: '25px'}} onClick={this.toggle}>Update</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} >
        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.recipeUpdate} >
                        <FormGroup>
                            <Label for="nameOfDessert">Name Of Dessert</Label>
                            <Input id="nameOfDessert" type="text" name="nameOfDessert" defaultValue={this.state.nameOfDessert} //2
                            placeholder="enter result" onChange={(e) => this.handleChange(e)} />
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
        <ModalFooter>
          <Button color="pink" onClick={this.toggle}>Close</Button>{' '}
          <Button color="purple" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
                {/* <Button isOpen={this.toggle}>Update</Button>
                <Modal isOpen={!this.state.modal} >
                <ModalHeader >Edit Your Recipe</ModalHeader>
                <ModalBody> */}
                
                {/* </ModalBody>
            </Modal> */}
            </div>
         );
    }
}
 
export default RecipeEdit;