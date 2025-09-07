import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import UserOffline from "./UserOffline";
import useOnline from "../Hooks/useOnline";

const Login = () => {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      password: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
      password: Yup.string().min(5, 'Password is too short - should be 5 chars minimum.').required('Required'),
    }),
    onSubmit: values => {
      // Store the data in localStorage
      localStorage.setItem('userLoginData', JSON.stringify(values));
      navigate('/');
    },
  });

   // Check if user is online
 const isOnline = useOnline();


  // If user is offline, display UserOffline component
  if (!isOnline) {
    return <UserOffline />;
  }

  // Function to display toast notification
  const notify = () => toast("Message sent to admin!", {
    style: {
      marginTop : "100px"
    }
  });

  return (
    <div className="login-form-container">
      <form onSubmit={formik.handleSubmit} action='/'>
        <h1 className='login-heading'>Login</h1>
        <div className="formGroup">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
