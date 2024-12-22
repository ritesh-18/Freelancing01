import React, { useState, useCallback } from "react";

function Career() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    post: "",
    message: "",
  });
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <div className="min-h-screen  font-roboto">
       <div className="relative bg-cover bg-center bg-gray-100 py-20 text-center text-stone-950 overflow-hidden">
      {/* Wave SVG */}
      <svg
        className="absolute bottom-0 left-0 w-full h-20 md:h-24"
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        fill="white" // Key change: added fill="white"
      >
        <path d="M0,100 C150,200 350,0 500,100 L500,150 L0,150 Z"></path>
      </svg>

      <div className="relative z-10 text-black">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Career</h1>
        <div className="flex items-center justify-center gap-2">
          <span>Surya Logistics</span>
          <span>»</span>
          <span className="bg-yellow-400 text-black px-3 py-1 rounded">
          Career
          </span>
        </div>
      </div>
    </div>

      {/* Add space to allow scrolling to reveal background */}
       {/* The curl wave effect */}
      {/* <div className="relative mt-16">
       
        <div className="wave absolute bottom-[-40px] left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,240C120,180,240,180,360,210C480,240,600,200,720,190C840,180,960,210,1080,220C1200,230,1320,210,1440,240L1440,320L1320,320C1200,320,1080,320,960,320C840,320,720,320,600,320C480,320,360,320,240,320C120,320,0,320,0,320Z"
            ></path>
          </svg>
        </div>
      </div> */}
      <div className="container mx-auto px-4 py-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="mb-6 text-gray-7">
            Surya Logistics takes pride in giving its personnel tremendous
            growth opportunities across various functions and markets both
            national and international. Our operations span across India region.
            Surya caters to almost every industry vertical and takes care of
            every individual delivery.
          </p>
          <p className="mb-6 text-gray-700">
            Right from door-to-door delivery to managing complex Supply Chains,
            Surya offers an excellent learning and developmental environment.
          </p>
          <p className="mb-6 text-gray-700">
            Surya has provided a platform that encourages personal and
            professional development, cross functional learning and teamwork
            which enhances their passion, integrity and responsibility. Our
            dynamic, vibrant, open, fast-paced and challenging work environment
            brings out the best of every employees. We are a trendsetting and
            disciplined organization with lower attrition than industry trends.
          </p>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">
              Elegant Customization
            </h3>
            <p className="text-gray-700">
              We recognize global and home trends and customize our offerings
              with a well designed method to meet the customer's wide range of
              expectations and take care of their precious objects like our own.
            </p>
          </div>
          <h2 className="text-2xl font-bold mb-6">Work with Surya Logistics</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E.g. john@gmail.com"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="E.g. +91 XXXXXXXXXX"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="education"
              placeholder="E.g. Master of Business Administration"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="post"
              placeholder="E.g. Warehouse manager"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message..."
              rows="4"
              className="w-full p-3 border border-gray-300 rounded resize-none"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Career;
