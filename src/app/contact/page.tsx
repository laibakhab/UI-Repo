import React from 'react';
import Image from 'next/image';
import Rectangle from '../assets/Rectangle 1 (1).png';
import { MapPin, ChevronRightIcon, Phone, Clock, Award, ShieldCheck, Truck, Headphones } from 'lucide-react';
import Logo from '../assets/Meubel House_Logos-05.png';
import Link from 'next/link';




  export default function FeaturesBanner() {
    const features = [
      {
        icon: Award,
        title: "High Quality",
        description: "crafted from top materials"
      },
      {
        icon: ShieldCheck,
        title: "Warranty Protection",
        description: "Over 2 years"
      },
      {
        icon: Truck,
        title: "Free Shipping",
        description: "Order over 150 $"
      },
      {
        icon: Headphones,
        title: "24 / 7 Support",
        description: "Dedicated support"
      }
    ]

  return (
  
    <div>
  
      

      {/* Top Section */}
      <div>
        <Image src={Rectangle} alt="Image" height={316} className="top-[100px] w-full" />

        <div className="absolute bottom-[150px] h-[443px]">
          <Image src={Logo} alt="Meuble-1" className="ml-[682px] mt-[100px]" />
          <h2 className="w-[124px] h-[72px] ml-[622px] font-medium text-[48px] leading-[72px]">Contact</h2>

          <span className="flex items-center">
            <p className="w-[40px] h-[24px] top-[295px] ml-[660px] font-[500px] text-[16px] leading-6">Home</p>
            <ChevronRightIcon
              size={20}
              className="w-5 h-5 sm:cursor-default cursor-pointer sm:hover:text-gray-500 ml-2"
            />
            <p className="w-[41px] h-[24px] top-[295px] left-[740px] font-light text-[16px] leading-6">Contact</p>
          </span>
          
        </div>
      
      
      </div>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Get In Touch With Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          For More Information About Our Product & Services, Please Feel Free To Drop Us
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex gap-4">
            <MapPin className="w-6 h-6 text-gray-600 shrink-0" />
            <div>
              <h2 className="font-semibold mb-2">Address</h2>
              <p className="text-gray-600">
                235 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Phone className="w-6 h-6 text-gray-600 shrink-0" />
            <div>
              <h2 className="font-semibold mb-2">Phone</h2>
              <div className="text-gray-600">
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Clock className="w-6 h-6 text-gray-600 shrink-0" />
            <div>
              <h2 className="font-semibold mb-2">Working Time</h2>
              <div className="text-gray-600">
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label 
              htmlFor="name" 
              className="block mb-2 font-medium"
            >
              Your name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Abc"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B5873A] focus:border-transparent"
            />
          </div>

          <div>
            <label 
              htmlFor="email" 
              className="block mb-2 font-medium"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Abc@def.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B5873A] focus:border-transparent"
            />
          </div>

          <div>
            <label 
              htmlFor="subject" 
              className="block mb-2 font-medium"
            >
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="This is an optional"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B5873A] focus:border-transparent"
            />
          </div>

          <div>
            <label 
              htmlFor="message" 
              className="block mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Hi! I'd like to ask about"
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B5873A] focus:border-transparent resize-y min-h-[120px]"
            />
          </div>

          <button 
            type="submit"
            className="w-[237px] px-4 py-2 text-white bg-[#B5873A] hover:bg-[#96702F] rounded-md transition-colors duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    
    </div>
    <section className="bg-[#FDF6F0] h-[270px]  md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index}
                className="flex items-center gap-4 p-[100px] h-[70px] px-[53px] "
              >
                <div className="flex-shrink-0">
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-gray-800" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>

      
    </div>
  );
};













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

