import React, { Component } from 'react';

import Burger from 'react-css-burger';

export default class BurgerWrapper extends Component {
  state = {
    active: false,
  };

  render() {
    return (
      <Burger
        onClick={() =>
          this.setState({
            active: !this.state.active,
          })
        }
        active={this.state.active}
        {...this.props}
      />
    );
  }
}
