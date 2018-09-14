import React, { Component } from "react";
import "./App.css";
import Form from "./components/form";
import Recipes from "./components/recipes";

class App extends Component {
  state = {
    recipes: []
  };

  //pass in e (for event) to prevent default page refresh
  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();

    const api_call = await fetch(
      "https://www.food2fork.com/api/search?key=" +
        process.env.REACT_APP_API_KEY +
        "&q=" +
        recipeName +
        "&count=10"
    );

    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  };
  // to convert saved recipes under localStorage to a JSON object
  // and reset state back to initial results
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  };

  // save initial search results, use localStorage
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}
export default App;
