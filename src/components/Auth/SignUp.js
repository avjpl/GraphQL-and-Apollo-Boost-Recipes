import React, { useContext } from 'react';

import Error from '../Error';
import { home } from '../../redirects';
import { SIGNUP_USER } from '../../queries';
import { SessionContext } from '../Contexts/Session';
import { useHandleSubmit, useFormFields, useRedirect } from '../../hooks';

const validate = (fields) => {
  const { username, email, password, passwordConfirmation } = fields;
  const isValid = !username || !email || !password || password !== passwordConfirmation;

  return isValid;
};

const SignUp = () => {
  const { getCurrentUser } = useContext(SessionContext);
  const [fields, handleFieldChange] = useFormFields();
  const [signup, { loading, error, data }] = useHandleSubmit(fields, SIGNUP_USER);
  useRedirect(home([data, getCurrentUser], 'some'));

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
