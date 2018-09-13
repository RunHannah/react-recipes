import React, { Component } from "react";
import "./App.css";
import Form from "./components/form";

class App extends Component {
  //pass in e (for event) to prevent default page refresh
  getRecipe = e => {
    e.preventDefault();
    console.log("working");
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
