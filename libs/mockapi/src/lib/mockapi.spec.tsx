import { render } from '@testing-library/react';

import Mockapi from './mockapi';

describe('Mockapi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Mockapi />);
    expect(baseElement).toBeTruthy();
  });
});
