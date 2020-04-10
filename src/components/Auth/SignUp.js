import React from 'react';

import Error from '../Error';

import { useHandleSubmit, useFormFields } from '../../hooks';

const validate = (fields) => {
  const { username, email, password, passwordConfirmation } = fields;

  const isValid = !username || !email ||
    !password || password !== passwordConfirmation;

  return isValid;
};

const SignUp = () => {
  const [fields, handleFieldChange] = useFormFields();
  const [signup, data, loading, error] = useHandleSubmit(fields);

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
