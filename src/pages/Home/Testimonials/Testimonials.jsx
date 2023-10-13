import img1 from '../../../assets/images1/testimonial/tm1.jpg'
import img2 from '../../../assets/images1/testimonial/tm4.jpg'
import img3 from '../../../assets/images1/testimonial/tm3.jpg'

const Testimonials = () => {
    const testimonialsData = [
        {
          id: 1,
          author: 'Arif A Tapader',
          review: 'The tour exceeded my expectations! The guides were amazing, and I had a fantastic time.',
          image: img1, // Add the path to John Doe's square image
        },
        {
          id: 2,
          author: 'Shakir Ahmed',
          review: "Bangladesh is a hidden gem! I'm grateful for the wonderful memories from this trip.",
          image: img2, // Add the path to Jane Smith's square image
        },
        {
          id: 3,
          author: 'Jahed A Rana',
          review: "An unforgettable journey! Bangladesh's beauty left me speechless. Thank you!",
          image: img3, // Add the path to Jane Smith's square image
        },
        // Add more testimonials as needed
      ];
    
      return (
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-8 text-indigo-600 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text">Customer <span className="text-yellow-500">Testimonials</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonialsData.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-4 rounded-lg shadow-md">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.review}</p>
                  <p className="text-gray-800 font-semibold">{testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

export default Testimonials;