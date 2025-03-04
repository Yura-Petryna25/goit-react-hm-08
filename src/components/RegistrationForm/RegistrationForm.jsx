import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={(values, actions) => {
        dispatch(register(values));
        actions.resetForm();
      }}
    >
      <Form>
        <Field type="text" name="name" placeholder="Name" required />
        <Field type="email" name="email" placeholder="Email" required />
        <Field
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
