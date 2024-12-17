// import React from 'react'
// import Image from 'next/image'
// import Image1 from "@/app/assets/Rectangle 1.png"
// import Image2 from "@/app/assets/Meubel House_Logos-05.png"
// import Arrow from "@/app/assets/dashicons_arrow-down-alt2.png"
// import Location from "@/app/assets/Vector (1).png"
// import Phone from "@/app/assets/bxs_phone.png"
// import Time from "@/app/assets/Vector (1).png"
// import Background from "@/app/assets/Rectangle 1.png"
// import Logo from "@/app/assets/Meubel House_Logos-05.png"
// import Trophy from "@/app/assets/trophy 1.png"
// import Guarantee from "@/app/assets/guarantee.png"
// import Shipping from "@/app/assets/guarantee.png"
// import Suport from "@/app/assets/customer-support.png"

// export const Contact = () => {
//     return (
//         <div className='w-full'>
//                                             {/* top */}
//         <div>
//           <div>
//           <Image src={Background} alt='Image' width={1280} height={316} className='top-[100px] '  />
//           </div>
//             <div className="absolute bottom-[150px] h-[443px]  ">
//               <div className='   ml-[600px]  mt-32 ' >
//               <h2 className='w-[124px] h-[72px] top-[221px] left-[658px] font-medium  text-[48px] leading-[72px]'>Contact</h2>
          
//               <span className=" flex items-center ml-8 ">
              
//               <p className='w-[40px] h-[24px] top-[295px] left-[660px]  font-[500px]  text-[16px] leading-6'>Home</p>
//               <Image src={Arrow} alt='icon' height={20} width={20} className='top-[317px] left-[714px]'/>

//               <p className='w-[41px] h-[24px] top-[295px] left-[740px] font-light text-[16px] leading-6'>Contact</p>
//             </span>
//             </div>
//             </div>
//         </div>                                


               
//         <div className='w-[1440px] h-[900px] top-[416px] mt-20'>
            
//                 <h2 className='w-[375px] h-[54px] top-[514px]  font-semibold text-[36px] leading-[54px] text-black ml-[500px]  '>Get In Touch With Us</h2>
//                 <p className='w-[644px] h-[48px]  left-[398px] font-normal text-[16px]  text-[#9F9F9F]  ml-[400px]  '>For More Information About Our Product & Services. Please Feel Free To Drop Us An </p>
//                 <p className='w-[644px] h-[48px]  font-normal mt-[-20px] text-[16px]  text-[#9F9F9F] ml-[450px] mb-0 '> Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
//                 <div className='w-[1058px] h-[923px] top-[637px] left-[191px] '>

//         <div className='w-[1058px] h-[923px] top-[637px] left-[191px] ml-[200px] flex'>

//                     <div className='w-[393px] h-[537px] top-[705px]left-[191px] mt-24 '>
//                         <div className='flex gap-4'>
//                         <Image src={Location} alt='Image' width={22} height={27.59}  />
//                         <h3 className='w-[99px] h-[36px] top-[763px]    left-[297px]'>Address</h3>
//                         </div>
//                         <div >
                        
//                         <p className='w-[212px] h-[72px] top-[799px] mb-10 left-[297px]  ml-9 font-normal text-[16px] leading-6 text-black '>236 5th SE Avenue, New York NY10000, United States</p>
                        
//                         </div>
                    
                    

//                         <div className='gap-4 flex'>
//                         <Image src={Phone} alt='Image' width={30} height={30} className='mr-[-10px] ' />
//                         <h3 className='w-[99px] h-[36px] mr-0 top-[763px] left-[297px]'>Phone</h3>
//                         </div>
//                         <div>
                        
//                         <p className='w-[212px] h-[72px] mb-10 top-[799px] left-[297px] ml-9 font-normal text-[16px] leading-6 text-black '>Mobile: +(84) 546-6789
//                         Hotline: +(84) 456-6789</p>
//                         </div>
                    

                    
//                         <div className='flex gap-4'>
//                         <Image src={Time} alt='Image' width={23} height={23}  />
//                         <h3 className='w-[110px] h-[36px] top-[763px] left-[297px]'>Working Time</h3>
//                         </div>
//                         <div>
                        
//                         <p className='w-[212px] h-[72px] top-[799px] left-[297px] ml-9 font-normal text-[16px] leading-6 text-black '>Monday-Friday: 9:00 - 22:00
//                         Saturday-Sunday: 9:00 - 21:00</p>
//                         </div>
//                     </div>
                   
//                 {/* form */}
//                 <div className=' w-[635px] h-[923px] top-[637px]   pt-24' >
//                     <div className=' w-[531px] h-[741px] top-[756px] left-[666px]  '>

//                         <div className='w-[530px] h-[121px] top-[756px] left-[667px] rounded-[10px]  border-[#9F9F9F] mb-5'>
//                             <p className='w-[111.25px] h-[24px] top-[756px] left-[667px] font-medium text-[16px] leading-6 text-black mb-5'>Your Name</p>
//                             <div className='w-[528.75] h-[75px] top-[802px] left-[668.25px] rounded-[10px] border-[1px] '>
//                             <input type="text" placeholder="Enter your name" className='py-6 px-10  w-[530px] '  />
//                             </div>
//                         </div>

//                         <div className='w-[530px] h-[121px] top-[756px] left-[667px] rounded-[10px]  border-[#9F9F9F] mb-5'>
//                             <p className='w-[111.25px] h-[24px] top-[756px] left-[667px] font-medium text-[16px] leading-6 text-black mb-5'>Email Address</p>
//                             <div className='w-[528.75] h-[75px] top-[802px] left-[668.25px] rounded-[10px] border-[1px] '>
//                             <input type="text" placeholder="Enter your Email Address" className='py-6 px-10  w-[530px]'  />
//                             </div>
//                         </div>

//                         <div className='w-[530px] h-[121px] top-[756px] left-[667px] rounded-[10px]  border-[#9F9F9F] mb-5'>
//                             <p className='w-[111.25px] h-[24px] top-[756px] left-[667px] font-medium text-[16px] leading-6 text-black mb-5'>Subject</p>
//                             <div className='w-[528.75] h-[75px] top-[802px] left-[668.25px] rounded-[10px] border-[1px] '>
//                             <input type="text" placeholder="Enter Subject name" className='py-6 px-10 w-[530px]'   />
//                             </div>
//                         </div>

//                         <div className='w-[530px] h-[121px] top-[756px] left-[667px] rounded-[10px]  border-[#9F9F9F] mb-5'>
//                             <p className='w-[111.25px] h-[24px] top-[756px] left-[667px] font-medium text-[16px] leading-6 text-black mb-5'>Message</p>
//                             <div className='w-[528.75] h-[75px] top-[802px] left-[668.25px] rounded-[10px] border-[1px] '>
//                             <input type="text" placeholder="Enter your comments" className='py-6 px-10  w-[530px]'  />
//                             </div>
//                         </div>
//                         <div className='w-[245px] h-[48px]  ml-[-70px] left-[598px] pt-[25px] pr-[72px] pb-[25px] pl-[72px]   mb-0 mt-0'>
//                     <button className='w-[200px] h-[40px] rounded-xl  font-bold text-[16px]  border-[1px] bg-[#B88E2F] text-white'>Submit</button>
//                         </div>
//                     </div>
//                     </div>
                
                    

//                 </div>

//                 </div>
                
//                 </div>

//                 {/* last */}

//                 <div className='w-full h-[270px] top-[2699px] left-[-3px] justify-between pt-[100px] pb-[100px] bg-[#FAF3EA]'>
//         <div className='w-[1334px] h-[70px] justify-between flex  ml-14'>
          
//           <div className='w-[337px] h-[70px] gap-[10px]  flex'>
//             <Image src={Trophy} alt="icon" width={60} height={60} />
//             <div className='w-[267px] h-[70px] gap-[2px] '>
//               <p className='w-[157px] h-[38px] font-semibold text-[25px] leading-9'>High Quality</p>
//               <p className='w-[267px] h-[30px] font-medium text-[20px] leading-[30px]'>crafted from top materials</p>
//             </div>
//           </div>

//           <div className='w-[328px] h-[70px] gap-[10px]  flex'>
//             <Image src={Guarantee} alt="icon" width={60} height={60} />
//             <div className='w-[267px] h-[70px] gap-[2px] '>
//               <p className='w-[258px] h-[38px] font-semibold text-[25px] leading-9'>Warrant Protection</p>
//               <p className='w-[126px] h-[30px] font-medium text-[20px] leading-[30px]'>Over 2 years</p>
//             </div>
//           </div>

//           <div className='w-[244px] h-[70px] gap-[10px]  flex'>
//             <Image src={Shipping} alt="icon" width={60} height={60} />
//             <div className='w-[267px] h-[70px] gap-[2px] '>
//               <p className='w-[200px] h-[38px] font-semibold text-[25px] leading-9'>Free Shipping</p>
//               <p className='w-[267px] h-[30px] font-medium text-[20px] leading-[30px]'>Oder over 150 $ </p>
//             </div>
//           </div>
          
//           <div className='w-[337px] h-[70px] gap-[10px]  flex'>
//             <Image src={Suport} alt="icon" width={60} height={60} />
//             <div className='w-[267px] h-[70px] gap-[2px] '>
//               <p className='w-[200px] h-[38px] font-semibold text-[25px] leading-9'>24 / 7 Support</p>
//               <p className='w-[267px] h-[30px] font-medium text-[20px] leading-[30px]'>Dedicated Support</p>
//             </div>
//           </div>
//           </div>
//           </div>

                        
        

        
//         </div>
//         )
        
//     }
// export default Contact

import React from 'react';
import Image from 'next/image';
import Background from '@/app/assets/Rectangle 1.png';
import Arrow from '@/app/assets/dashicons_arrow-down-alt2.png';
import Location from '@/app/assets/Vector (1).png';
import Phone from '@/app/assets/bxs_phone.png';
import Time from '@/app/assets/Vector (1).png';
import Trophy from '@/app/assets/trophy 1.png';
import Guarantee from '@/app/assets/guarantee.png';
import Shipping from '@/app/assets/guarantee.png';
import Support from '@/app/assets/customer-support.png';

const Contact = () => {
  return (
    <div className="w-full">
      {/* Top Section */}
      <div className="relative">
        <Image src={Background} alt="Background" width={1280} height={316} className="w-full" />
        <div className="absolute bottom-[150px] left-1/2 transform -translate-x-1/2 text-center">
          <h2 className="text-4xl font-medium mb-2">Contact</h2>
          <div className="flex items-center justify-center">
            <p className="text-lg font-medium">Home</p>
            <Image src={Arrow} alt="Arrow Icon" width={20} height={20} className="mx-2" />
            <p className="text-lg font-light">Contact</p>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-4">Get In Touch With Us</h2>
        <p className="text-center text-gray-500 mb-8">
          For more information about our product & services, feel free to drop us an email. Our staff is
          always here to help you out!
        </p>

        <div className="flex flex-wrap justify-between">
          {/* Contact Details */}
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8">
            {/* Address */}
            <div className="flex items-start mb-6">
              <Image src={Location} alt="Location Icon" width={30} height={30} />
              <div className="ml-4">
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-gray-700">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-start mb-6">
              <Image src={Phone} alt="Phone Icon" width={30} height={30} />
              <div className="ml-4">
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-700">
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
            {/* Working Time */}
            <div className="flex items-start">
              <Image src={Time} alt="Clock Icon" width={30} height={30} />
              <div className="ml-4">
                <h3 className="font-semibold text-lg">Working Time</h3>
                <p className="text-gray-700">
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2 lg:w-2/3">
            <form className="space-y-6">
              <div>
                <label className="block font-medium mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="Enter subject name"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Message</label>
                <textarea
                  rows={5}
                  placeholder="Enter your message"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className='w-full h-[270px] top-[2699px] left-[-3px] justify-between pt-[100px] pb-[100px] bg-[#FAF3EA]'>
        <div className='w-[1320px] h-[70px] justify-between flex  px-10 ml-5'>
          
          <div className='w-[337px] h-[70px] gap-[10px]  flex'>
            <Image src={Trophy} alt="icon" width={60} height={60} />
            <div className='w-[267px] h-[70px] gap-[2px] '>
              <p className='w-[157px] h-[38px] font-semibold text-[25px] leading-9'>High Quality</p>
              <p className='w-[267px] h-[30px] font-medium text-[20px] leading-[30px]'>crafted from top materials</p>
            </div>
          </div>

          <div className='w-[328px] h-[70px] gap-[10px]  flex'>
            <Image src={Guarantee} alt="icon" width={60} height={60} />
            <div className='w-[267px] h-[70px] gap-[2px] '>
              <p className='w-[258px] h-[38px] font-semibold text-[25px] leading-9'>Warrant Protection</p>
              <p className='w-[126px] h-[30px] font-medium text-[20px] leading-[30px]'>Over 2 years</p>
            </div>
          </div>

          <div className='w-[244px] h-[70px] gap-[10px]  flex'>
            <Image src={Shipping} alt="icon" width={60} height={60} />
            <div className='w-[267px] h-[70px] gap-[2px] '>
              <p className='w-[200px] h-[38px] font-semibold text-[25px] leading-9'>Free Shipping</p>
              <p className='w-[267px] h-[30px] font-medium text-[20px] leading-[30px]'>Oder over 150 $ </p>
            </div>
          </div>
          
          <div className='w-[337px] h-[70px] gap-[10px]  flex'>
            <Image src={Support} alt="icon" width={60} height={60} />
            <div className='w-[267px] h-[70px] gap-[2px] '>
              <p className='w-[200px] h-[38px] font-semibold text-[25px] leading-9'>24 / 7 Support</p>
              <p className='w-[267px] h-[30px] font-medium text-[20px] leading-[30px]'>Dedicated Support</p>
            </div>
          </div>

        </div>
      </div>

      </div>
    
  );
};
export default Contact