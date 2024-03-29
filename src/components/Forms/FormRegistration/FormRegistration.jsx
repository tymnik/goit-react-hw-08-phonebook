import { useDispatch } from 'react-redux';
import { register } from 'store/auth/operations';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { toast } from 'react-toastify';
import styles from './FormRegistration.module.css';

const FormRegistration = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .then(res => {
        toast.success('Nice to meet you!', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      })
      .catch(e => {
        toast.warn('Try again!', {
          position: 'top-center',
          autoClose: 2000,
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
          <label htmlFor="exampleInputName" className={styles.userInputLabel}>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="exampleInputName"
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
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default FormRegistration;
