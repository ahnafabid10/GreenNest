import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';


const Plants = () => {
const [loadData, setLoadData] = useState([])
  useEffect(()=>{
      fetch('/plants.json')
      .then(res => res.json())
      .then(data => setLoadData(data))
  },[])

  const handleAlert = (e)=>{
    e.preventDefault()
    toast("Book Successfully")
  }
  

    return (
        <div className='bg-green-200'>
          <div className="hero min-h-screen">         
  <div className="hero-content my-20 grid grid-cols-1">
    <div>
        <h2 className='text-4xl font-bold m-5 text-center text-black'>All Plants</h2>
            </div>
    {
      loadData.map(d=>(
        <div className='bg-green-50 p-5 rounded-2xl flex items-center gap-10'>
          <img
      src={d.image}
      className="w-[450px] rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl text-green-900 font-bold">{d.plantName}</h1>
      <p className="py-3 text-gray-700">
        {d.description}
      </p>
      
        <p className="py-3 text-3xl font-bold text-gray-700">
        Price: ${d.price}
      </p>
      <p className="py-3 text-gray-700 flex items-center gap-2">Ratings: 
        <FaStar></FaStar>{d.rating}
      </p>
      <button className="mb-5 text-gray-700">Available Stock: <span className='font-bold'>{d.availableStock}</span></button>
      <br />
      <div>
        <h2 className='text-green-900 text-2xl font-medium space-y-2'>Book Consultation</h2>
        <form action="">
          <fieldset className='space-y-2'>
          <label className="text-green-900 label ">Name</label><br />
          <input type="text" name='name' className="input" placeholder="Your Name" required /><br />
          <label className="label text-green-900">Email</label><br />
          <input type="email" name='email' className="input" placeholder="Email" required/><br />
          <button onClick={handleAlert} className="text-white bg-gradient-to-r from-green-500 to-lime-500 shadow-md hover:from-green-600 hover:to-lime-600 p-3 rounded-2xl font-medium">Book Now</button>
          </fieldset>
        </form>
      </div>
    </div>
        </div>

      ))
    }
    
  </div>
</div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Plants;

