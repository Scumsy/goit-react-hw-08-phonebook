import { useDispatch } from 'react-redux';
import { logIn } from '../../Redux/UserAuth/operations';
import { Loader } from 'components/Loader/Loader';
import { useAuth } from 'hooks';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input type="email" name="email" required maxLength={30} />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          required
          minLength={7}
          maxLength={30}
        />
      </label>
      <button type="submit" disabled={isLoading && true}>
        Log In
      </button>
      {error && <h3>{error}</h3>}

      {isLoading && <Loader />}
    </form>
  );
};
