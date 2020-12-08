import React from 'react';

class List extends React.Component {
  state = {
    input: ''
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

  }

  render() {
    return (
      <ul>
        {this.props.list.map(el => `<li>${el.title}</li>`)}
      </ul>
    )
  }
}

export default List;
