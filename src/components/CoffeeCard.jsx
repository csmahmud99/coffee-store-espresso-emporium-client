const CoffeeCard = ({ coffee }) => {
    const { name, quantity, chef, supplier, taste, category, photo } = coffee;

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
                                <button className="btn">Edit</button>
                                <button className="btn">X</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;