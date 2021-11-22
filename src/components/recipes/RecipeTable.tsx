import * as React from 'react';
import { Table, Button} from 'reactstrap';
import RecipeEdit from "./RecipeEdit"
import APIURL from '../../helpers/environment';


const RecipeTable = (props) => {

    const deleteRecipe = (recipe) => {
        fetch(`${APIURL}/recipe/delete/${recipe.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then(() => props.fetch())
    }



    const recipeMapper = () => {
        return props.recipes.map((recipe, index) => {
            return (
            <tr key={index}>
            <th scope="row">{recipe.id}</th>
            <td>{recipe.nameOfDessert}</td>
            <td>{recipe.recipe}</td>
            <td>{recipe.directions}</td>
            <td>{recipe.timeToBake}</td>
            <td>{recipe.servings}</td>
            <td>{recipe.photo}</td>
            <td>
            <RecipeEdit
            sessionToken={props.sessionToken}
            recipe={recipe}
            fetch={props.fetch}
        //    handleUpdateClosed={this.handleUpdateClosed}
        //       fetchRecipes={this.fetchRecipes}
        //       recipeToUpdate={this.state.recipeToUpdate}
            />
                {/* <Button color='warning' onClick={() => {
                    console.log(recipe)
                    props.setUpdatedRecipe(recipe)
                    props.handleUpdateOpen()
                }}>Update</Button> */}
                <Button style={{borderRadius: '25px'}} color='danger' onClick={() => {deleteRecipe(recipe)}} >Delete</Button>
            </td>
            </tr>
            )
        })
    }

    return (
        <div>
              <h3>Recipe History</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th style={{padding:'15px',fontFamily:'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif' }}>NameOfDessert</th>
                        <th style={{padding:'15px',fontFamily:'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif' }}>Recipe</th>
                        <th style={{padding:'15px',fontFamily:'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif' }}>Directions</th>
                        <th style={{padding:'15px',fontFamily:'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif' }}>TimeToBake</th>
                        <th style={{padding:'15px',fontFamily:'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif' }}>Servings</th>
                        <th style={{padding:'15px',fontFamily:'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif' }}>Photo</th>
                    </tr>
                </thead>
                <tbody>
                    {recipeMapper()}
                </tbody>
            </Table>
            {/* call and mount Recipes in this component */}
        </div>            
    )
}

export default RecipeTable;