import Banner from "../Banner/Banner";
import Destination from "../Destination/Destination";
import Newsletter from "../Newsletter.jsx/Newsletter";
import Testimonials from "../Testimonials/Testimonials";
import Tours from "../Tours/Tours";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Destination></Destination>
            <Tours></Tours>
            <Testimonials></Testimonials>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;