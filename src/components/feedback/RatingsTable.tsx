import * as React from 'react';
import { Button, Table, Container, Row, Col } from 'reactstrap';
import APIURL from '../../helpers/environment';


const RatingsTable = (props) => {


    const deleteRating = (ratings) => {
        fetch(`${APIURL}/ratings/delete/${ratings.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then(() => props.fetchRatings())
    }
    const ratingsMapper = () => {
        return props.ratings.map((ratings, index) => {
            return (
            <tr key={index}>
            <th scope="row">{ratings.id}</th>
            <td>{ratings.ratingOfDessert}</td>
            <td>{ratings.feedback}</td>
            <td>
        
                {/* <Button color='warning' onClick={() => {
                    console.log(recipe)
                    props.setUpdatedRecipe(recipe)
                    props.handleUpdateOpen()
                }}>Update</Button> */}
                <Button color='danger' onClick={() => {deleteRating(ratings)}} >Delete</Button>
            </td>
            </tr>
            )
        })
    }
    
    return (
        <div>
               <h3>Ratings History</h3>
            <hr />
            <Container>
                <Row>
                    <Col sm='12'>

            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th style={{padding:'15px',fontFamily:'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif' }}>RatingOfDessert</th>
                        <th style={{padding:'15px',fontFamily:'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif' }}>Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {ratingsMapper()}
                </tbody>
            </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RatingsTable;
