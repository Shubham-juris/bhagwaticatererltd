import img from "../../assets/contactus/img111.avif";
export default function ContactLocation() {
    return (
      <div className=" min-h-[500px] bg-black text-white flex items-center justify-center px-4 py-12">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-orange-500 font-semibold uppercase">
              Our Location
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Where to Find Us
            </h2>
            <p className="text-gray-300">
              Patio Time Café is nestled on Silk Street, right in the vibrant heart of London, near the edge of Soho. Come experience our cozy atmosphere in one of the city's most iconic neighborhoods.
            </p>
            <p className="text-gray-400">
            We’re surrounded by culture and charm—perfect for a relaxing coffee break or a night out. Stop by and see what makes us a favorite local spot.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <span>📍</span> Address – 0, Koliwada S Khadki, Gandhi Road, Ahmedabad, Gujarat. Pin – 38000
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span> 982403193
              </p>
              <p className="flex items-center gap-2">
                <span>📧</span> booking@patiotime.com
                
              </p>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition"
            >
              View in Google Maps
            </a>
          </div>         
          <div className="rounded-[45%_45%_0_0] overflow-hidden shadow-lg">
            <img
              src={img}
              alt="Cafe Interior"
              className="w-full h-150 object-cover"
            />
          </div>
        </div>
      </div>
    );
  }
  