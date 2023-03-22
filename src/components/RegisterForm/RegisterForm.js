import { useDispatch } from 'react-redux';
import { register } from '../../Redux/UserAuth/operations';
import { useAuth } from 'hooks';
import { Loader } from 'components/Loader/Loader';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    dispatch(register({ name, email, password }));

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input type="text" name="name" required minLength={3} maxLength={30} />
      </label>
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
        Register
      </button>
      {error && <h3>{error}</h3>}

      {isLoading && <Loader />}
    </form>
  );
};
