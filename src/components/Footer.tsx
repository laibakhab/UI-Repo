import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t mt-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-between">
          {/* Brand Info */}
          <div className="mb-8 lg:mb-0">
            <h3 className="text-xl font-bold mb-4 text-black">Funiro.</h3>
            <p className="text-gray-500 text-sm">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap gap-16">
            <div>
              <h4 className="text-gray-500 text-sm font-medium mb-4">Link</h4>
              <ul>
                <li className="text-black text-sm mb-2">Home</li>
                <li className="text-black text-sm mb-2">Shop</li>
                <li className="text-black text-sm mb-2">About</li>
                <li className="text-black text-sm">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-500 text-sm font-medium mb-4">Help</h4>
              <ul>
                <li className="text-black text-sm mb-2">Payment Options</li>
                <li className="text-black text-sm mb-2">Returns</li>
                <li className="text-black text-sm">Privacy Policy</li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="w-full sm:w-auto">
            <h4 className="text-gray-500 text-sm font-medium mb-4">Newsletter</h4>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Enter your Email Address"
                className="flex-1 px-4 py-2 text-sm border rounded"
              />
              <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12">
          <hr className="border-gray-300" />
          <p className="text-gray-500 text-sm text-center mt-4">
            2023 Funiro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

