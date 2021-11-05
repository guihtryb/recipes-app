import React from 'react';

function Login() {
  return (
    <>
      <input
        type="email"
        name="email-input"
        id="email-input"
        data-testid="email-input"
      />
      <input
        type="password"
        name="password-input"
        id="password-input"
        data-testid="password-input"
      />
      <button
        type="button"
        value="Entrar"
        data-testid="login-submit-btn"
      >
        Entrar
      </button>
    </>
  );
}

export default Login;
