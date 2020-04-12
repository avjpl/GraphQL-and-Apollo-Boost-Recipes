import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Error from '../Error';
import { SIGNIN_USER } from '../../queries';
import { SessionContext } from '../Contexts/Session';
import { useHandleSubmit, useFormFields } from '../../hooks';

const validate = (fields) => {
  const { username, password } = fields;
  const isValid = !username || !password ;

  return isValid;
};

const SignIn = () => {
  const history = useHistory();
  const { getCurrentUser } = useContext(SessionContext);
  const [fields, handleFieldChange] = useFormFields();
  const [signin, { loading, error, data }] = useHandleSubmit(fields, SIGNIN_USER);

  useEffect(() => {
    if (data || getCurrentUser) {
      history.push('/');
    }
  });

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
