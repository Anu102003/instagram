import React from 'react';
import {  render} from '@testing-library/react';
import {AllPostIcons} from "./AllPostIcons"


describe('AllPostIcons Component', () => {
  it('renders without crashing', () => {
    render(<AllPostIcons/>);
  });
  
});
