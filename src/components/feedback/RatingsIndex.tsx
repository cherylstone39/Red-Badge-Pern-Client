import * as React from 'react';
import { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Ratings from '../feedback/Ratings';
import RatingsTable from './RatingsTable';
import APIURL from '../../helpers/environment';



interface RatingsIndexProps {
    sessionToken: any;
}
 
interface RatingsIndexState {
    ratingOfDessert: number;
    feedback: string;
}
 
class RatingsIndex extends React.Component<RatingsIndexProps, RatingsIndexState> {
    constructor(props: RatingsIndexProps) {
        super(props);
        this.state = { ratingOfDessert: 0, feedback: '' };
    }

    fetchRatings = () => {
        fetch(`${APIURL}/ratings/get`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
                // 'Authorization': this.props.sessionToken;
            })
        })
        .then((res) => res.json())
        // console.log(response)
        .then((recipeData) => {
            return this.setState({ratingOfDessert: recipeData})
        })
    }

    componentDidMount() {
        this.fetchRatings();
    }


    render() { 
        return ( 
            <div>
                <Container>
                    <Row>
                        <Col md='6'>
                        <Ratings sessionToken={this.props.sessionToken} fetchRatings={this.fetchRatings}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <RatingsTable sessionToken={this.props.sessionToken} fetchRatings={this.fetchRatings} />
                        </Col>
                    </Row>
                    </Container>

            </div>
         );
    }
}
 
export default RatingsIndex;