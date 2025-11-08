import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';

const NavBar = () => {
  const {user, signOutUser} = use(AuthContext)

  const handleSignOut =() =>{
    signOutUser()
    .then(
      alert("Sign Out Successfully")
    )
    .catch(error =>{
      console.log(error)
    })
  }
  
    const links = <>
    <div className='flex flex-col md:flex-row gap-5'>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/plantsDetails'>Plants</NavLink>
    <NavLink to='/myProfile'>My Profile</NavLink>
    </div>
    
    </>


    return (
      <div>
        <div className="navbar w-full mx-auto shadow-sm fixed top-0 left-0 z-50 bg-base-100">
          <div className='w-[1440px] mx-auto flex'>
              <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
            links
        }
      </ul>
    </div>
    <Link className="btn btn-ghost text-xl" to="/">GreenNest</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end">
    {
      user 
      
      ? 

       <section>
        <div className="dropdown">
  <div tabIndex={0} role="button" className=" m-1">
    <img className='w-[45px] border-2 border-green-900 rounded-full' src={user.photoURL} alt="" />
    </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box shadow-lg w-48 sm:w-56 p-2 z-[1] right-0 mt-2">
  <li className="text-center  text-sm sm:text-base font-medium text-green-900 mb-2">
    {user?.displayName}
  </li>
  <li>
    <Link to='/auth/login' onClick={handleSignOut} className="btn btn-sm sm:btn-md btn-outline w-full">Sign Out</Link>
  </li>
</ul>
</div>   
</section> 

      : 
      
      ""
    }
    
  </div>
          </div>
  
</div>

      </div>
        
    );
};

export default NavBar;