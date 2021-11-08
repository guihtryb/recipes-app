import { screen } from '@testing-library/react';
import renderPath from './helpers/renderPath';

const LOGIN_BUTTON = 'login-submit-btn';

describe('Testa componente Login.jsx', () => {
  it('Será validado que o input de email está presente na página de Login',
    () => {
      localStorage.clear();
      renderPath('/');

      expect(screen.getByTestId('email-input')).toBeInTheDocument();
    });

  it('Será validado que o input de senha está presente na página de Login',
    () => {
      localStorage.clear();
      renderPath('/');

      expect(screen.getByTestId('password-input')).toBeInTheDocument();
    });

  it('Será validado que o botão de Entrar está presente na página de Login',
    () => {
      localStorage.clear();
      renderPath('/');

      expect(screen.getByTestId(LOGIN_BUTTON)).toBeInTheDocument();
    });

  it('Será validado que, ao clicar no botão de entrar, o usuário será'
    + 'redirecionado para a página de receitas',
  () => {
    localStorage.clear();
    renderPath('/');

    expect(screen.getByTestId(LOGIN_BUTTON)).toBeInTheDocument();

    userEvent.click(screen.getByTestId(LOGIN_BUTTON));

    expect(window.location.pathname).toBe('/comidas');
  });
});
