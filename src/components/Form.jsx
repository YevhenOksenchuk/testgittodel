import React from 'react';

class Form extends React.Component {
  state = {
    input: ''
  }

  getInput = (e) => {
    this.setState({input: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.list.push({title: this.state.input});
  }

  render() {
    console.log(this.props.list);
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
               value={this.state.input}
               onChange={this.getInput}
        />
        <button>send</button>
      </form>
    )
  }
}

export default Form;
