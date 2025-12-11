// src/pages/Home.jsx
import React from "react";
import Carousel from "../../components/Carousel";
import Features  from "../../components/Features";

const images = [
  "https://www.edesk.com/wp-content/uploads/2021/03/find-trending-products-sell-ecommerce.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT45jLsov4JCPn5MKOKyDX3JWf8FAH7XYMu0A&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJnb8mc_vDhhVQait_M9Ne4llJXGoPCL4YA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjG4cGATKM5wXSjBLXIs2HsiRFO-BhP4hVhw&s",
  "https://cavemanorganics.pk/cdn/shop/articles/image1.png?v=1707667951",
  "https://thaicharmbeauty.com/cdn/shop/collections/Organic_Products.webp?v=1721743767",
  "https://cavemanorganics.pk/cdn/shop/articles/image1_ea58624e-23ef-4a94-ab04-13916e4d45a0.png?v=1707668880",
  "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/wi/art/6b233f78-584-c65ac76d37.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkFuHeuR-m5GBBZ8FseioNCyowctPk9C_YA&s",
  
];

const Home = () => {
  return (
     <div className="w-full min-h-screen bg-[#ffffff] flex flex-col">
      <div className="w-full h-[35rem]">
        <Carousel images={images} />
      </div>

      <div className="pt-16 px-10">
        <Features />
      </div>
    </div>
  );
};

export default Home;
