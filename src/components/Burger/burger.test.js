import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import Burger from './';

Enzyme.configure({ adapter: new Adapter() });

describe('<Burger />', () => {
  const wrapper = shallow(<Burger />);
  const wrapperWithProps = shallow(
    <Burger
      onClick={() => console.log('clicked')}
      burger="arrow"
      color="#ada"
      hoverOpacity={0.7}
      scale={0.7}
      marginTop="50px"
      marginLeft="50px"
      style={{ display: 'inline-block' }}
      type="not a button"
      badProp="this is a bad prop"
    />,
  );

  const expectedProps = ['onClick', 'children', 'style', 'type', 'className'];

  it('should render correctly', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('should render a <button>', () => {
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('should contain two <span> child elements', () => {
    expect(wrapper.find('span')).toHaveLength(2);
  });

  it('should pass the onClick prop to the <button> element', () => {
    expect(wrapperWithProps.find('button').props().onClick).toBeTruthy();
  });

  it('should pass the style prop to the <button> element', () => {
    expect(wrapperWithProps.find('button').props().style).toBeTruthy();
  });

  it('should NOT reassign the type prop to the <button> element even if passed', () => {
    expect(wrapperWithProps.find('button').props().type).toEqual('button');
  });

  it('should NOT pass any props to the <button> element other than the expected props', () => {
    expect(
      Object.keys(wrapperWithProps.find('button').props()).every(prop =>
        expectedProps.includes(prop),
      ),
    ).toBeTruthy();
  });
});
