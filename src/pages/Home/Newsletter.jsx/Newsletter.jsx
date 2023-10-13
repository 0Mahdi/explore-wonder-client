import maleTourist from '../../../assets/images1/male-tourist.png';

const Newsletter = () => {
    return (
      <div>
        <section className="py-16 bg-blue-200 mb-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg shadow-md">
                <h2 className="text-2xl mb-4 font-semibold">
                  Subscribe now to get traveling information.
                </h2>

                <div className="flex items-center justify-between p-2 mb-4 rounded-lg">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-400"
                  />
                  <button className="bg-blue-500 px-4 py-2 rounded-lg">
                    Subscribe
                  </button>
                </div>

                <p className="text-gray-700">
                  Embark on a journey of discovery by subscribing to our newsletter. Get exclusive travel tips, destination highlights, and insider insights delivered straight to your inbox.
                </p>
              </div>
              <div className="p-6 rounded-lg shadow-md">
                <img src={maleTourist} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Newsletter;
