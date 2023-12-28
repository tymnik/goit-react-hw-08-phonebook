import { Link } from 'react-router-dom';

const FormRegistration = ({ register }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      firstName: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    register(newUser);
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
        <button type="submit">Register</button>
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default FormRegistration;
