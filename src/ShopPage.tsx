import { Link } from 'react-router-dom';

function ShopPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            <nav className="w-full bg-primary-500 p-4 shadow-md">
                <div className="container mx-auto flex items-center justify-between">
                    <img src="/Logo.png" alt="BrightKids Logo" className="h-12" />
                    <Link to="/" className="text-white text-lg">Home</Link>
                </div>
            </nav>

            <section className="py-20 px-6">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-primary-700">BrightKids Merchandise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
                        {[
                            { name: "Hoodie", image: "/hoodie.png", price: "$29.99" },
                            { name: "Stationery Set", image: "/stationery.png", price: "$14.99" },
                            { name: "Water Bottle", image: "/bottle.png", price: "$19.99" },
                            { name: "School Bag", image: "/bag.png", price: "$39.99" },
                            { name: "Key Tag", image: "/keytag.webp", price: "$9.99" },
                        ].map((item, index) => (
                            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                                <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-md" />
                                <h3 className="text-xl font-bold mt-4">{item.name}</h3>
                                <p className="text-primary-600 font-semibold mt-2">{item.price}</p>
                                <button className="mt-4 px-6 py-2 bg-primary-500 text-white font-bold rounded-lg shadow-md hover:bg-primary-600 transition-all">
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ShopPage;
