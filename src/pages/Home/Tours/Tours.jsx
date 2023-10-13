import { useEffect } from "react";
import { useState } from "react";
import TourCard from "./TourCard";

const Tours = () => {
    const [tours, setTours] = useState([])

    useEffect(()=>{
        fetch('https://explore-wonder-server.vercel.app/tours')
        .then(res => res.json())
        .then(data => setTours(data));
    },[])
    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-3xl font-bold text-orange-600">Tours</h3>
                <h2 className="text-5xl">Our Featured  Tours</h2>
                <p className="mt-4 text-gray-600">Explore our handpicked selection of unforgettable tours that<br/>showcase the best of Bangladesh's beauty and culture.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    tours.map(tour => <TourCard 
                        key={tour._id}
                        tour={tour}
                    > </TourCard>)
                }
            </div>
        </div>
    );
};

export default Tours;