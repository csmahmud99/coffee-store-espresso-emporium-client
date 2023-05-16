import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, chef, supplier, taste, category, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, chef, supplier, taste, category, photo };

        console.log(updatedCoffee);

        // Sending data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                }
            });
    };

    return (
        <div className="bg-[#F4F3F0] p-28">
            <div className="container">
                <div className="row-auto">
                    <h2 className="text-3xl font-extrabold text-center mb-9">Update Coffee: {name}</h2>
                    <form onSubmit={handleUpdateCoffee}>
                        {/* Form Row :: Name & Quantity */}
                        <div className="md:flex gap-7">
                            <div className="form-control md:w-1/2">
                                <label className="input-group">
                                    <span>Name</span>
                                    <input type="text" name="name" defaultValue={name} placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="input-group">
                                    <span>Quantity</span>
                                    <input type="number" name="quantity" defaultValue={quantity} placeholder="Enter Available Quantity" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        {/* Form Row :: Chef & Supplier */}
                        <div className="md:flex gap-7 mt-4">
                            <div className="form-control md:w-1/2">
                                <label className="input-group">
                                    <span>Chef</span>
                                    <input type="text" name="chef" defaultValue={chef} placeholder="Enter Coffee Chef" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="input-group">
                                    <span>Supplier</span>
                                    <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter Coffee Supplier" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        {/* Form Row :: Taste & Category */}
                        <div className="md:flex gap-7 mt-4">
                            <div className="form-control md:w-1/2">
                                <label className="input-group">
                                    <span>Taste</span>
                                    <input type="text" name="taste" defaultValue={taste} placeholder="Enter Coffee Taste" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="input-group">
                                    <span>Category</span>
                                    <input type="text" name="category" defaultValue={category} placeholder="Enter Coffee Category" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        {/* Form Row :: Photo URL */}
                        <div className="gap-7 mt-4">
                            <div className="form-control w-full">
                                <label className="input-group">
                                    <span>Photo</span>
                                    <input type="text" name="photo" defaultValue={photo} placeholder="Enter Photo URL" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        <input type="submit" value="Update Coffee" className="btn btn-block bg-[#D2B48C] mt-4" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;