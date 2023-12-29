import { Link } from 'react-router-dom';

const FormRegistration = ({register}) => {
  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      await register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      });  
      console.log('Registration successful');
      form.reset();
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div style={{ width: 500 }}>
      <form onSubmit={handleSubmit}>
        <Link type="button" to="/">
          Go Home
        </Link>
        <div>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div>
          <label htmlFor="exampleInputName">Name</label>
          <input type="text" name="name" id="exampleInputName" />
        </div>
        <div>
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input name="password" type="password" id="exampleInputPassword1" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default FormRegistration;
