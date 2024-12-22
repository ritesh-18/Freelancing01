
import React from "react";

function EcoComp() {
  return (
    <div className="min-h-screen font-roboto">
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Surya Eco</h1>
        <div className="flex items-center justify-center gap-2">
          <span>Surya Logistics</span>
          <span>»</span>
          <span className="bg-yellow-400 text-black px-3 py-1 rounded">
          Surya Eco
          </span>
        </div>
      </div>
    </div>

      <div className="container mx-auto px-4 py-10">
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Executing an environment initiative in your business is more than an
          activity. We need to accomplish our particular business objectives by
          lessening its negative impact on the environment. We at Surya
          Logistics are always eager to find the best ways through which we can
          contribute to the environment's safety. Our operations are primarily
          focusing the safety aspects related to all types of activities
          involved in logistics.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16 px-4 py-8">
          {/* Left Column: Health */}
          <div className="flex flex-col justify-between space-y-10">
            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-4 transition-all duration-300 hover:text-green-600">
                Health
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We are efficiently keeping up with the rapidly changing
                environment needs, just to keep the health of people good.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-4 transition-all duration-300 hover:text-green-600">
                Safety
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our operations are primarily focusing on the safety aspects
                related to all types of activities involved in logistics.
              </p>
            </div>
          </div>

          {/* Middle Column: Image (Square) */}
          <div className="flex items-center justify-center">
            <img
              src="https://e1a4c9d0d2f9f737c5e1.ucr.io/https://www.create.xyz/api/ai-img?prompt=Half%2520earth%2520globe%2520with%2520green%2520grass%252C%2520tree%252C%2520and%2520butterflies%2520representing%2520an%2520eco-friendly%2520environment"
              alt="Half earth globe with green grass, tree, and butterflies representing an eco-friendly environment"
              className="w-[300px] h-[300px] object-cover rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Right Column: Environment and Sustainability */}
          <div className="flex flex-col justify-center space-y-10">
            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-4 transition-all duration-300 hover:text-green-600">
                Environment
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We are developing efficient and environment-friendly operations
                with the reducing logistics complexities.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-4 transition-all duration-300 hover:text-green-600">
                Sustainability
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We are aware of the social and ecological impact of our
                activities and take our social responsibility for using
                emission-free vehicles.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <img
              src="https://e1a4c9d0d2f9f737c5e1.ucr.io/https://www.create.xyz/api/ai-img?prompt=Safety%2520First%2520road%2520sign"
              alt="Safety First road sign"
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h4 className="font-bold mb-2">Safety</h4>
            <p className="text-sm text-gray-600 mb-4">
              Our operations are primarily focusing the safety aspects related
              to all types of activities involved in logistics.
            </p>
            <button className="text-blue-500 hover:text-blue-700">
              Know More →
            </button>
          </div>
          <div className="text-center">
            <img
              src="https://e1a4c9d0d2f9f737c5e1.ucr.io/https://www.create.xyz/api/ai-img?prompt=Health%2520concept%2520with%2520heart%2520and%2520medical%2520symbols"
              alt="Health concept with heart and medical symbols"
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h4 className="font-bold mb-2">Health</h4>
            <p className="text-sm text-gray-600 mb-4">
              We are efficiently keeping up with the rapidly changing
              environment needs, just to keep the health of people good.
            </p>
            <button className="text-blue-500 hover:text-blue-700">
              Know More →
            </button>
          </div>

          <div className="text-center">
            <img
              src="https://e1a4c9d0d2f9f737c5e1.ucr.io/https://www.create.xyz/api/ai-img?prompt=Hands%2520holding%2520a%2520green%2520earth"
              alt="Hands holding a green earth"
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h4 className="font-bold mb-2">Environment</h4>
            <p className="text-sm text-gray-600 mb-4">
              We are developing efficient and environment friendly operations
              with the reducing logistics complexities.
            </p>
            <button className="text-blue-500 hover:text-blue-700">
              Know More →
            </button>
          </div>

          <div className="text-center">
            <img
              src="https://e1a4c9d0d2f9f737c5e1.ucr.io/https://www.create.xyz/api/ai-img?prompt=Green%2520energy%2520lightbulb%2520concept"
              alt="Green energy lightbulb concept"
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h4 className="font-bold mb-2">Sustainability</h4>
            <p className="text-sm text-gray-600 mb-4">
              We are aware of the social and ecological impact of our activities
              and take our social responsibility for using emission free
              vehicles.
            </p>
            <button className="text-blue-500 hover:text-blue-700">
              Know More →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcoComp;