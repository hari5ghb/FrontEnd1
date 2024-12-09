import barath from "../assets/bharath1.jpg";
import kowshi from "../assets/kowshi.jpg";
import santhosh from "../assets/billy.jpeg";
import hari from "../assets/team5.jpg";
import team4 from "../assets/team4.jpg";
import Navbar from "../Components/Navbar";
import "@fontsource/roboto-flex"
import "@fontsource/poppins"
import Footer from "../Components/Footer";

const employeedata = [
    {
        id: 1,
        image: barath,
        title: "Social Media Marketing",
        description: "Bharath, a passionate Social Media Marketing specialist, is currently pursuing a B.Sc. in Computer Science at Ultra College of Arts and Science."
    },
    {
        id: 2,
        image: kowshi,
        title: "Content Creator",
        description: "Kowshik, a creative Content Creator, hails from Ultra College of Arts and Science where he explores new ways to engage and connect with audiences."
    },
    {
        id: 3,
        image: santhosh,
        title: "Web Developer, SEO",
        description: "Santhosh, a skilled Web Developer and SEO expert, is currently studying B.Tech in IT at Kamaraj College of Engineering and Technology, combining technology with creative solutions"
    },
    {
        id: 4,
        image: hari,
        title: "Web Developer, SEO",
        description: "Hariharan, a proficient Web Developer and SEO expert, is pursuing his B.Tech in IT at Kamaraj College of Engineering and Technology, enhancing websites for improved online presence."
    },
    {
        id: 5,
        image: team4,
        title: "Pay Per Click",
        description: "Harisankar, a PPC strategist, is pursuing his B.Tech in Computer Science at Kalasalingam College of Engineering and Technology, where he specializes in pay-per-click advertising campaigns."
    }
]

const Employee = (props) => {
    return (
        <>
            <div className="max-w-lg mx-auto bg-white p-5 shadow-2xl rounded-xl overflow-hidden transition duration-300 ease-in-out transform hover:scale-95 ">
                <img
                    src={props.image}
                    alt="Blog cover"
                    className="w-1/2 h-52 object-cover p-1 mx-auto rounded-3xl"
                />
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-gray-800 hover:text-indigo-600 transition">
                        {props.title}
                    </h1>
                    <p className="mt-4 text-gray-700">
                        {props.description}
                    </p>
                </div>

            </div>
        </>
    );
}

const AboutUs = () => {

    return (
        <div>
            <Navbar />
            <div className="container text-3xl mt-20 mx-auto ">
                <div>
                    <h2 className="font-roboto font-semibold text-5xl text-center mb-2">About Us</h2>
                    <span><hr /><hr /><hr /></span>
                </div>
                <div className="container w-3/4 gap-10 flex text-3xl mt-14 mx-auto ">
                    <div className="w-auto p-5 mx-auto shadow-xl rounded-xl">
                        <h2 className="text-center font-poppins font-semibold text-red-500">Who Are We...</h2>
                        <p className="text-center font-sans mt-5 font-light text-lg">We are a passionate team of digital marketing professionals dedicated to helping businesses grow. With years of experience in various industries, we combine creativity and data-driven strategies to deliver exceptional results.</p>

                    </div>

                    <div className="w-auto p-5 mx-auto shadow-xl rounded-xl">
                        <h2 className="text-center font-poppins font-semibold text-blue-500">What We Are Doing</h2>
                        <p className="text-center font-sans mt-5 font-light text-lg">Our focus is on crafting tailored marketing solutions that resonate with your target audience. From social media management to SEO optimization and content creation, we aim to enhance your online presence and drive growth..</p>

                    </div>
                </div>
            </div>
            <div className="container text-3xl mt-20 mx-auto " >
                <h2 className="font-roboto font-semibold text-5xl text-center mb-2">Our Employess</h2>
                <span><hr /><hr /><hr /></span>
            </div>
            <div className="container mx-auto flex p-2 flex-wrap gap-5 mt-14 mb-10">
                {employeedata.map((employee) => (

                    <Employee key={employee.id} image={employee.image} title={employee.title} description={employee.description} />

                ))}
            </div>
            <Footer />
        </div>
    );
}

export default AboutUs;