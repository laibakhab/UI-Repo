import React from 'react';
import Image from 'next/image';
import Logo from "@/app/assets/Frame 168.png";
import Contact from "@/app/assets/mdi_account-alert-outline.png";
import Search from "@/app/assets/akar-icons_search.png";
import Heart from "@/app/assets/akar-icons_heart.png";
import Shoping from "@/app/assets/ant-design_shopping-cart-outlined.png";
import Link from 'next/link';

export const Header = () => {
  return (
    <div className="w-full bg-white">
      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <div>
          <Image src={Logo} alt="Logo" width={126} height={40} />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <Link href ="#" ><li className="hover:text-gray-900 cursor-pointer">Home</li></Link>
            <Link href ="/shop" ><li className="hover:text-gray-900 cursor-pointer">Shop</li></Link>
            <Link href ="/blog" ><li className="hover:text-gray-900 cursor-pointer">Blog</li></Link>
            <Link href ="/contact" ><li className="hover:text-gray-900 cursor-pointer">Contact</li></Link>
          </ul>
        </div>

        {/* Icons */}
        <div className="flex space-x-6">
          <Image src={Contact} alt="Contact Icon" width={28} height={28} />
          <Image src={Search} alt="Search Icon" width={28} height={28} />
          <Image src={Heart} alt="Heart Icon" width={28} height={28} />
          <Image src={Shoping} alt="Shopping Icon" width={28} height={28} />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-between items-center px-4 h-20">
        <Image src={Logo} alt="Logo" width={126} height={40} />
        {/* Hamburger Menu */}
        <div className="space-y-1 cursor-pointer">
          <div className="w-6 h-1 bg-gray-700"></div>
          <div className="w-6 h-1 bg-gray-700"></div>
          <div className="w-6 h-1 bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;






