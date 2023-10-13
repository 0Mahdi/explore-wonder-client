
const Mission = () => {
    return (
        <div className="bg-gray-100">
      {/* Mission Section */}
      <section className="py-16 container mx-auto flex items-center justify-between">
        <div className="w-1/2 pr-10 mx-4">
          <h2 className="text-4xl font-extrabold text-blue-700 mb-8">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-7 mb-10">
            At Explore Bangladesh, our mission is to share the beauty, culture, and heritage of Bangladesh with the world. We are dedicated to providing immersive travel experiences that inspire, educate, and connect people to this amazing country.
          </p>
        </div>
        <div className="w-1/2">
          <img src={"https://media.crystallize.com/snowball/20/3/4/8/mission.jpg"} alt="Mission" className="w-full h-auto" />
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 container mx-auto flex items-center justify-between">
        <div className="w-1/2 pr-10 mx-4">
          <h2 className="text-4xl font-extrabold text-blue-700 mb-8">Our Vision</h2>
          <p className="text-gray-700 text-lg leading-7 mb-10">
            Our vision is to be the leading tour company that showcases the wonders of Bangladesh, providing unforgettable experiences for travelers while promoting responsible and sustainable tourism.
          </p>
        </div>
        <div className="w-1/2">
          <img src={"https://www.winpower.com.bd/wp-content/uploads/2021/06/vision.jpg"} alt="Vision" className="w-full h-auto" />
        </div>
      </section>
    </div>
    );
};

export default Mission;