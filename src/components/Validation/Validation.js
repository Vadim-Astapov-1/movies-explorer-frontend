import { useCallback, useState } from 'react';
import validator from 'validator';
import { regex } from '../../utils/constans';

export function Validation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: evt.target.validationMessage });
    setIsValid(evt.target.closest('form').checkValidity());

    if(name === 'email') {
      if(value === '') {
        setErrors({...errors, [name]: 'Вы пропустили это поле.' });
      } else if(!validator.isEmail(value)) {
        setErrors({...errors, [name]: 'Некорректный E-Mail.' });
        setIsValid(false)
      } else {
        setErrors({...errors, [name]: evt.target.validationMessage });
      }
    }

    if(name === 'name') {
      if(value === '') {
        setErrors({...errors, [name]: 'Вы пропустили это поле.' });
      } else if(!regex.test(value)) {
        setErrors({...errors, [name]: 'Поле может содержать только латиницу, кириллицу, пробел или дефис.' });
        setIsValid(false)
      } else {
        setErrors({...errors, [name]: evt.target.validationMessage });
      }
    }
  };

  const resetForm = useCallback(() => {
      setValues({});
      setErrors({});
      setIsValid(false);
    }, [setValues, setErrors, setIsValid]);

  const fullForm = useCallback((data) => {
    setValues(data);
  }, [setValues]);

  return { values, handleChange, errors, isValid, resetForm, fullForm };
}
