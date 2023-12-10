import { useState, ChangeEvent, Dispatch, SetStateAction } from 'react';

export interface FormValues {
  [key: string]: string;
}

type ReturnTypes = {
  values: FormValues;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  setValues: Dispatch<SetStateAction<FormValues>>;
};

export function useForm(initialValues: FormValues): ReturnTypes {
  const [values, setValues] = useState<FormValues>(initialValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues };
}
