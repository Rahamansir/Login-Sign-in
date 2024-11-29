import Field from '../Field';

export default function Login() {
  return (
    <div>
      <h3>Login</h3>
      <div className="main">
        <Field label="User Name" placeholder="Please Provide User Name" />
        <Field
          type="password"
          label="Password"
          placeholder="Please Provide Password"
        />
      </div>

      <button>Submit</button>
    </div>
  );
}
