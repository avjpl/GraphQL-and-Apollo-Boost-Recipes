import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

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

export const useRedirect = (config) => {
  const history = useHistory();

  useEffect(() => {
    if (config.watch[config.fn] && config.watch[config.fn](config.cb)) {
      history.push(config.redirect);
    }

    if (!config.watch[config.fn]) {
      config.redirect && history.push(config.redirect);
    }
  }, [...config.watch]);
};
