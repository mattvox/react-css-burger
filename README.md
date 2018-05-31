# react-css-burger

> Lightweight, dynamic, zero-dependency (and very tasty) burger for React.

[![NPM](https://img.shields.io/npm/v/react-css-burger.svg)](https://www.npmjs.com/package/react-css-burger) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Examples

Check out the live demo: [https://mattvox.githib.io/react-css-burger](https://mattvox.githib.io/react-css-burger)

## Install

```bash
yarn add react-css-burger
```

Or with npm

```bash
npm install --save react-css-burger
```

## Usage

This delicious burger uses sensible defaults, so minimal configuration via props is necessary.

### Basic configuration

Renders a basic, "boring" burger

```jsx
import Burger from 'react-css-burger';

class App extends Component {
  state = {
    active: false,
  };

  render() {
    return (
      <Burger
        onClick={() => this.setState({ active: !this.state.active })}
        active={this.state.active}
      />
    );
  }
}
```

### Advanced configuration

Renders a burger with the "arrow" animation, in pink, with a hover opacity of 80%, at 120% scale.

```jsx
import Burger from 'react-css-burger';

class App extends Component {
  state = {
    active: false,
  };

  render() {
    return (
      <Burger
        onClick={() => this.setState({ active: !this.state.active })}
        active={this.state.active}
        burger="arrow"
        color="pink"
        hoverOpacity={0.8}
        scale={1.2}
      />
    );
  }
}
```

## License

MIT © [mattvox](https://github.com/mattvox)
