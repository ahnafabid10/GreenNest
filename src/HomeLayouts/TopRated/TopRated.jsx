import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { NavLink } from 'react-router';

const TopRated = () => {
    const [plants, setPlants] = useState([])
    useEffect(()=> {
        fetch('/plants.json')
      .then(res => res.json())
      .then(data => setPlants(data))
    }, [])

    const top3Plants = plants.filter(p=> p.rating >=4).slice(0,4)
    console.log(top3Plants)
    
    return (
        <div className='bg-green-900'>
            <h2 className='text-4xl font-medium text-center py-10'>Top Rated Indoor Plants </h2>
            <div className='pb-20'>
        <div className='max-w-[1440px] mx-auto'>
                <div className='justify-between gap-5 grid grid-cols-1 md:grid-cols-4'>
                {/* 01 */}
                {
                    top3Plants.map((plants) =>(
                        <div className="card bg-[#ffffff] max-w-[350px] object-cover p-3 shadow-sm">
  <figure className="px-10 pt-10">

    <img
    
      src={plants.image}
      alt="Shoes"
      className="rounded-xl w-full h-[300px]" />
  </figure>
  <div className="items-center w-full text-black text-center">
    <h2 className="text-xl font-bold py-3 text-center">{plants.plantName}</h2>
    <p className="text-black pb-3 text-center">{plants.description}</p>
    <div className="card-actions flex justify-between items-center">
      <p className="btn-primary ml-10 text-4xl font-bold">${plants.price}</p>
      <p className="border-2 flex items-center justify-center rounded-lg px-3 py-1 btn-primary mr-10"><FaStar/>{plants.rating}</p>

    </div>
    <NavLink 
  to="/plantsDetails"
  className="inline-block mt-5 px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-green-500 to-lime-500 shadow-md hover:from-green-600 hover:to-lime-600"
>
  View Details
</NavLink>
  </div>
                </div>
                    )

                    )
                }
                
            </div>
            </div>
            </div>

            
            
        </div>
    );
};

export default TopRated;