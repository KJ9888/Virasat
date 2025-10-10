import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Animation from "../components/Animation";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, duration: 0.8 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

type Comment = { user: string; text: string };

type Blog = {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
  img?: string;
  video?: string;
  audio?: string;
  likes: number;
  comments: Comment[];
};

const initialBlogs: Blog[] = [
  {
    id: 1,
    title: "Exploring the Beauty of Kashmir",
    author: "TravelGuru",
    date: "24 Sep 2025",
    content:
      "Kashmir, the paradise on Earth, is known for its breathtaking landscapes, houseboats, and snow-capped mountains. The lush valleys, pristine rivers, and charming local culture make it a must-visit destination for travelers seeking both adventure and serenity.",
    img: "https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2024/01/15134114/kashmir-deepanshu-nayak-1600x900.jpeg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    likes: 0,
    comments: [],
  },
  {
    id: 2,
    title: "Top 5 Hiking Trails in India",
    author: "AdventureSeeker",
    date: "20 Sep 2025",
    content:
      "India offers some of the most scenic hiking trails ranging from the Himalayas to the Western Ghats. Each trail provides unique landscapes, challenging routes, and unforgettable experiences.",
    img: "https://trekthehimalayas.com/images/HomePageImages/Desktop/449405c7-967d-457b-af0d-789305915320_rupin.webp",
    video: "https://www.w3schools.com/html/movie.mp4",
    likes: 0,
    comments: [],
  },
  {
    id: 3,
    title: "Street Food Adventures",
    author: "FoodieFun",
    date: "18 Sep 2025",
    content:
      "Indian street food is a fusion of flavors, spices, and culture. From Delhi's chaat to Mumbai's vada pav, each city offers a unique culinary experience. Street food lovers will find endless options to try.",
    img: "https://i.ytimg.com/vi/CaFhyHPPMis/maxresdefault.jpg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    likes: 0,
    comments: [],
  },
  {
    id: 4,
    title: "Cultural Festivals Around India",
    author: "CultureVibes",
    date: "15 Sep 2025",
    content:
      "India celebrates numerous festivals with music, dance, rituals, and community gatherings. From Diwali's lights to Holi's colors, each festival reflects the country's rich heritage.",
    img: "https://cdn-images.prepp.in/public/image/186af3b05a363ea1fd1d85122f8a0dfa.png?tr=w-512,h-271,c-force",
    likes: 0,
    comments: [],
  },
  {
    id: 5,
    title: "Serene Backwaters of Kerala",
    author: "TravelLover",
    date: "10 Sep 2025",
    content:
      "Kerala's backwaters offer a tranquil experience with lush greenery, houseboats, and peaceful waterways.",
    img: "https://dq1q7qkthxkc0.cloudfront.net/BlogMedia/35fafdc9-14f6-4d87-a47b-f45c64edefc0.webp",
    likes: 0,
    comments: [],
  },
];

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);
  const [newComment, setNewComment] = useState<{ [key: number]: string }>({});
  const [featuredIndex, setFeaturedIndex] = useState(0);

  // Auto rotate featured images every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % initialBlogs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setFeaturedIndex((prev) => (prev - 1 + initialBlogs.length) % initialBlogs.length);
  };

  const handleNext = () => {
    setFeaturedIndex((prev) => (prev + 1) % initialBlogs.length);
  };

  const handleLike = (id: number) => {
    setBlogs((prev) =>
      prev.map((blog) => (blog.id === id ? { ...blog, likes: blog.likes + 1 } : blog))
    );
  };

  const handleComment = (id: number) => {
    if (!newComment[id]) return;
    setBlogs((prev) =>
      prev.map((blog) =>
        blog.id === id
          ? {
              ...blog,
              comments: [...blog.comments, { user: "Guest", text: newComment[id] }],
            }
          : blog
      )
    );
    setNewComment((prev) => ({ ...prev, [id]: "" }));
  };

  const featuredBlog = initialBlogs[featuredIndex];

  return (
    <><Animation />
    <motion.div
      className="bg-black text-white min-h-screen font-['Poppins'] py-12 px-4 sm:px-6 lg:px-16"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Welcome Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-white to-blue-500">
        Welcome to the Beauty of Nature
      </h1>

      {/* Featured Blog */}
      <div className="mb-12 relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={featuredBlog.id}
            src={featuredBlog.img}
            alt={featuredBlog.title}
            className="w-full h-96 object-cover rounded-xl shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        {/* Navigation */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 text-2xl font-bold"
        >
          &#60;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 text-2xl font-bold"
        >
          &#62;
        </button>

        {/* Content */}
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 p-4 rounded-lg max-w-lg">
          <h1 className="text-3xl font-bold">{featuredBlog.title}</h1>
          <p className="text-gray-300 text-sm">
            By {featuredBlog.author} | {featuredBlog.date}
          </p>
          <p className="text-gray-100 mt-2 text-sm">{featuredBlog.content}</p>
        </div>
      </div>

      {/* Trending Blogs */}
      <h2 className="text-2xl font-bold mb-4">Trending Blogs</h2>
      <div className="flex gap-8 overflow-x-auto pb-4 mb-12 scroll-smooth snap-x snap-mandatory">
        {blogs.slice(1).map((blog) => (
          <motion.div
            key={blog.id}
            variants={cardVariants}
            className="bg-gray-900 rounded-xl min-w-[250px] shadow-lg flex-shrink-0 flex flex-col snap-start hover:scale-105 transition-transform"
          >
            {blog.img && (
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-36 object-cover rounded-t-xl"
              />
            )}
            <div className="p-3 flex flex-col gap-2">
              <h3 className="text-lg font-bold">{blog.title}</h3>
              <p className="text-gray-400 text-sm">By {blog.author}</p>
              <p className="text-gray-200 text-sm line-clamp-3">{blog.content}</p>
              <button
                onClick={() => handleLike(blog.id)}
                className="px-3 py-1 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 mt-2 text-sm"
              >
                👍 Like ({blog.likes})
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* All Blogs Grid */}
      <h2 className="text-2xl font-bold mb-4">All Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            variants={cardVariants}
            className="bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            {blog.img && <img src={blog.img} alt={blog.title} className="w-full h-48 object-cover" />}
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-xl font-bold">{blog.title}</h2>
              <p className="text-gray-400 text-sm">By {blog.author} | {blog.date}</p>
              <p className="text-gray-200 text-sm">{blog.content}</p>

              {blog.video && (
                <video controls className="w-full rounded-lg mt-2">
                  <source src={blog.video} type="video/mp4" />
                </video>
              )}
              {blog.audio && (
                <audio controls className="w-full mt-2">
                  <source src={blog.audio} type="audio/mp3" />
                </audio>
              )}

              <div className="flex gap-2 mt-2 flex-wrap">
                <button
                  onClick={() => handleLike(blog.id)}
                  className="px-3 py-1 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 transition-colors"
                >
                  👍 Like ({blog.likes})
                </button>
              </div>

              <div className="mt-2">
                <h3 className="text-lg font-semibold mb-2">Comments</h3>
                {blog.comments.length === 0 && <p className="text-gray-400 text-sm">No comments yet</p>}
                <ul className="mb-2 max-h-32 overflow-y-auto">
                  {blog.comments.map((c, idx) => (
                    <li key={idx} className="mb-1 text-sm">
                      <span className="font-bold">{c.user}:</span> {c.text}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="flex-1 p-2 rounded bg-gray-800 text-white text-sm"
                    value={newComment[blog.id] || ""}
                    onChange={(e) =>
                      setNewComment((prev) => ({ ...prev, [blog.id]: e.target.value }))
                    }
                  />
                  <button
                    onClick={() => handleComment(blog.id)}
                    className="px-3 py-1 bg-yellow-500 text-black font-bold rounded-lg hover:opacity-90 text-sm"
                  >
                    Comment
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Blog Button */}
      <div className="mt-12 text-center">
        <button className="px-5 py-2 bg-green-500 font-bold text-black rounded-lg hover:scale-105 transition-transform text-sm sm:text-base">
          ➕ Add Your Blog
        </button>
      </div>
    </motion.div>
    </>
  );
};

export default BlogPage;
