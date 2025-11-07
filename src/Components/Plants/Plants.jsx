// import React from 'react';

// const Plants = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Plants;

import React, { useState } from "react";
import { useParams } from "react-router";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// Example JSON data (in real app, fetch from plants.json)
const plantsData = [
  {
    id: "1",
    name: "Snake Plant",
    description: "Great for indoor air purification.",
    price: 25,
    rating: 4.5,
    stock: 10,
    image: "https://i.ibb.co/album/SnakePlant.jpg"
  },
  {
    id: "2",
    name: "Aloe Vera",
    description: "Easy to maintain, medicinal plant.",
    price: 20,
    rating: 4.2,
    stock: 15,
    image: "https://i.ibb.co/album/AloeVera.jpg"
  }
];

const PlantDetails = () => {
  const { id } = useParams();
  const plant = plantsData.find(p => p.id === id);

  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Successful!");
    setFormData({ name: "", email: "" });
  };

  if (!plant) return <div>Plant not found</div>;

  return (
    <div className="max-w-3xl mx-auto p-5">
      <img src={plant.image} alt={plant.name} className="w-full h-96 object-cover rounded" />
      <h2 className="text-3xl font-bold mt-5">{plant.plantName}</h2>
      <p className="mt-2">{plant.description}</p>
      <p className="mt-1">Price: ${plant.price}</p>
      <p>Rating: {plant.rating} ⭐</p>
      <p>Stock: {plant.stock}</p>

      <div className="mt-5 p-5 border rounded">
        <h3 className="text-xl font-semibold mb-3">Book Consultation</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Your Name" 
            required 
            className="border p-2 rounded"
          />
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Your Email" 
            required 
            className="border p-2 rounded"
          />
          <button 
            type="submit" 
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlantDetails;
