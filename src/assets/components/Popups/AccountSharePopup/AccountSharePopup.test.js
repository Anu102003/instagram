import React from 'react';
import { render } from '@testing-library/react';
import { AccountSharedPopup } from './AccountSharedPopup';

describe('AccountSharedPopup Component', () => {
  it('renders without crashing', () => {
    render(<AccountSharedPopup />);
  });
});

