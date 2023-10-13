import img1 from '../../../assets/images1/saintMartin.jpg';
import img2 from '../../../assets/images1/sylhet.jpg';
import img3 from '../../../assets/images1/bandarban.jpg';

const Destination = () => {
  const destinations = [
    {
      name: 'Saint Martin',
      description: 'Explore the tranquil beauty of Bangladesh.',
      image: img1,
      link: 'https://en.wikipedia.org/wiki/St._Martin%27s_Island',
    },
    {
      name: 'Sylhet',
      description: 'Discover the scenic beauty of Bangladesh.',
      image: img2,
      link: 'https://www.thedailystar.net/life-living/travel/news/5-must-see-travel-spots-sylhet-3183711',
    },
    {
      name: 'Bandarban',
      description: 'Explore the vibrant capital city of Bangladesh.',
      image: img3,
      link: 'https://www.daily-sun.com/post/348172/Wild-beauty-of-Bandarban#:~:text=Sangu%20River%20is%20the%20complete,a%20course%20of%20270%20km.',
    },
  ];

  return (
    <section className="py-16 bg-gray-100 ">
      <div className="container mx-auto">
      <h3 className="text-4xl font-extrabold text-center mb-8 text-indigo-600 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text">Destination <span className="text-yellow-500">Highlights</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={destination.image} // Use the image variable directly
                alt={destination.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
              <p className="text-gray-600 mb-4">{destination.description}</p>
              <a
                href={destination.link}
                className="text-blue-500 hover:underline"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destination;
