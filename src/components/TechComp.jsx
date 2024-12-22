
import React from "react";

function TechComp() {
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
  {/* <div className="min-h-screen font-roboto flex items-center justify-center"> */}
  <div className="flex  items-center justify-center">
    <div className="space-y-8">
      <p className="text-lg text-gray-700 text-left">
        <span className="text-8xl font-bold float-left mr-3 leading-[0.9] h-[80px]">
          W
        </span>
        <span className="text-xl">
          e invest significant time and resources in technology.
        </span>
        <span className="text-base block mt-2">
          It fuels our network by creating efficiency and visibility, and
          optimizes our operations through automation and customization.
        </span>
      </p>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <i className="fas fa-location-dot text-yellow-400 text-3xl"></i>
          <span className="text-xl">GPS enabled fleet</span>
        </div>
        <div className="flex items-center gap-4">
          <i className="fas fa-credit-card text-yellow-400 text-3xl"></i>
          <span className="text-xl">100% cashless transactions</span>
        </div>
        <div className="flex items-center gap-4">
          <i className="fas fa-chart-line text-yellow-400 text-3xl"></i>
          <span className="text-xl">Customized MIS reports</span>
        </div>
        <div className="flex items-center gap-4">
          <i className="fas fa-video text-yellow-400 text-3xl"></i>
          <span className="text-xl">Fleet with CCTV cameras</span>
        </div>
        <div className="flex items-center gap-4">
          <i className="fas fa-clock text-yellow-400 text-3xl"></i>
          <span className="text-xl">High uptime and low TAT</span>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-center">
      <img
        src="/tech-logistics.jpg"
        alt="Night view of a highway with digital overlay representing logistics technology"
        className="w-300 h-[300px] object-cover rounded-lg shadow-xl"
      />
    </div>
  </div>
</div>

  
  );
}

export default TechComp;