import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import dessertrecipe from '../assets/dessertrecipe.jpg';


const Home = () => {
    return(
            
        
            
        <Container style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '110vh', width:'50%', paddingTop: '0px'}}>
            <Row>
            <br/>
            <br/>
            <br/>
        <div style={{textAlign: 'center'}}>
            <h1 style={{ fontSize: '20px', height: '', fontWeight: 'bold'}}>Sugar Shack Recipes</h1>
           
            
        
            
        
{/*         
            <div className="card" style={{width: '12rem', justifyContent: 'center'}}>
<img src={dessertrecipe}   style={{borderTopLeftRadius: '25px', borderTopRightRadius: '25px'}} className="card-img-top" alt="chocolate cake" />
<div className="card-body">
<h5 className="card-title">Chocolate Cake Is Great!</h5>
<p className="card-text">If you are ready to view the recipes click the link below.</p>
<a href="../recipes/RecipeCreate.tsx" className="btn btn-primary">Recipes</a>
</div>
</div> */}
    </div>
    </Row>
    </Container>
        
        
    )
};

export default Home;

