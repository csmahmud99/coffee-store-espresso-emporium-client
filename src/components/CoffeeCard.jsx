import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
    const { _id, name, quantity, chef, supplier, taste, category, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire(
                //     'Deleted!',
                //     'Your file has been deleted.',
                //     'success'
                // );
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been Deleted.',
                                'success'
                            );
                        }
                    });
            }
        });
    };

    return (
        <div>
            <div className="p-5">
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={photo} alt="Coffee-Cup" className="p-4" /></figure>
                    <div className="flex justify-between w-full pt-4 pr-10">
                        <div>
                            <h2 className="card-title">{name}</h2>
                            <p><strong>Quantity:</strong> {quantity}</p>
                            <p><strong>Chef:</strong> {chef}</p>
                            <p><strong>Supplier:</strong> {supplier}</p>
                            <p><strong>Taste:</strong> {taste}</p>
                            <p><strong>Category:</strong> {category}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <div className="btn-group btn-group-vertical space-y-2">
                                <button className="btn">View</button>
                                <Link to={`/update-coffee/${_id}`}><button className="btn">Update</button></Link>
                                <button onClick={() => handleDelete(_id)} className="btn bg-orange-500">X</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;