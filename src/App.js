import React, { Component } from "react";
import "./App.css";
import Form from "./components/form";

class App extends Component {
  //pass in e (for event) to prevent default page refresh
  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();

    const api_call = await fetch(
      "https://www.food2fork.com/api/search?key=" +
        process.env.REACT_APP_API_KEY +
        "&q=shredded%20chicken&count=5"
    );

    const data = await api_call.json();
    console.log("data", data);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Recipe Directory</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
      </div>
    );
  }
}

export default App;
