import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import MainCard from './components/MainCard/MainCard';
import ProductContainer from './components/ProductPhone/ProductContainer';

const HomeComponents = () => {
  return (
    <div>
      <HeroSection />
      <MainCard />
      <ProductContainer />
    </div>
  );
};

export default HomeComponents;
