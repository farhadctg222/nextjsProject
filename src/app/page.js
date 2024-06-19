import React from 'react';
import Banner from './ui/Banner';
import Service from './ui/Service';
import Philosopy from './ui/Philosopy';
import Book from './ui/Book';
import Team from './ui/Team';

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
      <Philosopy></Philosopy>
      <Book></Book>
      <Team></Team>
      
    </div>
  );
};

export default page;