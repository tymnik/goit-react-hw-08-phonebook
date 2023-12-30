import { useDispatch } from 'react-redux';
import { logIn } from 'store/auth/operations';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { toast } from 'react-toastify';
import styles from './FormLogin.module.css';

const FormLogin = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(res => {
        toast.success('Hi, there!', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      })
      .catch(e => {
        toast.warn('Oops! Invalid email or password!', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      });
    form.reset();
  };

  const backgroundColor = grey[900];

  return (
    <div className={styles.userForm}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="exampleInputEmail1" className={styles.userInputLabel}>
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            className={styles.userFormInput}
          />
        </div>
        <div>
          <label
            htmlFor="exampleInputPassword1"
            className={styles.userInputLabel}
          >
            Password
          </label>
          <input
            name="password"
            type="password"
            id="exampleInputPassword1"
            className={styles.userFormInput}
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          size="small"
          style={{ backgroundColor }}
        >
          Log In
        </Button>
      </form>
    </div>
  );
};

export default FormLogin;
