import React from 'react';

const MapSection = () => {
  return (
    <section className="w-full px-4 py-12 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
          Visit Our Location
        </h2>
        <p className="text-gray-300 mb-8">
          Koliwada S Khadki, Gandhi Road, Ahmedabad, Gujarat - 380001
        </p>
        <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="RehmatPharma Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.1950561236924!2d72.57839777508953!3d23.020474979169754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8562829d7bd5%3A0x4eab7b5a12ea2066!2sKoliwada%20S%20Khadki%2C%20Gandhi%20Rd%2C%20Khadia%2C%20Ahmedabad%2C%20Gujarat%20380001!5e0!3m2!1sen!2sin!4v1715071528893!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
