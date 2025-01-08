import React from 'react';
import Image from 'next/image';
import Background from "@/app/assets/scandinavian-interior-mockup-wall-decal-background 1 (1).png";
import Dining from "@/app/assets/Mask Group.png";
import Living from "@/app/assets/Image-living room.png";
import Bedroom from "@/app/assets/Mask Group (2).png";
import Image1 from "@/app/assets/Images (7).png";
import Image2 from "@/app/assets/image 2.png";
import Image3 from "@/app/assets/Images.png";
import Image4 from "@/app/assets/image 4.png";
import Grifo from "@/app/assets/Images (2).png";
import Image5 from "@/app/assets/image 6.png";
import Image6 from "@/app/assets/Images (4).png";
import Image7 from "@/app/assets/Images (5).png";
import Image8 from "@/app/assets/Rectangle 40.png"
import Image9 from "@/app/assets/Rectangle 43.png"
import Image10 from "@/app/assets/Rectangle 45.png"



const BrowseRange = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      {/* First Section */}
      <div className="relative h-[500px] w-full lg:h-[80vh]">
        <Image src={Background} alt="Background Image" layout="fill" objectFit="cover" className="absolute w-full" />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 p-6 lg:p-12  bg-[#FFF5EB] rounded-lg w-11/12 max-w-md lg:max-w-lg">
          <span className="text-sm font-medium text-gray-700">New Arrival</span>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#B8860B] mt-4">
            Discover Our <br /> New Collection!!!!!!!!
          </h1>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="mt-6 bg-[#B8860B] hover:bg-[#8B6508] text-white py-2 px-6 rounded-md">
            BUY NOW
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div className="mt-20 text-center">
        <h2 className="text-xl md:text-3xl font-bold text-gray-800">Browse The Range</h2>
        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center">
            <Image src={Dining} alt="Dining" width={300} height={200} className="mx-auto" />
            <p className="text-lg font-semibold mt-4">Dining</p>
          </div>
          <div className="text-center">
            <Image src={Living} alt="Living" width={300} height={200} className="mx-auto" />
            <p className="text-lg font-semibold mt-4">Living</p>
          </div>
          <div className="text-center">
            <Image src={Bedroom} alt="Bedroom" width={300} height={200} className="mx-auto" />
            <p className="text-lg font-semibold mt-4">Bedroom</p>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="mt-20">
        <h2 className="text-xl md:text-3xl font-bold text-center text-gray-800">Our Products</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[Image1, Image2, Image3, Image4, Grifo, Image5, Image6, Image7].map((img, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
              <Image src={img} alt={`Product ${index + 1}`} width={285} height={301} className="w-full h-auto" />
              <div className="mt-4 text-center">
                <p className="text-lg font-semibold text-gray-800">Product Name</p>
                <p className="text-sm text-gray-600 mt-1">Short description</p>
                <p className="text-md font-semibold text-gray-800 mt-2">Rp 2.500.000</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="border border-[#B88E2F] text-[#B88E2F] px-6 py-2 rounded-md">
            Show More
          </button>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="mt-20 flex flex-col lg:flex-row items-center gap-10 bg-[#FCF8F3]" >
        <div className="text-center lg:text-left">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800">50+ Beautiful rooms inspiration</h2>
          <p className="text-gray-600 mt-4">
            Our designer already made a lot of beautiful prototypes of rooms that inspire you.
          </p>
          <button className="mt-6 bg-[#B88E2F] text-white py-2 px-6 rounded-md">
            Explore More
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image src={Image1} alt="Room Inspiration 1" width={400} height={300} className="rounded-lg" />
          <Image src={Image2} alt="Room Inspiration 2" width={400} height={300} className="rounded-lg" />
        </div>
      </div>


   {/* fifth section */}

   <div className="w-full max-w-[1450px] mx-auto h-auto px-4">
  {/* Text Section */}
  <div className="text-center my-8">
    <p className="text-[16px] sm:text-[20px] font-semibold leading-[24px] sm:leading-[30px]">
      Share Your setup with
    </p>
    <h2 className="text-[24px] sm:text-[40px] font-bold leading-[32px] sm:leading-[48px]">
      #FuniroFurniture
    </h2>
  </div>
  
  {/* Images Section */}
  <div className="space-y-8">
    {/* First Row of Images */}
    <div className="flex flex-wrap justify-center gap-4">
      <Image
        src={Image2}
        alt="Image"
        width={300}
        className="mt-4 sm:mt-10 w-[150px] sm:w-[300px]"
      />
      <Image
        src={Image3}
        alt="Image"
        width={300}
        className="mb-4 sm:mb-10 w-[150px] sm:w-[300px]"
      />
      <Image
        src={Image4}
        alt="Image"
        width={400}
        className="mt-4 sm:mt-10 w-[200px] sm:w-[400px]"
      />
      <Image
        src={Image5}
        alt="Image"
        width={200}
        className="w-[100px] sm:w-[200px]"
      />
    </div>

    {/* Second Row of Images */}
    <div className="flex flex-wrap justify-center gap-4">
      <Image
        src={Image7}
        alt="Image"
        width={451}
        className="w-[200px] sm:w-[451px]"
      />
      <Image
        src={Image8}
        alt="Image"
        width={295}
        className="w-[150px] sm:w-[295px]"
      />
      <Image
        src={Image9}
        alt="Image"
        width={200}
        className="w-[100px] sm:w-[200px] mb-4 sm:mb-20"
      />
      <Image
        src={Image10}
        alt="Image"
        width={425}
        className="w-[150px] sm:w-[200px]  mb-4 sm:mb-10"
      />
    </div>
  </div>
</div>

















    </div>
  );
};

export default BrowseRange;
