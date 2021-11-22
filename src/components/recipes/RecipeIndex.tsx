import * as React from "react";
import { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import RatingsTable from "../feedback/RatingsTable";
import RecipeCreate from "./RecipeCreate";
import RecipeEdit from "./RecipeEdit";
import Sweets from "../site/Recipes";
import RecipeTable from "./RecipeTable";
import RatingsIndex from '../feedback/RatingsIndex';
import APIURL from '../../helpers/environment';

interface RecipeIndexProps {
  sessionToken: any;
  // protectedViews: any;
}

interface RecipeIndexState {
  nameOfDessert: string;
  recipe: string;
  directions: string;
  timeToBake: string;
  servings: number;
  photo: string;
  id: number;
  recipes: [];
  updateActive: boolean;
  recipeToUpdate: { };
}

class RecipeIndex extends React.Component<RecipeIndexProps, RecipeIndexState> {
  constructor(props: RecipeIndexProps) {
    super(props);
    this.state = {
      nameOfDessert: "",
      recipe: "",
      directions: "",
      timeToBake: "",
      servings: 0,
      photo: "",
      id: 0,
      recipes: [],
      updateActive: false,
      recipeToUpdate: { },
    };
  }


  setUpdatedRecipe = (recipe) => {
    this.setState({ recipeToUpdate: recipe });
  };

  handleUpdateOpen = () => {
    this.setState({ updateActive: true });
  };

  handleUpdateClosed = () => {
    this.setState({ updateActive: false });
  };

  fetchRecipes = () => {
    fetch(`${APIURL}/recipe/get`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      }),
    })
      .then((res) => res.json())
      .then((recipeData) => {
        console.log(recipeData);
        this.setState({ recipes: recipeData });
        console.log(this.state.recipes);
      });
  };

  componentDidMount() {
    this.fetchRecipes();
  }

  render() {
    return (
      <Container>
        <Row>
          <Sweets recipes={this.state.recipes}/>
          </Row>
        <Row>
          <Col md="4">
            <RecipeCreate
              sessionToken={this.props.sessionToken}
              fetchRecipes={this.fetchRecipes}
              // <RatingsIndex sessionToken={this.state.recipes} />
            />
          </Col>
          <Col md="4">
            <RecipeTable
              recipes={this.state.recipes}
              setUpdatedRecipe={this.setUpdatedRecipe}
              handleUpdateOpen={this.handleUpdateOpen}
              sessionToken={this.props.sessionToken}
              fetch={this.fetchRecipes}
            />
          </Col>
        </Row>
        <Col md="12">
          {/* {this.state.updateActive ? (
            <RecipeEdit
            sessionToken={this.props.sessionToken}
           handleUpdateClosed={this.handleUpdateClosed}
              
              recipeToUpdate={this.state.recipeToUpdate}
            />
          ) : (
            <div></div>
          )} */}
        </Col>
      </Container>
    );
  }
}

export default RecipeIndex;
