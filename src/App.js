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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Recipe Directory</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
