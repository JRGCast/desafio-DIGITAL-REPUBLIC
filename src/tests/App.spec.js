import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('1 - Test basic text from components', () => {
  it('Verify if AppInside is rendered inside App', () => {
    render(<App />);
    const headerElement = screen.getByRole('heading', { level: 1 });
    expect(headerElement).toBeInTheDocument();
  });
});