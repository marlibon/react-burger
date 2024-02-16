import React from 'react';
import renderer from 'react-test-renderer';

import HeaderButton from './header-button';
it('render app', () => {
  const tree = renderer
    .create(<HeaderButton children={null} text="text" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
