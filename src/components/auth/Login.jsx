import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { login } from "../../features/users/authSlice";
import { clearMessage } from '../../features/users/messageSlice';

const Login = () => {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {isLoggedIn} = useSelector((state)=>state.auth);
  const {message} = useSelector((state)=>state.message);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(clearMessage())
  }, [dispatch])

  const initialValues = {
    username:"",
    password:""
  }

  const validationSchema = Yup.object().shape({
    username:Yup.string().required("This field is required"),
    password:Yup.string().required("This field is required"),
  })

  const handleLogin = (formValue) =>{
    const {username, password} = formValue;
    setLoading(true);

    dispatch(login({username, password})).unwrap().then(()=>{
      navigate("/profile");
      window.location.reload();
    }).catch(()=>{
      setLoading(false)
    })
  }

  if(isLoggedIn) {
    return <Navigate to="/profile"/>
  }

  return (
    <div className='col-md-12 login-form'>
      <h2>Login</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleLogin}>
        {({errors, touched})=>(
            <Form>
              <div className='form-group'>
                <label htmlFor='username'>Username</label>
                <Field name="username" type="text" className={"form-control" + (errors.username && touched.username ? "is-invalid" : "") } />
                <ErrorMessage name='username' component="div" className='invalid-feedback'/>
              </div>

              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <Field name="password" type="password" className={"form-control" + (errors.password && touched.password ? "is-invalid" : "") } />
                <ErrorMessage name='password' component="div" className='invalid-feedback'/>
              </div>

              <div className='form-group'>
                <button type='submit' className='btn btn-primary btn-block' disabled={loading}>
                  {loading && (<span className='spinner-border spinner-border-sm'></span>)}  
                  <span>Login</span>
                </button>
              </div>
            </Form>
        ) 
        }
      </Formik>

      {message && (
        <div className='form-group'>
          <div className='alert alert-danger' role="alert">
            {message}
          </div>
        </div>
      )}
    </div>
  )
}

export default Login