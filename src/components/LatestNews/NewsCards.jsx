// import img from "../assets/news/img.jpg";
// import img1 from "../assets/menu/menu1.jpg";
// import img4 from "../assets/home/img3.jpg";


import img from "../../assets/news/img.jpg";
import img1 from "../../assets/menu/menu1.jpg";
import img4 from "../../assets/home/img3.jpg";

export default function NewsCards() {
  const blogs = [
    {
      image: img,
      date: "April 5, 2022",
      category: "News, Recipes",
      title: "Smoked Salmon Tart",
      description:
        "Discover the rich flavors and delicate textures of our signature Smoked Salmon Tart — a perfect blend of freshness and gourmet flair.",
      link: "#",
    },
    {
      image: img4,
      date: "April 5, 2022",
      category: "News, Recipes",
      title: "Wonderful Eating Experience",
      description:
        "Take your taste buds on a journey with a truly wonderful eating experience that combines ambiance, flavor, and passion in every bite.",
      link: "#",
    },
    {
      image: img1,
      date: "April 5, 2022",
      category: "News, Recipes",
      title: "Love and food: It is all about spice",
      description:
        "Love and food go hand in hand — and it's all about the spice that brings warmth, excitement, and unforgettable memories to the table.",
      link: "#",
    },
  ];

  return (
    <>
    <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="group transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[260px] sm:h-[280px] md:h-[240px] lg:h-[260px] xl:h-[300px] object-cover rounded-lg group-hover:scale-105 transition duration-300"
              />
            </div>

            <p className="text-sm text-gray-400 mt-4">
              {blog.date} ·{" "}
              <span className="text-orange-500">{blog.category}</span>
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mt-2">
              {blog.title}
            </h3>
            <p className="text-gray-300 text-sm mt-2 leading-relaxed">
              {blog.description}
            </p>
            <a
              href={blog.link}
              className="group relative text-orange-500 mt-3 inline-block font-medium transition"
            >
              <span>READ MORE →</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 group-hover:w-0 transition-all duration-300 ease-in-out origin-left"></span>
            </a>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
