import React from 'react';
import { Link } from 'react-router';

const Registration = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <h2 className='font-bold text-4xl text-center py-5'>Register Your Account</h2>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Your Name" />
          {/* Photo URl */}
          <label className="label">Photo URL</label>
          <input type="text" name='photo' className="input" placeholder="Photo URL" />
            {/* Email */}
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          {/* password */}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p>Already have an account? <Link to='/auth/login' className='text-green-300 hover:text-green-600'>Login</Link> Here</p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Registration;