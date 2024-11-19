import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Confirm that password matches

    // See if user has been authenticated

    //Create user document
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign-up with email and password</h1>
      <form onSubmit={() => {}}>
        <label htmlFor="displayName">Display Name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
          id="displayName"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
          id="email"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
          id="password"
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          id="confirmPassword"
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
