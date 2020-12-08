import React from 'react';
import './App.css';
import Form from "./components/Form.jsx";
import List from "./components/List.jsx";

class App extends React.Component {

  state = {
    list: []
  }

  render() {

    return (
      <div className="App">
        <Form list={this.state.list} />
        <List list={this.state.list} />
      </div>
    );
  }
}

export default App;
