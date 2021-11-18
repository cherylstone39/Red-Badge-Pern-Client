import * as React from 'react';
import { Component } from 'react';
import { Container, Row, Col , ModalTitle, ModalFooter} from 'react-bootstrap'
import { Modal, ModalHeader, ModalBody, Button, } from 'reactstrap'
import { FaStar } from 'react-icons/fa';

interface RatingsProps {
    sessionToken: any
}
 
interface RatingsState {
    ratingOfDessert: number;
    feedback: string;
    recipeId: number;
    userId: number;
    currentValue: number;
    hoverValue: number;
    show: boolean;
}
 
class Ratings extends React.Component<RatingsProps, RatingsState> {
    constructor(props: RatingsProps) {
        super(props);
        this.state = { ratingOfDessert: 0, feedback: '', recipeId: 0, userId: 0 , currentValue: 0, hoverValue: 0, show: false};
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/ratings/create', {
            method: 'POST',
            body: JSON.stringify({ratingOfDessert: this.state.ratingOfDessert, feedback: this.state.feedback, recipeId: this.state.recipeId, userId: this.state.userId}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
        .then((res) => res.json())
        .then((ratingData) => {
            this.setState({
                ratingOfDessert: 0,
                feedback: '',
            })
        })
    }

     handleClick = value =>{
        this.setState({currentValue: value })
    }

    handleMouseOver = value => {
        this.setState({hoverValue: value})
    }

    handleMouseLeave = () => {
        this.setState({hoverValue: undefined})
    }

     colors={
        orange : '#ffba5a',
        grey : '#a9a9a9'
    }

    handleClose = () => {
        this.setState({ show : false})
    }

    handleShow = () => {
        this.setState({ show : true })
    }


    render() { 
        
        const stars = Array(5).fill(0);
       

        return (
            <div>
                 {/* <Button variant="primary" onClick={this.handleShow}>
        Launch static backdrop modal
      </Button> */}
                 <Modal show={this.state.show}
                     onHide={this.handleClose}
                        backdrop="static"
                         keyboard={false} >
                <ModalHeader closeButton>
                <ModalTitle>Rate Recipe</ModalTitle>
                </ModalHeader>
                <Container style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <ModalBody>
                    <Row>
                        <Col lg='4' md='6' sm='12'>
                            {stars.map((_, index) => {
                                return(
                                    <FaStar 
                                    key={index}
                                    size={24}
                                    style={{
                                        marginRight: 10, cursor: 'pointer'
                                    }}
                                    color={(this.state.hoverValue || this.state.currentValue) > index ? this.colors.orange : this.colors.grey}
                                    onClick={() => this.handleClick(index + 1)} 
                                    onMouseOver={() => this.handleMouseOver(index + 1)}
                                    onMouseLeave={this.handleMouseLeave} />
                                )
                            })}
                            <div>
                                <input type='text' style={{border: '1px solid #a9a9a9', width: '300px', borderRadius: 5}} placeholder='feedback' />

                            </div>

                        </Col>
                    </Row>
                </ModalBody>
                            <ModalFooter>
                                <button onSubmit={this.handleSubmit} style={{border: '1px solid #a9a9a9', width: '300px', borderRadius: 5}} >Submit</button>
                                <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                            </ModalFooter>
                </Container>
                </Modal>
            </div>
          );
    }
}
 
export default Ratings;