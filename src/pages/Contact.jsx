import React from "react";
import img from "../assets/contactus/img111.avif";

const Contact = () => {
  return (
    <>
      <section className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] xl:h-[60vh] overflow-hidden flex items-center justify-center">
        <img
          src={img}
          alt="About Us background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 px-4 text-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-wide animate-fade-in">
            CONTACT US
          </h1>
        </div>
      </section>
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8 items-center">
          {/* Left Section - Text Content */}
          <div className="space-y-6">
            <p className="text-orange-500 font-semibold uppercase">
              Our Location
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Where to Find Us
            </h2>
            <p className="text-gray-300">
              The Patio Time Cafe is located on Silk Street, in the heart of
              London city, on the edge of Soho. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Aenean commodo ligula eget dolor.
              Aenean massa.
            </p>
            <p className="text-gray-400">
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Donec quam felis, ultricies nec.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <span>📍</span> Silk St, Barbican, London EC2Y 8DS, UK
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span> +39-055-123456
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
      <div className="bg-black text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div>
            <p className="text-orange-500 uppercase font-semibold">
              Get in Touch
            </p>
            <h2 className="text-4xl font-bold mb-6 mt-2">Contact Us</h2>

            <div className="space-y-4 text-gray-300 text-sm">
              <p>
                For general enquiries please email:{" "}
                <a
                  href="mailto:info@patiotime.com"
                  className="text-white underline"
                >
                  info@patiotime.com
                </a>
              </p>
              <p>
                Reserve by email:{" "}
                <a
                  href="mailto:booking@patiotime.com"
                  className="text-white underline"
                >
                  booking@patiotime.com
                </a>
              </p>
              <p>
                Tel:{" "}
                <a href="tel:+390551234567" className="text-white underline">
                  +39 055 1234567
                </a>
              </p>
              <div>
                <p className="font-semibold text-white">Opening hours:</p>
                <p>Mon – Thu: 10.00 am – 01.00 am</p>
                <p>Fri – Sun: 10.00 am – 02.00 am</p>
              </div>
              <p className="underline text-white cursor-pointer hover:text-orange-500">
                Online Reservation
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="bg-transparent border-b border-gray-600 focus:outline-none focus:border-orange-500 p-2"
              />
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent border-b border-gray-600 focus:outline-none focus:border-orange-500 p-2"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-orange-500 p-2"
            />
            <textarea
              placeholder="Your message (optional)"
              rows="4"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-orange-500 p-2"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 px-6 py-2 text-white font-semibold rounded-sm transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div
        className="relative bg-cover bg-center text-white py-24 px-4"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="uppercase text-sm tracking-widest text-gray-200">
            Connect With Us & Stay Tuned
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mt-2 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-200 mb-8 px-4">
            If you would like to stay connected and be the first to know about
            our news, events, and exclusive offers, please sign up for our
            newsletter. You can opt out at any time by clicking unsubscribe on
            the newsletter.
          </p>

          <form className="space-y-6">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full bg-transparent border-b border-white placeholder-gray-300 focus:outline-none p-2"
            />

            <div className="flex items-center justify-center gap-2 text-sm">
              <input type="checkbox" id="agree" className="accent-orange-500" />
              <label htmlFor="agree" className="text-gray-200">
                I agree to the <span className="underline">Privacy Policy</span>
              </label>
            </div>

            <button
              type="submit"
              className="text-white border-b-2 border-white inline-flex items-center gap-2 hover:border-orange-500 transition"
            >
              Submit <span className="text-xl">→</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
