import React from 'react';
import Slider from '../../HomeLayouts/Swiper/Slider';
import TopRated from '../../HomeLayouts/TopRated/TopRated';
import PlantCareTips from '../../HomeLayouts/PlantCareTips/PlantCareTips';
import GreenExperts from '../../HomeLayouts/GreenExperts/GreenExperts';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TopRated></TopRated>
            <PlantCareTips></PlantCareTips>
            <GreenExperts></GreenExperts>
        </div>
    );
};

export default Home;