import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="md:flex gap-4 py-8">
        <div className="md:w-1/2">
          <div className="flex items-center gap-3 bg-blue-200 px-3 py-2 rounded-full w-max mb-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
              className="h-7"
              alt="Free Delivery Icon"
            />
            <p className="text-sm font-medium text-blue-800">Free Delivery</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 py-3">
            Building a Sustainable Agricultural{" "}
            <span className="text-blue-600">Ecosystem</span>
          </h2>
          <p className="py-3 text-base text-gray-700">
            Welcome to our agricultural platform, where we cultivate innovation
            and sustainability. Through meticulous research and hands-on
            expertise, we strive to revolutionize farming practices for a
            greener tomorrow. From precision agriculture techniques to
            eco-friendly solutions, we are committed to maximizing yield while
            minimizing environmental impact. Join us as we harness the power of
            technology and tradition to nourish communities and cultivate a
            thriving future for generations to come.
          </p>
          <button className="font-bold bg-blue-500 text-gray-200 px-6 py-3 rounded-md hover:bg-blue-600">
            Order Now
          </button>
        </div>
        {/* Placeholder for the image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="h-100 w-100 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
