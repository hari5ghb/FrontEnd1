import blog1 from "../assets/blog.png";
import blog2 from "../assets/blog1.jpeg";
import blog3 from "../assets/blog2.jpeg";
import blog4 from "../assets/blog3.jpeg";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const blogPosts = [
    {
        id:1,
        image: blog1,
        title: "The Art of Writing Clean Code",
        description:
            "Writing clean code is essential for maintainability and readability in any project. Learn the principles of clean coding to take your skills to the next level.",
    },
    {
        id:2,
        image: blog2,
        title: "React and Tailwind: The Perfect Match",
        description:
            "Discover how React and Tailwind CSS can help you build stunning, responsive applications quickly and efficiently.",
    },
    {
        id:3,
        image: blog3,
        title: "Web Development Trends in 2024",
        description:
            "Stay ahead of the curve by exploring the latest web development trends for 2024, including AI integration and web performance optimization.",
    },
    {
        id:4,
        image: blog4,
        title: "Top 10 JavaScript Tips for Developers",
        description:
            "Master JavaScript with these top 10 tips and tricks that every developer should know to improve efficiency and write better code.",
    },
];



const BlogPost = (props) => {

    return (
        <>
            <div className="max-w-xl mx-auto bg-white p-2 shadow-2xl rounded-xl overflow-hidden transition duration-300 ease-in-out transform hover:scale-95 ">
                <img
                    src={props.image}
                    alt="Blog cover"
                    className="w-full h-72 object-contain p-1"
                />
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-gray-800 hover:text-indigo-600 transition">
                        {props.title}
                    </h1>
                    <p className="mt-4 text-gray-700">
                        {props.description}
                    </p>
                    <button className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                        Read More
                    </button>
                </div>
            </div>

        </>
    );
}

const Blog = () => {

    return (
        <>
            <Navbar/>
            <div className="container mx-auto flex  flex-wrap gap-5 mt-14 mb-10">
                {blogPosts.map((post) => (
                    <BlogPost key={post.id} image={post.image} title={post.title} description={post.description} />
                ))}
            </div>
            <Footer/>
        </>
    );


}

export default Blog;