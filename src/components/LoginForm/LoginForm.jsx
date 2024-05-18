import { Formik, Form, Field } from "formik";
import css from './LoginForm.module.css'
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations"
import {toast} from "react-hot-toast"

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values,action) => {
    dispatch(login(values)).unwrap().then( ()=> {
      toast.success('Successfully Login!');
    }).catch(error => {
      console.log(error);
    })
    action.resetForm();
}
    return (
       <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.input} type="password" name="password" />
        </label>
        <button className={css.btn} type="submit">Log In</button>
      </Form>
    </Formik> 

    );

}