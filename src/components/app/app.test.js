import React from 'react';
import renderer from 'react-test-renderer';

import App from './app';
it('render app', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
