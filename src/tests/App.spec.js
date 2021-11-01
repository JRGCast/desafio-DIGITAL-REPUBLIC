import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('1 - Test basic texts from components are rendered inside App', () => {
  beforeEach(() => {
    render(<App />);
  });
  it('Verify if App contains at least 1 header', () => {
    const allHeaders = screen.getAllByRole('heading');
    expect(allHeaders.length).toBeGreaterThan(0);
    console.log(allHeaders);
  });
  it('Verify if AppInside text is rendered inside App', () => {
    const h1LojaTintas = screen.getByRole('heading',
      {
        level: 1,
        name: /LOJA DE TINTAS/
      });
    const strPar1 = /Uma aplicação web que ajude o usuário a calcular a quantidade de tinta necessária para pintar uma sala./;
    const par1 = screen.getByText(strPar1);
    expect(h1LojaTintas && par1).toBeInTheDocument();
  });
});
