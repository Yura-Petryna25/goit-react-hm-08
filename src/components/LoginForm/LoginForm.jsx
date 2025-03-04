import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
      }}
    >
      <Form>
        <Field type="email" name="email" placeholder="Email" required />
        <Field
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
