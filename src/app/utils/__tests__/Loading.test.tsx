// src/app/components/__tests__/LoadingComponent.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import ClipLoader from 'react-spinners/ClipLoader';
import LoadingComponent from '../Loading';

jest.mock('react-spinners/ClipLoader', () => jest.fn(() => null));

describe('LoadingComponent', () => {
  it('renders without crashing', () => {
    const { container } = render(<LoadingComponent />);
    expect(container).toBeInTheDocument();
  });

  it('contains ClipLoader', () => {
    render(<LoadingComponent />);
    expect(ClipLoader).toHaveBeenCalledWith(
      expect.objectContaining({ color: "#123abc", size: 150 }),
      {}
    );
  });
});