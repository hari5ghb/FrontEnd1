import Banner from "../Components/Banner";
import Footer  from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ReviewDisplay from "../Components/Review";
import Services from "../Components/Services";
import Whyus from "../Components/WhyUs";

const Home = () =>{
    const reviews = [
        { name: 'John Doe', rating: 5, comment: 'Great product! Highly recommend.' },
        { name: 'Jane Smith', rating: 4, comment: 'Good, but there is room for improvement.' },
        { name: 'Alex Johnson', rating: 3, comment: 'It’s okay, not what I expected.' },
      ];
    return (
        <>
            <Navbar />
            <Banner />
            <Whyus />
            <Services />
            <ReviewDisplay reviews={reviews} />
            <Footer />
            
        </>
    );
}

export default Home;