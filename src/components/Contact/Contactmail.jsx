export default function Contactmail() {
    return (
<div className="bg-black text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
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
    );
  }
  