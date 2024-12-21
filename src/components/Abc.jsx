function MainComponent() {
    return (
      <div className="relative">
        {/* Main content without gradient */}
        <div
          className="bg-cover bg-center py-20 text-center relative"
          style={{
            backgroundImage:
              "url('https://suryalogistics.in/wp-content/uploads/2023/03/transport-tech-1024x576.png')",
          }}
        >
          <div className="relative z-10 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Tech</h1>
            <div className="flex items-center justify-center gap-2">
              <span>Surya Logistics</span>
              <span>»</span>
              <span className="bg-yellow-400 text-black px-3 py-1 rounded">
                Our Tech
              </span>
            </div>
          </div>
        </div>
  
        {/* Add space to allow scrolling to reveal background */}
        <div className="relative mt-16">
          {/* The curl wave effect */}
          <div className="wave absolute bottom-[-30px] left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,128L80,144C160,160,320,192,480,186.7C640,181,800,139,960,128C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
  
        {/* Content section */}
        <div className="relative bg-white">
          <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-gray-700 text-lg">
                  We invest significant time and resources in technology. It fuels
                  our network by creating efficiency and visibility, and optimizes
                  our operations through automation and customization.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <i className="fa fa-check-circle text-yellow-400"></i>
                    <span>GPS enabled fleet</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa fa-check-circle text-yellow-400"></i>
                    <span>100% cashless transactions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa fa-check-circle text-yellow-400"></i>
                    <span>Customized MIS reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa fa-check-circle text-yellow-400"></i>
                    <span>Fleet with CCTV cameras</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa fa-check-circle text-yellow-400"></i>
                    <span>High uptime and low TAT</span>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/tech-logistics.jpg"
                  alt="Digital logistics management system interface"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
  
        {/* Add space before the curl effect */}
      </div>
    );
  }
export default   MainComponent