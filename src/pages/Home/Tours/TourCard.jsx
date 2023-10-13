import { Link } from "react-router-dom";

const TourCard = ({tour}) => {
    const {_id, title, img, price} = tour;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-4">
            <figure><img src={img} alt="tours" className="w-full h-48 object-cover" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-xl text-orange-300">Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-outline btn-warning">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TourCard;