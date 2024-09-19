import React from 'react';
import Banner from '../components/Banner.jsx';
import BestSellerBooks from './BestSellerBooks.jsx';
import FavBook from './FavBook.jsx';
import PromoBanner from './PromoBanner.jsx';
import OtherBooks from './OtherBooks.jsx';
import Review from './Review.jsx';


const Home = () => {
  return (
    <div>
      <Banner />
      <BestSellerBooks />
      <FavBook />
      <PromoBanner />
      <OtherBooks />
      <Review />
    </div>
  );
};

export default Home;
