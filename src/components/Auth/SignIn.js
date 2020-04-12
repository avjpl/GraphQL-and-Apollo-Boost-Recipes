import React, { useContext } from 'react';

import Error from '../Error';
import { home } from '../../redirects';
import { SIGNIN_USER } from '../../queries';
import { SessionContext } from '../Contexts/Session';
import { useHandleSubmit, useFormFields, useRedirect } from '../../hooks';

const validate = (fields) => {
  const { username, password } = fields;
  const isValid = !username || !password ;

  return isValid;
};

const SignIn = () => {
  const { getCurrentUser } = useContext(SessionContext);
  const [fields, handleFieldChange] = useFormFields();
  const [signin, { loading, error, data }] = useHandleSubmit(fields, SIGNIN_USER);
  useRedirect(home([data, getCurrentUser]));

  const valid = validate(fields);

  return (
    <form onSubmit={signin}>
      <input
        type='text'
        name='username'
        placeholder='Username'
        value={fields.username}
        onChange={handleFieldChange}
      />

      <input
        type='password'
        name='password'
        placeholder='Password'
        value={fields.password}
        onChange={handleFieldChange}
      />

      <button
        type='submit'
        disabled={loading || valid}
      >Sign In</button>

      {error && <Error error={error} />}
    </form>
  )
};

export default SignIn
