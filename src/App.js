import "./App.css";
import React from "react";
import { CardList } from "./components/card-list/card-list-component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Monsters PhoneBook</h1>
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
}

export default App;
