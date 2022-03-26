import { FormEvent, useRef } from 'react';
import { useAppDispatch } from '../../hooks';
import { AuthData } from '../../types/auth-data';
import { loginAction } from '../../store/api-actions';

function SignInForm(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current?.value,
        password: passwordRef.current?.value,
      });
    }
  };

  return (
    <div className="sign-in user-page__content">
      <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
        <div className="sign-in__fields">
          <div className="sign-in__field">
            <input
              className="sign-in__input"
              type="email"
              placeholder="Email address"
              name="user-email"
              id="user-email"
              ref={loginRef}
            />
            <label className="sign-in__label visually-hidden" htmlFor="user-email">
              Email address
            </label>
          </div>
          <div className="sign-in__field">
            <input
              className="sign-in__input"
              type="password"
              placeholder="Password"
              name="user-password"
              id="user-password"
              ref={passwordRef}
            />
            <label className="sign-in__label visually-hidden" htmlFor="user-password">
              Password
            </label>
          </div>
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
