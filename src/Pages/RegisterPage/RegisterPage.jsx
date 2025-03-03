import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field } from "formik";
import css from "./RegisterPage.module.css";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <div className={css.container}>
      <h1>Register</h1>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label>Name</label>
          <Field type="text" name="name" required />
          <label>Email</label>
          <Field type="email" name="email" required />
          <label>Password</label>
          <Field type="password" name="password" required />
          <button className={css.button} type="submit">
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterPage;
