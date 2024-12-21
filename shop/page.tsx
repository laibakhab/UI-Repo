import React from 'react'
import Image from 'next/image'
import Image1 from "@/app/assets/system-uicons_filtering.png"
import Image2 from "@/app/assets/ci_grid-big-round.png"
import Image3 from "@/app/assets/bi_view-list.png"
import Background from "@/app/assets/Rectangle 1.png"
import Arrow from "@/app/assets/dashicons_arrow-down-alt2.png"
import Image4 from "@/app/assets/Images (7).png"
import Trophy from "@/app/assets/trophy 1.png"
import Guarantee from "@/app/assets/guarantee.png"
import Shipping from "@/app/assets/guarantee.png"
import Suport from "@/app/assets/customer-support.png"



 const Shop = () => {
  return (
    <div>
                        {/* top */}
        <div>
          <div className='relative'>
          <Image src={Background} alt='Image' width={1280} height={316} className='w-full'   />
          </div>
            <div className="absolute bottom-[150px] h-[443px] ">
              <div className='   ml-[620px]  mb-10 mt-28' >
              <h2 className='w-[124px] h-[72px] top-[221px] left-[658px] font-medium  text-[48px] leading-[72px]'>Shop</h2>
          
              <span className=" flex items-center ">
              
              <p className='w-[40px] h-[24px] top-[295px] left-[660px]  font-[500px]  text-[16px] leading-6'>Home</p>
              <Image src={Arrow} alt='icon' height={20} width={20} className='top-[317px] left-[714px]'/>

              <p className='w-[41px] h-[24px] top-[295px] left-[740px] font-light text-[16px] leading-6'>Shop</p>
            </span>
            </div>
            </div>
        </div>
   

        {/* second nav */}

    <div className='w-full h-[100px] top-[417px]  '>
    <div className='flex'>        
            <div className='w-[85px]h-[30px] top-[452px] ml-60 left-[98px] mt-10 flex gap-5'>
            {/* <Image src={Image1} alt='Image' width={25} height={25} className='top-[454px] left-[98px]  ' /> */}
            <p className='w-[48px] h-[30px] top-[452px] left-[135px] font-normal text-[20px] leading-[30px] text-black'> Filter</p>
            <div >
            <Image src={Image2} alt='Image' width={28} height={28} className='top-[453px] left-[206px]  ' />
            </div>
            <div >
            <Image src={Image3} alt='Image' width={24} height={24} className='top-[455px] left-[258px]  ' />
            </div>
            <div className='w-[237px] h-[37px] top-[448px] left-[312px] '>
              
            <p className='w-[203px] h-[24px] top-[455px] left-[346px] font-normal leading-6 '>Showing 1–16 of 32 results</p>
            <div  className='w-[37px] top-[448px] left-[312px] rotate-[-90]'/>
            </div>
            
    </div>        
        <div className='flex mt-9'>

          <div className='gap-10'>
              <div className='w-[126px] h-[55px] top-[439px] ml-40  flex'>
                <p className='w-[80px] h-[30px] top-[451px] left-[897px] font-normal text-[20px] leading-[30px]'> Show</p>
                <div className=' w-[55px] h-[55px] top-[439px] left-[968px]  '>
                    <input type="text" placeholder='16' className='w-[30px] h-[30px] top-[451px] left-[986px] font-normal text-[20px] leading-[30px]' />
                </div>
              </div>
          </div>

          <div className='gap-10 ml-32'>
            <div className='w-[288px] h-[55px]  flex '>
                <p className='w-[100px]  gap-[55px] h-[30px] top-[451px] left-[897px] font-normal text-[20px] leading-[30px]'> Short by</p>
                <div className=' w-[55px] h-[55px] top-[439px] left-[968px]  '>
                    <input type="text" placeholder='Default' className='w-[100px] h-[30px] top-[451px] left-[986px] font-normal text-[20px] leading-[30px]' />
                </div>
            </div>
          </div>

        </div>

    </div>
    </div>
       
       {/* end */}
      <div className='w-full h-[2051px]  '>
      <div className='w-[1244px] h-[2034px] top-[17px]  gap-[40px]  ml-14 mt-10'>
          <div className='w-[1236px] h-[446px] gap-[35px] mb-10  flex '>
              <div className='w-[285px] h-[301px] '>
                    <Image src={Image4} alt='Image' width={285} height={301} />
                  <div className='w-[285px] h-[145px] top-[301px] bg-[#d1d2d3]'>
                    <div className='w-[138px] h-[61px] top-[317px] left-[16px] '>
                    <p className='w-[123px] h-[29px] top-[317px] left-[16px] font-semibold text-[24px] leading-7 text-[#3A3A3A]  ml-5'>Syltherine</p>
                    <p className='w-[138px] h-[24px] top-[354px]  text-[#898989] left-[16px] text-[16px] leading-6 ml-5'>Stylish cafe chair</p>
                    <div className='w-[249px] h-[30px] top-[386px] left-[16px]  flex'>
                    <p className='w-[131px] h-[30px] font-semibold text-[20px] leading-8 text-[#3A3A3A] ml-5'>Rp.2.500.000</p>
                    <p className='w-[102px] h-[24px] font-normal text-[16px] leading-6 line-through ml-4 mt-1'>Rp.3.500.000</p>
                    </div>
                  </div>
              </div>
            </div>


            <div className='w-[285px] h-[301px] '>
                    <Image src={Image4} alt='Image' width={285} height={301} />
                  <div className='w-[285px] h-[145px] top-[301px] bg-[#d1d2d3]'>
                    <div className='w-[138px] h-[61px] top-[317px] left-[16px] '>
                    <p className='w-[123px] h-[29px] top-[317px] left-[16px] font-semibold text-[24px] leading-7 text-[#3A3A3A]  ml-5'>Syltherine</p>
                    <p className='w-[138px] h-[24px] top-[354px]  text-[#898989] left-[16px] text-[16px] leading-6 ml-5'>Stylish cafe chair</p>
                    <div className='w-[249px] h-[30px] top-[386px] left-[16px]  flex'>
                    <p className='w-[131px] h-[30px] font-semibold text-[20px] leading-8 text-[#3A3A3A] ml-5'>Rp.2.500.000</p>
                    <p className='w-[102px] h-[24px] font-normal text-[16px] leading-6 line-through ml-4 mt-1'>Rp.3.500.000</p>
                    </div>
                  </div>
              </div>
            </div>


            <div className='w-[285px] h-[301px] '>
                    <Image src={Image4} alt='Image' width={285} height={301} />
                  <div className='w-[285px] h-[145px] top-[301px] bg-[#d1d2d3]'>
                    <div className='w-[138px] h-[61px] top-[317px] left-[16px] '>
                    <p className='w-[123px] h-[29px] top-[317px] left-[16px] font-semibold text-[24px] leading-7 text-[#3A3A3A]  ml-5'>Syltherine</p>
                    <p className='w-[138px] h-[24px] top-[354px]  text-[#898989] left-[16px] text-[16px] leading-6 ml-5'>Stylish cafe chair</p>
                    <div className='w-[249px] h-[30px] top-[386px] left-[16px]  flex'>
                    <p className='w-[131px] h-[30px] font-semibold text-[20px] leading-8 text-[#3A3A3A] ml-5'>Rp.2.500.000</p>
                    <p className='w-[102px] h-[24px] font-normal text-[16px] leading-6 line-through ml-4 mt-1'>Rp.3.500.000</p>
                    </div>
                  </div>
              </div>
            </div>


            <div className='w-[285px] h-[301px] '>
                    <Image src={Image4} alt='Image' width={285} height={301} />
                  <div className='w-[285px] h-[145px] top-[301px] bg-[#d1d2d3]'>
                    <div className='w-[138px] h-[61px] top-[317px] left-[16px] '>
                    <p className='w-[123px] h-[29px] top-[317px] left-[16px] font-semibold text-[24px] leading-7 text-[#3A3A3A]  ml-5'>Syltherine</p>
                    <p className='w-[138px] h-[24px] top-[354px]  text-[#898989] left-[16px] text-[16px] leading-6 ml-5'>Stylish cafe chair</p>
                    <div className='w-[249px] h-[30px] top-[386px] left-[16px]  flex'>
                    <p className='w-[131px] h-[30px] font-semibold text-[20px] leading-8 text-[#3A3A3A] ml-5'>Rp.2.500.000</p>
                    <p className='w-[102px] h-[24px] font-normal text-[16px] leading-6 line-through ml-4 mt-1'>Rp.3.500.000</p>
                    </div>
                  </div>
              </div>
            </div>


            
          </div>


          <div className='w-[1236px] h-[446px] gap-[35px]  mb-10 flex '>
              <div className='w-[285px] h-[301px] '>
                    <Image src={Image4} alt='Image' width={285} height={301} />
                  <div className='w-[285px] h-[145px] top-[301px] bg-[#d1d2d3]'>
                    <div className='w-[138px] h-[61px] top-[317px] left-[16px] '>
                    <p className='w-[123px] h-[29px] top-[317px] left-[16px] font-semibold text-[24px] leading-7 text-[#3A3A3A]  ml-5'>Syltherine</p>
                    <p className='w-[138px] h-[24px] top-[354px]  text-[#898989] left-[16px] text-[16px] leading-6 ml-5'>Stylish cafe chair</p>
                    <div className='w-[249px] h-[30px] top-[386px] left-[16px]  flex'>
                    <p className='w-[131px] h-[30px] font-semibold text-[20px] leading-8 text-[#3A3A3A] ml-5'>Rp.2.500.000</p>
                    <p className='w-[102px] h-[24px] font-normal text-[16px] leading-6 line-through ml-4 mt-1'>Rp.3.500.000</p>
                    </div>
                  </div>
              </div>
            </div>


            <div className='w-[285px] h-[301px] '>
                    <Image src={Image4} alt='Image' width={285} height={301} />
                  <div className='w-[285px] h-[145px] top-[301px] bg-[#d1d2d3]'>
                    <div className='w-[138px] h-[61px] top-[317px] left-[16px] '>
                    <p className='w-[123px] h-[29px] top-[317px] left-[16px] font-semibold text-[24px] leading-7 text-[#3A3A3A]  ml-5'>Syltherine</p>
                    <p className='w-[138px] h-[24px] top-[354px]  text-[#898989] left-[16px] text-[16px] leading-6 ml-5'>Stylish cafe chair</p>
                    <div className='w-[249px] h-[30px] top-[386px] left-[16px]  flex'>
                    <p className='w-[131px] h-[30px] font-semibold text-[20px] leading-8 text-[#3A3A3A] ml-5'>Rp.2.500.000</p>
                    <p className='w-[102px] h-[24px] font-normal text-[16px] leading-6 line-through ml-4 mt-1'>Rp.3.500.000</p>
                    </div>
                  </div>
              </div>
            </div>


            <div className='w-[285px] h-[301px] '>
                    <Image src={Image4} alt='Image' width={285} height={301} />
                  <div className='w-[285px] h-[145px] top-[301px] bg-[#d1d2d3]'>
                    <div className='w-[138px] h-[61px] top-[317px] left-[16px] '>
                    <p className='w-[123px] h-[29px] top-[317px] left-[16px] font-semibold text-[24px] leading-7 text-[#3A3A3A]  ml-5'>Syltherine</p>
                    <p className='w-[138px] h-[24px] top-[354px]  text-[#898989] left-[16px] text-[16px] leading-6 ml-5'>Stylish cafe chair</p>
                    <div className='w-[249px] h-[30px] top-[386px] left-[16px]  flex'>
                    <p className='w-[131px] h-[30px] font-semibold text-[20px] leading-8 text-[#3A3A3A] ml-5'>Rp.2.500.000</p>
                    <p className='w-[102px] h-[24px] font-normal text-[16px] leading-6 line-through ml-4 mt-1'>Rp.3.500.000</p>
                    </div>
                  </div>
              </div>
            </div>


            <div className='w-[285px] h-[301px] '>
                    <Image src={Image4} alt='Image' width={285} height={301} />
                  <div className='w-[285px] h-[145px] top-[301px] bg-[#d1d2d3]'>
                    <div className='w-[138px] h-[61px] top-[317px] left-[16px] '>
                    <p className='w-[123px] h-[29px] top-[317px] left-[16px] font-semibold text-[24px] leading-7 text-[#3A3A3A]  ml-5'>Syltherine</p>
                    <p className='w-[138px] h-[24px] top-[354px]  text-[#898989] left-[16px] text-[16px] leading-6 ml-5'>Stylish cafe chair</p>
                    <div className='w-[249px] h-[30px] top-[386px] left-[16px]  flex'>
                    <p className='w-[131px] h-[30px] font-semibold text-[20px] leading-8 text-[#3A3A3A] ml-5'>Rp.2.500.000</p>
                    <p className='w-[102px] h-[24px] font-normal text-[16px] leading-6 line-through ml-4 mt-1'>Rp.3.500.000</p>
                    </div>
                  </div>
              </div>
            </div>


            
          </div>

          <div className='w-[1236px] h-[446px] gap-[35px]  mb-10 flex '>
              <div className='w-[285px] h-[301px] '>
                    <Image src={Image4} alt='Image' width={285} height={301} />
                  <div className='w-[285px] h-[145px] top-[301px] bg-[#d1d2d3]'>
                    <div className='w-[138px] h-[61px] top-[317px] left-[16px] '>
                    <p className='w-[123px] h-[29px] top-[317px] left-[16px] font-semibold text-[24px] leading-7 text-[#3A3A3A]  ml-5'>Syltherine</p>
                    <p className='w-[138px] h-[24px] top-[354px]  text-[#898989] left-[16px] text-[16px] leading-6 ml-5'>Stylish cafe chair</p>
                    <div className='w-[249px] h-[30px] top-[386px] left-[16px]  flex'>
                    <p className='w-[131px] h-[30px] font-semibold text-[20px] leading-8 text-[#3A3A3A] ml-5'>Rp.2.500.000</p>
                    <p className='w-[102px] h-[24px] font-normal text-[16px] leading-6 line-through ml-4 mt-1'>Rp.3.500.000</p>
                    </div>
                  </div>
              </div>
            </div>


            <div className='w-[285px] h-[301px] '>
                    <Image src={Image4} alt='Image' width={285} height={301} />
                  <div className='w-[285px] h-[145px] top-[301px] bg-[#d1d2d3]'>
                    <div className='w-[138px] h-[61px] top-[317px] left-[16px] '>
                    <p className='w-[123px] h-[29px] top-[317px] left-[16px] font-semibold text-[24px] leading-7 text-[#3A3A3A]  ml-5'>Syltherine</p>
                    <p className='w-[138px] h-[24px] top-[354px]  text-[#898989] left-[16px] text-[16px] leading-6 ml-5'>Stylish cafe chair</p>
                    <div className='w-[249px] h-[30px] top-[386px] left-[16px]  flex'>
                    <p className='w-[131px] h-[30px] font-semibold text-[20px] leading-8 text-[#3A3A3A] ml-5'>Rp.2.500.000</p>
                    <p className='w-[102px] h-[24px] font-normal text-[16px] leading-6 line-through ml-4 mt-1'>Rp.3.500.000</p>
                    </div>
                  </div>
              </div>
            </div>


            <div className='w-[285px] h-[301px] '>
                    <Image src={Image4} alt='Image' width={285} height={301} />
                  <div className='w-[285px] h-[145px] top-[301px] bg-[#d1d2d3]'>
                    <div className='w-[138px] h-[61px] top-[317px] left-[16px] '>
                    <p className='w-[123px] h-[29px] top-[317px] left-[16px] font-semibold text-[24px] leading-7 text-[#3A3A3A]  ml-5'>Syltherine</p>
                    <p className='w-[138px] h-[24px] top-[354px]  text-[#898989] left-[16px] text-[16px] leading-6 ml-5'>Stylish cafe chair</p>
                    <div className='w-[249px] h-[30px] top-[386px] left-[16px]  flex'>
                    <p className='w-[131px] h-[30px] font-semibold text-[20px] leading-8 text-[#3A3A3A] ml-5'>Rp.2.500.000</p>
                    <p className='w-[102px] h-[24px] font-normal text-[16px] leading-6 line-through ml-4 mt-1'>Rp.3.500.000</p>
                    </div>
                  </div>
              </div>
            </div>


            <div className='w-[285px] h-[301px] '>
                    <Image src={Image4} alt='Image' width={285} height={301} />
                  <div className='w-[285px] h-[145px] top-[301px] bg-[#d1d2d3]'>
                    <div className='w-[138px] h-[61px] top-[317px] left-[16px] '>
                    <p className='w-[123px] h-[29px] top-[317px] left-[16px] font-semibold text-[24px] leading-7 text-[#3A3A3A]  ml-5'>Syltherine</p>
                    <p className='w-[138px] h-[24px] top-[354px]  text-[#898989] left-[16px] text-[16px] leading-6 ml-5'>Stylish cafe chair</p>
                    <div className='w-[249px] h-[30px] top-[386px] left-[16px]  flex'>
                    <p className='w-[131px] h-[30px] font-semibold text-[20px] leading-8 text-[#3A3A3A] ml-5'>Rp.2.500.000</p>
                    <p className='w-[102px] h-[24px] font-normal text-[16px] leading-6 line-through ml-4 mt-1'>Rp.3.500.000</p>
                    </div>
                  </div>
              </div>
            </div>


            
          </div>

          <div className='w-[1236px] h-[446px] gap-[35px] mb-10  flex '>
              <div className='w-[285px] h-[301px] '>
                    <Image src={Image4} alt='Image' width={285} height={301} />
                  <div className='w-[285px] h-[145px] top-[301px] bg-[#d1d2d3]'>
                    <div className='w-[138px] h-[61px] top-[317px] left-[16px] '>
                    <p className='w-[123px] h-[29px] top-[317px] left-[16px] font-semibold text-[24px] leading-7 text-[#3A3A3A]  ml-5'>Syltherine</p>
                    <p className='w-[138px] h-[24px] top-[354px]  text-[#898989] left-[16px] text-[16px] leading-6 ml-5'>Stylish cafe chair</p>
                    <div className='w-[249px] h-[30px] top-[386px] left-[16px]  flex'>
                    <p className='w-[131px] h-[30px] font-semibold text-[20px] leading-8 text-[#3A3A3A] ml-5'>Rp.2.500.000</p>
                    <p className='w-[102px] h-[24px] font-normal text-[16px] leading-6 line-through ml-4 mt-1'>Rp.3.500.000</p>
                    </div>
                  </div>
              </div>
            </div>


            <div className='w-[285px] h-[301px] '>
                    <Image src={Image4} alt='Image' width={285} height={301} />
                  <div className='w-[285px] h-[145px] top-[301px] bg-[#d1d2d3]'>
                    <div className='w-[138px] h-[61px] top-[317px] left-[16px] '>
                    <p className='w-[123px] h-[29px] top-[317px] left-[16px] font-semibold text-[24px] leading-7 text-[#3A3A3A]  ml-5'>Syltherine</p>
                    <p className='w-[138px] h-[24px] top-[354px]  text-[#898989] left-[16px] text-[16px] leading-6 ml-5'>Stylish cafe chair</p>
                    <div className='w-[249px] h-[30px] top-[386px] left-[16px]  flex'>
                    <p className='w-[131px] h-[30px] font-semibold text-[20px] leading-8 text-[#3A3A3A] ml-5'>Rp.2.500.000</p>
                    <p className='w-[102px] h-[24px] font-normal text-[16px] leading-6 line-through ml-4 mt-1'>Rp.3.500.000</p>
                    </div>
                  </div>
              </div>
            </div>


            <div className='w-[285px] h-[301px] '>
                    <Image src={Image4} alt='Image' width={285} height={301} />
                  <div className='w-[285px] h-[145px] top-[301px] bg-[#d1d2d3]'>
                    <div className='w-[138px] h-[61px] top-[317px] left-[16px] '>
                    <p className='w-[123px] h-[29px] top-[317px] left-[16px] font-semibold text-[24px] leading-7 text-[#3A3A3A]  ml-5'>Syltherine</p>
                    <p className='w-[138px] h-[24px] top-[354px]  text-[#898989] left-[16px] text-[16px] leading-6 ml-5'>Stylish cafe chair</p>
                    <div className='w-[249px] h-[30px] top-[386px] left-[16px]  flex'>
                    <p className='w-[131px] h-[30px] font-semibold text-[20px] leading-8 text-[#3A3A3A] ml-5'>Rp.2.500.000</p>
                    <p className='w-[102px] h-[24px] font-normal text-[16px] leading-6 line-through ml-4 mt-1'>Rp.3.500.000</p>
                    </div>
                  </div>
              </div>
            </div>


            <div className='w-[285px] h-[301px] '>
                    <Image src={Image4} alt='Image' width={285} height={301} />
                  <div className='w-[285px] h-[145px] top-[301px] bg-[#d1d2d3]'>
                    <div className='w-[138px] h-[61px] top-[317px] left-[16px] '>
                    <p className='w-[123px] h-[29px] top-[317px] left-[16px] font-semibold text-[24px] leading-7 text-[#3A3A3A]  ml-5'>Syltherine</p>
                    <p className='w-[138px] h-[24px] top-[354px]  text-[#898989] left-[16px] text-[16px] leading-6 ml-5'>Stylish cafe chair</p>
                    <div className='w-[249px] h-[30px] top-[386px] left-[16px]  flex'>
                    <p className='w-[131px] h-[30px] font-semibold text-[20px] leading-8 text-[#3A3A3A] ml-5'>Rp.2.500.000</p>
                    <p className='w-[102px] h-[24px] font-normal text-[16px] leading-6 line-through ml-4 mt-1'>Rp.3.500.000</p>
                    </div>
                  </div>
              </div>
            </div>


            
          </div>



          {/* buttons */}
          <div className='w-[392px] h-[90px] pt-[30px] gap-[38px]  ml-[450px] flex'>
            <div className=' w-[60px] h-[60px] rounded-[10px] hover:bg-[#B88E2F] bg-[#F9F1E7]'>
              <p className='w-[7px] h-[30px] top-[45px] left-[27px] text-[20px] leading-[30px] text-black ml-6 pt-4'>1</p>
            </div>
             
            <div className=' w-[60px] h-[60px] rounded-[10px] hover:bg-[#B88E2F] bg-[#F9F1E7]'>
              <p className='w-[7px] h-[30px] top-[45px] left-[27px] text-[20px] leading-[30px] text-black ml-6 pt-4'>2</p>
            </div>

            <div className='w-[60px] h-[60px] rounded-[10px] hover:bg-[#B88E2F] bg-[#F9F1E7]'>
              <p className='w-[7px] h-[30px] top-[45px] left-[27px] text-[20px] leading-[30px] textblack  ml-6 pt-4'>3</p>
            </div> 

            <div className=' w-[98px] h-[60px] rounded-[10px] hover:bg-[#B88E2F] bg-[#F9F1E7]'>
              <p className='w-[43px] h-[30px] top-[45px] left-[322px] text-[20px] leading-[30px] textblack  font-light ml-6 pt-4'>Next</p>
            </div>
          </div>

          

          
      </div>
      </div>


      {/* last */}
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
            <Image src={Suport} alt="icon" width={60} height={60} />
            <div className='w-[267px] h-[70px] gap-[2px] '>
              <p className='w-[200px] h-[38px] font-semibold text-[25px] leading-9'>24 / 7 Support</p>
              <p className='w-[267px] h-[30px] font-medium text-[20px] leading-[30px]'>Dedicated Support</p>
            </div>
          </div>

        </div>
      </div>













      
    </div>
  )
}
export default Shop