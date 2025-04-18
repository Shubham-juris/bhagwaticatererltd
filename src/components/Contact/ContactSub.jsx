import img from "../../assets/contactus/img111.avif";
export default function ContactSub() {
    return (
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

    );

}