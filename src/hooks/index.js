import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

const defaultState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: ''
};

export const useHandleSubmit = (fields, query) => {
  const [signup, { data, loading, error }] = useMutation(query);

  if (data) {
    const { token } = data['signupUser'] || data['signinUser'];
    localStorage.setItem('token', token);
  }

  return [
    (evt) => {
      evt.preventDefault();

      signup({ variables: { ...fields } });

      Object.entries(fields).forEach(([field]) => {
        fields[field] = '';
      });
    },
    {
      data,
      loading,
      error
    }
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
