import React from "react";

const Experts = () => {
  const expertsTeam = [
    {
      id: 1,
      name: "Sophia Greenfield",
      specialization: "Indoor Plant Specialist",
      bio: "Sophia has 8+ years of experience in designing and maintaining indoor gardens. She helps people create green corners even in small apartments.",
      image: "https://i.ibb.co.com/Dq796Y0/images.jpg",
    },
    {
      id: 2,
      name: "Liam Evergreen",
      specialization: "Soil & Fertilizer Expert",
      bio: "Liam focuses on organic fertilizers and soil health. His guidance ensures plants grow stronger with natural nutrition and proper care.",
      image: "https://i.ibb.co.com/3YfgRCXQ/istockphoto-1192838871-612x612.jpg",
    },
    {
      id: 3,
      name: "Ava Bloom",
      specialization: "Succulent & Cactus Care Expert",
      bio: "Ava is passionate about low-maintenance plants. She shares tips on watering cycles, sunlight exposure, and how to keep succulents thriving all year.",
      image: "https://i.ibb.co.com/XkdNs5c2/21.jpg",
    },
    {
      id: 4,
      name: "Noah Leafson",
      specialization: "Plant Doctor & Pest Control Advisor",
      bio: "Noah helps plant lovers identify common leaf problems, treat pests naturally, and revive unhealthy plants with easy home remedies.",
      image: "https://i.ibb.co.com/DfdJkq69/best-houseplants-for-men-2000x.webp",
    },
  ];

  return (
            <div className='bg-[#ffffff]'>
                <h2 className='text-4xl text-green-800 font-medium text-center py-10'>Meet With Experts </h2>
                <div className='pb-20'>
            <div className='max-w-[1440px] mx-auto'>
                    <div className='justify-between gap-5 grid grid-cols-1 md:grid-cols-4'>
                    {
                        expertsTeam.map((e) =>(
                            <div className="card bg-green-50 max-w-[350px] object-cover p-3 shadow-sm">
      <figure className="px-10 pt-10">
    
        <img
        
          src={e.image}
          alt="Shoes"
          className="rounded-xl w-full h-[300px]" />
      </figure>
      <div className="items-center w-full text-black text-center">
        <h2 className="text-xl text-green-800 font-bold py-3 text-center">{e.name}</h2>
        <p className="font-medium text-green-600 pb-3 text-center">{e.specialization}</p>
        <p className="text-black pb-3 text-center">{e.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;