import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthContext';

const MyProfile = () => {
    const {user,} = use(AuthContext)

    return (
      <div>{
        user ? 
        <div className='h-screen flex flex-col justify-center items-center text-center'>
          <div className='space-y-5'>
            <div className="avatar">
  <div className="w-30 border-green-600 border-2 rounded-full">
    <img src={user.photoURL} />
  </div>
  
          </div>
          <h3><span className='font-bold'>Name:</span> <span>{user && user.displayName }</span></h3>
<h3><span className='font-bold'>Email:</span> <span>{user && user?.email }</span></h3>

</div>




        </div>
        :
        <NavLink to='/auth.login'>My Profile</NavLink>
        }
        
      </div>
        
    );
};

export default MyProfile;