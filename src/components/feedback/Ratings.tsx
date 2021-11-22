import * as React from 'react';
import { Component } from 'react';
import { Container, Row, Col , Form, FormGroup, ModalFooter} from 'react-bootstrap'
import { Modal, ModalHeader, ModalBody, Button, Label, Input } from 'reactstrap'
import { FaStar } from 'react-icons/fa';

interface RatingsProps {
    sessionToken: any,
    fetchRatings:() => void;
}
 
interface RatingsState {
    ratingOfDessert: number;
    feedback: string;
    recipeId:any;
    userId: any;
  
    modal: boolean
}
 
class Ratings extends Component<RatingsProps, RatingsState> {
    constructor(props: RatingsProps) {
        super(props);
        this.state = { ratingOfDessert: 0, feedback: '', recipeId: 0, userId: 0, 
    modal: false};
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/ratings/create', {
            method: 'POST',
            body: JSON.stringify({ratings: {ratingOfDessert: this.state.ratingOfDessert, feedback: this.state.feedback, recipeId: this.state.recipeId}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
        .then((res) => res.json())
        .then((ratingData) => {
           this.toggle()
           this.props.fetchRatings()
            })
        
    }



    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value} as unknown as RatingsState)
    }

    toggle = () => this.setState({modal: !this.state.modal})
    render() { 
        
       

        return (
            <div>
            <Button color="secondary"  style={{borderRadius: '25px'}} onClick={this.toggle}>Update</Button>
             <Modal isOpen={this.state.modal} toggle={this.toggle} >
               <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
               <ModalBody>
                 <Form onSubmit={this.handleSubmit} >
                               <FormGroup>
                                   <Label for="ratingOfDessert">Name Of Dessert</Label>
                                   <Input id="ratingOfDessert" type="text" name="ratingOfDessert" defaultValue={this.state.ratingOfDessert} //2
                                   placeholder="enter number 1-5" onChange={(e) => this.handleChange(e)} />
                               </FormGroup>
                               <FormGroup>
                                   <Label for="feedback">Type</Label>
                                   <Input id="feedback" name="feedback" type="text" value={this.state.feedback} onChange={this.handleChange} placeholder="Input feedback" />
                               </FormGroup>
                                                          
                               <Button type="submit" color="primary"> Submit </Button>
                           </Form>
               </ModalBody>
               <ModalFooter>
                 <Button color="danger" onClick={this.toggle}>Close</Button>{' '}
                
               </ModalFooter>
             </Modal>
                  
                   </div>
          );
    }
}
 
export default Ratings;