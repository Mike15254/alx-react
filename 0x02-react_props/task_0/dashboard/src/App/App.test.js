import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('Test App.js', () => {
  it('App without crashing', (done) => {
    expect(shallow(<App />).exists());
    done();
  });
});
