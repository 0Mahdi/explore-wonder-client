import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const CheckOut = () => {
  const tour = useLoaderData();
  const { title, _id, price, img } = tour;
  const { user } = useContext(AuthContext);

  const handleCheckOut = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price: price,
    };

    fetch("https://explore-wonder-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Service booked successfully");
        }
      });
  };

  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 p-4">
        <img src={img} alt={title} className="w-full h-auto" />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-center text-3xl">Book Service: {title}</h2>

        <form onSubmit={handleCheckOut}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input type="date" name="date" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <input
                type="text"
                defaultValue={"$" + price}
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
        <div className="card-body"></div>
      </div>
    </div>
  );
};

export default CheckOut;
