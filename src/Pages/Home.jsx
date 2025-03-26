import React from "react";

const Home = () => {
  return (
    <>
      <div className="pagemaindiv">
        <div className="w-full my-[1%]">
          <img
            src="/Homepageimage/1.webp"
            alt="Banner image"
            className="w-full h-auto object-cover  "
          />
        </div>

        {/* Second Section */}
        <div className="flex justify-center py-10 px-[5%] ">
          <div className="flex w-full max-w-[800px] gap-6">
            {/* Left Side (Big Image) */}
            <div className="relative w-[58%]">
              <img
                src="/Homepageimage/section2i1.jpg"
                alt="Stitched Collection"
                className="w-full h-full object-cover "
              />
              <div className="absolute bottom-5 left-5 text-black">
                <p className="text-lg leading-tight">Stitched</p>
                <p className="font-bold text-lg">Shop Now</p>
              </div>
            </div>

            {/* Right Side (Two Small Images) */}
            <div className="flex flex-col w-[38%] gap-6">
              <div className="relative">
                <img
                  src="/Homepageimage/section2i2.jpg"
                  alt="Kurti"
                  className="w-full h-auto object-cover "
                />
                <div className="absolute bottom-4 left-4 text-black">
                  <p className="text-lg leading-tight">Kurti</p>
                  <p className="font-bold text-lg">Shop Now</p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/Homepageimage/section2i3.jpg"
                  alt="Unstitched"
                  className="w-full h-auto object-cover "
                />
                <div className="absolute bottom-4 left-4 text-black">
                  <p className="text-lg leading-tight">Unstitched</p>
                  <p className="font-bold text-lg">Shop Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Third Section */}
        <div className="flex justify-center py-10 px-[5%] ">
          <div className="flex w-full max-w-[800px] gap-6">
            {/* Left Side (Big Image) */}

            <div className="flex flex-col w-[38%] gap-6">
              <div className="relative">
                <img
                  src="/Homepageimage/section3i1.jpg"
                  alt="Kurti"
                  className="w-full h-auto object-cover "
                />
                <div className="absolute bottom-4 left-4 text-black">
                  <p className="text-lg leading-tight">Kurti</p>
                  <p className="font-bold text-lg">Shop Now</p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/Homepageimage/section3i2.jpg"
                  alt="Unstitched"
                  className="w-full h-auto object-cover "
                />
                <div className="absolute bottom-4 left-4 text-black">
                  <p className="text-lg leading-tight">Unstitched</p>
                  <p className="font-bold text-lg">Shop Now</p>
                </div>
              </div>
            </div>
            {/* Right Side (Two Small Images) */}

            <div className="relative w-[58%]">
              <img
                src="/Homepageimage/section3i3.jpg"
                alt="Stitched Collection"
                className="w-full h-full object-cover "
              />
              <div className="absolute bottom-5 left-5 text-black">
                <p className="text-lg leading-tight">Stitched</p>
                <p className="font-bold text-lg">Shop Now</p>
              </div>
            </div>
          </div>
        </div>


        {/* Banner Sections */}
        <div className="w-[90%] m-auto bg-[#fff8ee]">
          <div className="img  m-[5%] p-[5%] ">
            <img
              src="/Homepageimage/firstbannersection.webp"
              alt="First Banner"
              className="w-full h-auto"
            />
          </div>
        </div>
        {/* second banner section */}
        <div className="w-[90%] m-auto bg-[#fff8ee]">
          <div className="img  m-[7%] p-[5%] ">
            <img
              src="/Homepageimage/secondbannersection.webp"
              alt="First Banner"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Heading Section */}
        <div className="text-center">
          <h5 className="text-lg font-medium text-[#303030] uppercase  mb-6 underline">
            New Arrivals
          </h5>
          <h3 className="text-6xl font-bold text-[#303030] mb-6">Boys & Girls</h3>
        </div>

        {/* Boys & Girls Section */}
        <div className=" min-w-full py-5 flex justify-center items-start ">
          {/* Large Image */}
          <div className="largimage">
            <img
              className="w-[400px] h-[530px] object-cover"
              src="/Homepageimage/section4i1.jpg"
              alt="Boy"
            />
          </div>
          {/* Grid of Three Images with Text Below */}
          <div className="flex flex-col justify-center items-center mb-15">
            <div className="flex gap-4">
              <img
                className="w-[200px] h-[280px] object-cover"
                src="/Homepageimage/section4i2.jpg"
                alt="Girl"
              />
              <img
                className="w-[200px] h-[280px] object-cover"
                src="/Homepageimage/section4i3.jpg"
                alt="Girl"
              />
              <img
                className="w-[200px] h-[280px] object-cover"
                src="/Homepageimage/section4i4.jpg"
                alt="Boy"
              />
            </div>

            {/* Text Section Below */}
            <div className="text-center mt-12">
              <p className="text-lg font-bold text-gray-900">NEW COLLECTION</p>
              <p className="text-lg text-gray-600">DRESS BRIGHT AND LIVELY</p>
              <p className="text-lg font-bold text-gray-900">
                WITH J. YOUNGSTERS COLLECTION
              </p>
            </div>
          </div>
        </div>
        {/* Newsletter Signup */}


      </div>
    </>
  );
};

export default Home;