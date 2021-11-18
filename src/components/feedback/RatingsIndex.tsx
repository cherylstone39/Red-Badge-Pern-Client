import * as React from 'react';
import { Component } from 'react';
import Ratings from '../feedback/Ratings';



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
        fetch('http:localhost:3000/ratings/get', {
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


    render() { 
        return ( 
            <div>
                <Ratings sessionToken={this.props.sessionToken}/>
            </div>
         );
    }
}
 
export default RatingsIndex;