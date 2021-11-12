import * as React from 'react';
import { Table, Button} from 'reactstrap';


const RecipeTable = (props) => {

    const deleteRecipe = (recipe) => {
        fetch('http://localhost:3000/delete/:id', {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchRecipes())
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
                <Button color='warning'>Update</Button>
                <Button color='danger' onClick={() => {deleteRecipe(recipe)}} >Delete</Button>
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
                        <th>nameOfDessert</th>
                        <th>recipe</th>
                        <th>directions</th>
                        <th>timeToBake</th>
                        <th>servings</th>
                        <th>photo</th>
                    </tr>
                </thead>
                <tbody>
                    {recipeMapper()}
                </tbody>
            </Table>
        </div>            
    )
}

export default RecipeTable;