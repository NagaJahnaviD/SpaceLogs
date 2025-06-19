import React from 'react';
import GridMotion from './GridMotion';

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGtoqvB7JbcHBczyLi_QXJErzPCW0SvfUnRIJXDIcvgq4pcjd6enGW3O0ro68Ac-x81s&usqp=CAU',
  'https://everwallpaper.com/cdn/shop/products/dark-universe-galaxy-photo-wallpaper_8b806020-c509-4bf7-adf9-683174ddbba7.jpg?v=1658731376',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPK9Tq--oW3YNFktkontKsMgezsxAxFk6BUQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxNlcwMo1tMQKnFOn48UPXAzgdAy-rYZheQ&s',
];

export default function GridGallery() {
  return (
    <section className="w-full h-screen relative overflow-hidden">
      {/* Motion grid in the background */}
      <GridMotion items={images} gradientColor="#000000" />

      {/* Text content on top */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-4 ">
        <h1 className="text-4xl md:text-8xl font-extrabold drop-shadow-lg">Everything you need to know</h1>
        <h2 className="text-xl md:text-3xl mt-2 font-medium drop-shadow">About our gigantic universe</h2>
      </div>
    </section>
  );
}
