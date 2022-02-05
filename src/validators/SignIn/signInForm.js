import * as Yup from 'yup';

export default async function signInForm(data, formRef) {
  try {
    // Remove all previous errors
    formRef.current.setErrors({});

    const schema = Yup.object().shape({
      email: Yup.string()
        .email('Insira um email válido')
        .required('O e-mail é obrigatório'),
      password: Yup.string()
        .min(6, 'No mínimo 6 caracteres')
        .required('A senha é obrigatória'),
    });

    await schema.validate(data, { abortEarly: false });

    return true;
  } catch (err) {
    const validationErrors = {};

    if (err instanceof Yup.ValidationError) {
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });

      formRef.current.setErrors(validationErrors);
    }

    return false;
  }
}
