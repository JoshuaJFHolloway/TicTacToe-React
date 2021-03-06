import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('renders a Game component', () => {
    expect(app.find('Game').exists()).toBe(true);
  });
});
