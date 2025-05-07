import React from "react";

const locations = [
  {
    city: "London",
    address: "Silk St, Barbican, London EC2Y 8DS",
    email: "www.bhagwaticaterer.com",
    phone: "+39 055 123 4567",
  },
  {
    city: "Florence",
    address: "Silk St, Barbican, London EC2Y 8DS",
    email: "www.bhagwaticaterer.com",
    phone: "+39 055 123 4567",
  },
  {
    city: "New York",
    address: "Silk St, Barbican, London EC2Y 8DS",
    email: "www.bhagwaticaterer.com",
    phone: "+39 055 123 4567",
  },
  {
    city: "Manhattan",
    address: "Silk St, Barbican, London EC2Y 8DS",
    email: "www.bhagwaticaterer.com",
    phone: "+39 055 123 4567",
  },
];

const OurLocations = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="flex flex-col max-w-7xl justify-center mx-auto">

     
      <div className="text-center mb-16">
        <p className="text-orange-500 uppercase tracking-widest text-sm mb-2 relative inline-block before:absolute before:w-12 before:h-[1px] before:bg-orange-500 before:-left-16 before:top-1/2 after:absolute after:w-12 after:h-[1px] after:bg-orange-500 after:-right-16 after:top-1/2">
          Visit the restaurant
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-bold">Our Locations</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {locations.map((location, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-bold uppercase mb-4">{location.city}</h3>
            <p className="mb-1">{location.address}</p>
            <p className="mb-1">
              M: <a href={`mailto:${location.email}`} className="hover:underline">{location.email}</a>
            </p>
            <p className="mb-4">T: {location.phone}</p>
            <button className="text-xs uppercase tracking-wide font-semibold text-white border-b-2 border-orange-500 hover:text-orange-500 transition">
              Get Directions
            </button>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default OurLocations;
