import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { SIGNUP_USER } from '../queries';

const defaultState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: ''
};

export const useHandleSubmit = (fields) => {
  const [signup, { data, loading, error }] = useMutation(SIGNUP_USER);

  return [
    (evt) => {
      evt.preventDefault();

      signup({ variables: { ...fields } });

      Object.entries(fields).forEach(([field]) => {
        fields[field] = '';
      });
    },
    data,
    loading,
    error
  ];
};

export const useFormFields = () => {
  const [fields, setValues] = useState(defaultState);

  return [
    fields,
    ({ target }) => {
      const { name, value } = target;

      setValues({ ...fields, [name]: value });
    }
  ];
};
