import React from "react";

export default function TableBook() {
  return (
    <div className="bg-black text-white px-4 md:px-20 py-16" id="reservation">
      <div className="text-center mb-12">
        <p className="text-sm py-2 text-orange-500 uppercase">
          Online Reservation
        </p>
        <h2 className="text-4xl md:text-4xl font-bold py-6">Book A Table</h2>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto">
          Closed Sunday night, Monday & Tuesday. Due to the small amount of
          no-shows, all bookings must now be secured with a credit card which
          will be charged $20 if you do not show up or for late booking.
        </p>
      </div>

      <form className="space-y-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select className="bg-black border border-gray-700 p-2">
            <option>1 Person</option>
            <option>2 Persons</option>
            <option>3 Persons</option>
            <option>4+ Persons</option>
          </select>
          <input
            type="date"
            className="bg-black border border-gray-700 p-2"
          />
          <input
            type="time"
            className="bg-black border border-gray-700 p-2"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-black border border-gray-700 p-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-black border border-gray-700 p-2"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="bg-black border border-gray-700 p-2"
          />
        </div>
        <textarea
          rows="3"
          placeholder="Special Requests"
          className="w-full bg-black border border-gray-700 p-2"
        ></textarea>
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2">
          BOOK A TABLE NOW
        </button>
      </form>
    </div>
  );
}
