import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthContext';

const MyProfile = () => {
    const {user,} = use(AuthContext)

    return (
        <div className=''>
<h3><span className='font-bold'>Name:</span> <span>{user && user.displayName }</span></h3>
<h3><span className='font-bold'>Email:</span> <span>{user && user?.email }</span></h3>
            <div className="avatar">
  <div className="w-24 rounded-full">
    <img src={user.photoURL} />
  </div>
</div>




        </div>
    );
};

export default MyProfile;