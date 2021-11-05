import PropTypes from 'prop-types';
import React, { useState } from 'react';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validateEmail, setValidateEmail] = useState(false);

  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  const emailValidation = (userEmail) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(userEmail).toLowerCase());
  };

  const handleChange = ({ target: { value, id } }) => {
    switch (id) {
    case 'email-input':
      setEmail(value);
      setValidateEmail(emailValidation(value));
      break;
    case 'password-input':
      setPassword(value);
      break;
    default:
      return 0;
    }
  };

  const handleClick = () => {
    const { history } = props;
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    const user = {
      email,
    };
    localStorage.user = JSON.stringify(user);
    history.push('./comidas');
  };

  const MIN_PASSWORD_CHARACTERS = 6;

  return (
    <>
      <input
        type="email"
        name="email-input"
        id="email-input"
        data-testid="email-input"
        onChange={ handleChange }
        value={ email }
      />
      <input
        type="password"
        name="password-input"
        id="password-input"
        data-testid="password-input"
        onChange={ handleChange }
        value={ password }
      />
      <button
        type="button"
        value="Entrar"
        data-testid="login-submit-btn"
        disabled={ !(password.length > MIN_PASSWORD_CHARACTERS
          && validateEmail) }
        onClick={ handleClick }
      >
        Entrar
      </button>
    </>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
