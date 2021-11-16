import * as React from 'react';
import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa';

interface RatingsProps {
    
}
 
interface RatingsState {
    ratingOfDessert: number;
    feedback: string;
    recipeId: number;
    userId: number;
    currentValue: number;
    hoverValue: number;
}
 
class Ratings extends React.Component<RatingsProps, RatingsState> {
    constructor(props: RatingsProps) {
        super(props);
        this.state = { ratingOfDessert: 0, feedback: '', recipeId: 0, userId: 0 , currentValue: 0, hoverValue: 0};
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
        orange : '#FFBASA',
        grey : '#a9a9a9'
    }


    render() { 
        
        const stars = Array(5).fill(0);

        return (
            <div>
                <Container style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
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
                                <button style={{border: '1px solid #a9a9a9', width: '300px', borderRadius: 5}} >Submit</button>

                                
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
          );
    }
}
 
export default Ratings;