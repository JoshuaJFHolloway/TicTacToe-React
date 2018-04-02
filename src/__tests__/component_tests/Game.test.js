import React from 'react';
import { shallow } from 'enzyme';
import Game from '../../components/Game';

describe('Game', () => {
  const app = shallow(<Game />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });
});
