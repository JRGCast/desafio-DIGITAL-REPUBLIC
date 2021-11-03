import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import React, { lazy, Suspense } from 'react';
import App from '../App';
import renderWithRouter from './helper/renderWithRouter';
const LandingPage = lazy(() => import('../pages/LandingPage'));

describe('1 - Tests if basic texts from components are rendered inside App before routes', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });
  it('Verify if App contains at least 1 header', () => {
    const allHeaders = screen.getAllByRole('heading');
    expect(allHeaders.length).toBeGreaterThan(0);
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

// describe('2 - Test if basic texts from routed components are rendered inside App', () => {
//   renderWithRouter(
//     <App>
//       <Suspense fallback={ null }>
//         <LandingPage />
//       </Suspense>
//     </App>);
//   it('Verify if first route is rendered after suspense resolve', async () => {
//     const rulesTitle = screen.getByRole('heading', { level: 1 });
//     await waitFor(() => expect(rulesTitle).toBeInTheDocument());
//   });
// });
