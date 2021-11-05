import { screen } from '@testing-library/react';
import renderPath from './helpers/renderPath';

describe('Serão testadas as Rotas da aplicação', () => {
  it('Será validado que rota / é uma rota existente e renderiza o Componente Login.jsx',
    async () => {
      localStorage.clear();
      renderPath('/');

      expect(screen.getByTestId('login-page')).toBeInTheDocument();
    });
});
