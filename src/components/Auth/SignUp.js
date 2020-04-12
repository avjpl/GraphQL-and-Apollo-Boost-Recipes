import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Error from '../Error';
import { SIGNUP_USER } from '../../queries';
import { SessionContext } from '../Contexts/Session';
import { useHandleSubmit, useFormFields } from '../../hooks';

const validate = (fields) => {
  const { username, email, password, passwordConfirmation } = fields;
  const isValid = !username || !email || !password || password !== passwordConfirmation;

  return isValid;
};

const SignUp = () => {
  const history = useHistory();
  const { getCurrentUser } = useContext(SessionContext);
  const [fields, handleFieldChange] = useFormFields();
  const [signup, { loading, error, data }] = useHandleSubmit(fields, SIGNUP_USER);

  useEffect(() => {
    if (data || getCurrentUser) {
      history.push('/');
    }
  });

  const valid = validate(fields);

  return (
    <form onSubmit={signup}>
      <input
        type='text'
        name='username'
        placeholder='Username'
        value={fields.username}
        onChange={handleFieldChange}
      />

      <input
        type='email'
        name='email'
        placeholder='Email'
        value={fields.email}
        onChange={handleFieldChange}
      />

      <input
        type='password'
        name='password'
        placeholder='Password'
        value={fields.password}
        onChange={handleFieldChange}
      />

      <input
        type='password'
        name='passwordConfirmation'
        placeholder='Comfirm Password'
        value={fields.passwordConfirmation}
        onChange={handleFieldChange}
      />

      <button
        type='submit'
        disabled={loading || valid}
      >Sign Up</button>

      {error && <Error error={error} />}
    </form>
  )
};

export default SignUp
