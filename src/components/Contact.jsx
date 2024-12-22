
import React  ,{useState , useEffect}  from 'react'

const Contact = () => {
    const [email, setEmail] = useState("");

    return (
      <div className=" min-h-screen font-roboto">
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <div className="flex items-center justify-center gap-2">
          <span>Surya Logistics</span>
          <span>»</span>
          <span className="bg-yellow-400 text-black px-3 py-1 rounded">
          Contact Us
          </span>
        </div>
      </div>
    </div>
  
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Let's Talk
              </h2>
              <p className="text-gray-600">
                Get in touch with us for any queries or support needed.
              </p>
            </div>
            <div>
              <img
                src="https://suryalogistics.in/wp-content/uploads/2023/03/contact.jpeg"
                alt="Contact banner illustration"
                className="w-full h-[200px] object-cover rounded-lg"
              />
            </div>
          </div>
  
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://suryalogistics.in/wp-content/uploads/2023/03/shutterstock_455108011-min-768x512.jpg"
                 alt="Contact methods showing phone, email and message icons"
                className="w-full h-[300px] object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2">Hours:</h3>
                <p>Mon-Fri 9:00AM - 6:00PM</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Phone:</h3>
                <a href="tel:9953642957" className="text-blue-600">
                  9953642957, 9213388971
                </a>
              </div>
              <div>
                <h3 className="font-bold mb-2">Email:</h3>
                <a href="mailto:info@suryalogisticsdhr.com" className="text-blue-600">
                  info@suryalogisticsdhr.com
                </a>
              </div>
            </div>
          </div>
  
          <div className="grid md:grid-cols-2 gap-12">
            <div className="w-full h-[300px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.4475085543974!2d77.15178731508565!3d28.674378982399744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d037a161883f7%3A0x9e38469d4b7c9e89!2sPearls%20Business%20Park!5e0!3m2!1sen!2sin!4v1645684689744!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Visit Us</h2>
              <p className="text-gray-600">
              Flat No. 1791 FF M/G, Sec-6 Near Subhash Chowk Dharuhera (Hr) 123106
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Contact
