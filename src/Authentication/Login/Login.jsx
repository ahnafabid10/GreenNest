import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <h2 className='font-bold text-4xl text-center py-5'>Login Your Account</h2>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p>Don't have any Account? <Link to='/auth/registration' className='text-green-300 hover:text-green-600'>Register </Link>Here</p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;