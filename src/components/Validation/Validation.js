import { useCallback, useState } from 'react';
import validator from 'validator';
import { regex } from '../../utils/constans';

export function Validation(inizialValues) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: evt.target.validationMessage });
    setIsValid(evt.target.closest('form').checkValidity());

    if (name === 'email') {
      if (value === '') {
        setErrors({ ...errors, [name]: 'Вы пропустили это поле.' });
      } else if (!validator.isEmail(value)) {
        setErrors({ ...errors, [name]: 'Некорректный E-Mail.' });
        setIsValid(false);
      } else if (value === inizialValues.email && !values.name) {
        setIsValid(false);
      } else if (value === inizialValues.email && values.name === inizialValues.name) {
        setIsValid(false);
      } else {
        setErrors({ ...errors, [name]: evt.target.validationMessage });
      }
    }

    if (name === 'name') {
      if (value === '') {
        setErrors({ ...errors, [name]: 'Вы пропустили это поле.' });
      } else if (!regex.test(value)) {
        setErrors({
          ...errors,
          [name]: 'Поле может содержать только латиницу, кириллицу, пробел или дефис.',
        });
        setIsValid(false);
      } else if (value === inizialValues.name && !values.email) {
        setIsValid(false);
      } else if (value === inizialValues.name && values.email === inizialValues.email) {
        setIsValid(false);
      } else {
        setErrors({ ...errors, [name]: evt.target.validationMessage });
      }
    }
  };

  const resetForm = useCallback(() => {
    setValues({});
    setErrors({});
    setIsValid(false);
  }, [setValues, setErrors, setIsValid]);

  return { values, handleChange, errors, isValid, resetForm };
}
