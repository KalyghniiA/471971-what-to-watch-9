import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { AuthData } from '../../types/auth-data';
import { formErrorProps, FormStateProps } from '../../types/sign-in-form';
import classNames from 'classnames';
import { loginAction } from '../../store/user-process/user-process';

const formFields = {
  email: 'Email address',
  password: 'Password',
};

function FormError({ text }: formErrorProps): JSX.Element {
  return <p>{`Please enter a valid ${text}`}</p>;
}

function SignInForm(): JSX.Element {
  const [inputState, setInputState] = useState<FormStateProps>({
    email: {
      value: '',
      error: false,
      errorText: 'Please enter a valid email address',
      regex: new RegExp(/^[\w]+@([\w-]+\.)+[\w-]{2,4}$/),
    },
    password: {
      value: '',
      error: false,
      errorText: 'Please enter a valid password',
      regex: new RegExp(/^([a-zA-Z0-9]{3,15})$/),
    },
  });

  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleChangeForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (Object.values(inputState).find((state) => state.value !== '' && !state.error)) {
      onSubmit({
        login: inputState['email'].value,
        password: inputState['password'].value,
      });
    }
  };

  const handleChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    const rule = inputState[name].regex;

    setInputState({
      ...inputState,
      [name]: {
        ...inputState[name],
        value: value,
        error: !rule.test(value),
      },
    });
  };

  return (
    <div className="sign-in user-page__content">
      <form action="#" className="sign-in__form" onSubmit={handleChangeForm}>
        <div className="sign-in__message">
          {Object.entries(formFields).map(
            ([key, value]) => inputState[key].error && <FormError text={value} key={key} />,
          )}
        </div>
        <div className="sign-in__fields">
          {Object.entries(formFields).map(([key, value]) => {
            const inputClassName = classNames('sign-in__field', {
              'sign-in__field--error': inputState[key].error,
            });

            return (
              <div className={inputClassName} key={key}>
                <input
                  className="sign-in__input"
                  type={key}
                  placeholder={value}
                  name={key}
                  id={`user-${key}`}
                  value={inputState[key].value}
                  onChange={handleChangeInput}
                />
                <label className="sign-in__label visually-hidden" htmlFor={key}>
                  {value}
                </label>
              </div>
            );
          })}
        </div>
        <div className="sign-in__submit">
          <button className="sign-in__btn" type="submit">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
