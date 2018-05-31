import React, { Component } from 'react';

import Burger from './components/BurgerWrapper';

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
      <div
        key={burger}
        style={{
          display: 'flex',
          flex: '0 0 33%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Burger
          burger={burger}
          color="#0FAFFF"
          hoverOpacity={0.8}
          scale={1}
          marginTop="0"
          marginLeft="0"
        />
        <div style={{ paddingTop: '20px' }}>{burger}</div>
      </div>
    ));
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          minHeight: '100vh',
          height: '100%',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        {this.renderBurgers()}
      </div>
    );
  }
}
