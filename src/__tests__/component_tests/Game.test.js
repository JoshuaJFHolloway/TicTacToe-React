import React from 'react';
import { shallow } from 'enzyme';
import Game from '../../components/Game';

describe('Game', () => {
  let game = shallow(<Game />);

  describe('Rendering components', () => {

    it('renders correctly', () => {
      expect(game).toMatchSnapshot();
    });

    it('renders header component', () => {
      expect(game.find('Header').exists()).toBe(true);
    });
  });

  describe('Game state set successfully', () => {

    it('initializes turn state as X', () => {
      expect(game.state('turn')).toEqual('X')
    });

    it('initializes button clicked state as false', () => {
      expect(game.state('buttonClicked')).toEqual(false)
    });

  });
});
