import img from '../../assets/images1/about.jpg';
import Mission from './Mission';
import SafetyAndQuality from './SafetyAndQuality';

const About = () => {
  return (
    <section>
      <div className="hero min-h-screen" style={{backgroundImage: `url(${img})`, minHeight: '200px'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About Us</h1>
            <p className="mb-5">Discover Bangladesh with us! We are TourNexus, founded in 2019, on a mission to introduce you to the hidden gems, rich culture, and natural beauty of Bangladesh through our curated tours.</p>
          </div>
        </div>
      </div>
      <Mission />
      <SafetyAndQuality />
    </section>
  );
};

export default About;