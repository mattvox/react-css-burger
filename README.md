# react-css-burger [![NPM](https://img.shields.io/npm/v/react-css-burger.svg)](https://www.npmjs.com/package/react-css-burger) [![Build Status](https://travis-ci.org/mattvox/react-css-burger.svg?branch=master)](https://travis-ci.org/mattvox/react-css-burger) [![Coverage Status](https://coveralls.io/repos/github/mattvox/react-css-burger/badge.svg?branch=master)](https://coveralls.io/github/mattvox/react-css-burger?branch=master) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Lightweight, dynamic, zero-dependency (and very tasty) burger for React.

## Examples

Check out the live demo: [https://mattvox.github.io/react-css-burger](https://mattvox.github.io/react-css-burger)

## Install

```bash
yarn add react-css-burger
```

Or with npm

```bash
npm install --save react-css-burger
```

## Usage

This delicious burger uses sensible defaults, so only minimal configuration via props is necessary.

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

### Animations

Burger animations are set with the `burger` prop. To see all the available animations in action, please check out the live demo at [https://mattvox.github.io/react-css-burger](https://mattvox.github.io/react-css-burger). The default animation is "boring", although this can be substituted for any one of the following strings values:

* `arrow`
* `arrowalt`
* `arrowturn`
* `boring`
* `collapse`
* `elastic`
* `emphatic`
* `minus`
* `slider`
* `spin`
* `spring`
* `squeeze`
* `stand`
* `vortex`
* `3dx`
* `3dy`
* `3dxy`

### Props

React CSS Burger uses CSS Variables to provide a dynamic experience, ensuring the perfect, and most delicious burger for every situation. All properties are optional, although `active` must be used to toggle the burger's state.

* `active` - Boolean - toggles the burger state (see above example)
* `onClick` - Function - usually used to toggle the burger's state (see above example)
* `burger` - String - sets the specific animation (see animations above)
* `color` - String - sets the burger's color value (ie. 'pink' or '#AD2E74')
* `hoverOpacity` - Number - sets the opacity when hovered (ie. 0.8)
* `marginTop` - String - sets the burger's margin-top (ie. '25px')
* `marginTop` - String - sets the burger's margin-left (ie. '25px')
* `scale` - Number - sets the burger's scale value (ie. 1.25)
* `style` - Object - style object is passed through to allow for custom styling (YMMV)

## Browser Support

React CSS Burger utilizes modern CSS3 features, such as CSS variables, and is only meant for use with modern browsers, but smart fallbacks are provided to allow for graceful degradation when viewed on an older browser.

## Similar Projects

* [react-burgers](https://www.npmjs.com/package/react-burgers)
* [react-animated-burgers](https://www.npmjs.com/package/react-animated-burgers)
* [react-burger-king](https://www.npmjs.com/package/react-burger-king)

Not using React? Check out the project this one is based on: [Jonathan Suh's Hamburgers](https://jonsuh.com/hamburgers/)

## Acknowledgements

This component is heavily inspired by [Jonathan Suh's Hamburgers](https://jonsuh.com/hamburgers/) and implements almost all of his original CSS.

## License

MIT © [mattvox](https://github.com/mattvox)
