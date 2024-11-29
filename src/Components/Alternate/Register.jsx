import Field from '../Field';

export default function Register() {
  return (
    <div>
      <h3>Register</h3>
      <div className="main">
        {}
        <Field label="User Name" placeholder="Please Provide User Name" />
        <Field label="First Name" placeholder="Please Provide First Name" />
        <Field label="Last Name" placeholder="Please Provide Last Name" />
        <Field type="email" label="Email" placeholder="Please Provide Email" />
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
