import React, { Component } from 'react';

import Burger from 'react-css-burger';

export default class App extends Component {
  state = {
    active: false,
  };

  renderBurgers = () => {
    const burgerList = [
      'slider',
      'squeeze',
      'arrow',
      'arrowalt',
      'arrowturn',
      'spin',
      'elastic',
      'emphatic',
      'collapse',
      'vortex',
      'stand',
      'spring',
      'minus',
      '3dx',
      '3dy',
      '3dxy',
      'boring',
    ];

    return burgerList.map(burger => (
      <div key={burger}>
        <Burger
          onClick={() =>
            this.setState({
              active: !this.state.active,
            })
          }
          active={this.state.active}
          burger={burger}
          color="pink"
          hoverOpacity={0.6}
          scale={1.2}
        />
        {burger}
      </div>
    ));
  };

  render() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {this.renderBurgers()}
      </div>
    );
  }
}
