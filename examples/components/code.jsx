import React from 'react';

class Code extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ['yarn add react-spinners', 'npm install react-spinners --save'],
      index: 0
    };
  }

  componentDidMount() {
    let el = document.getElementById('code');
    el.addEventListener('click', () => {
      this.setState({
        index: +!this.state.index
      });
    })
  }

  render() {
    return (
      <span>
        { this.state.text[this.state.index] }
      </span>
    );
  }
}

export { Code };
