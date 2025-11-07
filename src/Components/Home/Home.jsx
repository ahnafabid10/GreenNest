import React from 'react';
import Slider from '../../HomeLayouts/Swiper/Slider';
import TopRated from '../../HomeLayouts/TopRated/TopRated';
import PlantCareTips from '../../HomeLayouts/PlantCareTips/PlantCareTips';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TopRated></TopRated>
            <PlantCareTips></PlantCareTips>
        </div>
    );
};

export default Home;