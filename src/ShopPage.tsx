import { Link } from 'react-router-dom';

function ShopPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Navigation Bar - Styled to Match HomePage */}
            <nav className="w-full bg-white shadow-md">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo - Adjusted Size to Match HomePage */}
                    <Link to="/">
                        <img src="/Logo.png" alt="BrightKids Logo"
                             className="w-28 h-auto transition-all hover:scale-110"/>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8 text-[#0A3D62] font-poppins  text-2xl font-semibold">
                        <Link to="/" className="hover:text-[#39C8D0] transition-colors">Home</Link>

                    </div>
                </div>
            </nav>

            {/* Shop Section */}
            <section className="py-20 px-6 relative bg-gradient-to-b from-white via-[#f9ea8f] to-[#f5d74f] to-80% text-monster-dark overflow-hidden min-h-[98vh]">
                <div className="container mx-auto text-center">
                    <h2 className="text-5xl font-bold text-sky-900 font-poppins">BrightKids Merchandise</h2>
                    <p className="text-xl text-gray-700 mt-4 max-w-2xl mx-auto">
                        Get fun and educational merchandise designed to make learning more exciting for kids!
                    </p>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-12">
                        {[
                            { name: "Hoodie", image: "/hoodie space.webp", price: "$29.99" },
                            { name: "Stationery Set", image: "/stationary pack.webp", price: "$14.99" },
                            { name: "Water Bottle", image: "/waterbottle.webp", price: "$19.99" },
                            { name: "Animal Hoodie", image: "/animal hoodie.webp", price: "$39.99" },
                            { name: "Sticker pack", image: "/space stickers.webp", price: "$9.99" },
                            { name: "Sticker pack", image: "/space stickers.webp", price: "$9.99" },
                            { name: "Sticker pack", image: "/space stickers.webp", price: "$9.99" },
                            { name: "Sticker pack", image: "/space stickers.webp", price: "$9.99" }
                        ].map((item, index) => (
                            <div key={index}
                                 className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
                                <img src={item.image} alt={item.name}
                                     className="w-full h-56 object-cover rounded-md shadow-md"/>
                                <h3 className="text-2xl font-bold mt-4 text-gray-800">{item.name}</h3>
                                <p className="text-primary-600 font-semibold text-xl mt-2">{item.price}</p>
                                <button
                                    className="mt-4 px-6 py-3 bg-[#0A3D62] text-white font-semibold rounded-lg hover:bg-sky-500 transition-all duration-300">
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer - Matches HomePage */}
            <footer className="bg-[#f5d74f] py-10 px-6">
                <div className="container mx-auto">

                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">

                            <Link to="/">
                                <img src="/Logo.png" alt="BrightKids Logo"
                                     className="w-20 h-auto transition-all hover:scale-110"/>
                            </Link>

                            <p className="text-gray-600 mt-2">© 2025 BrightKids. All rights reserved.</p>
                        </div>


                        <div className="flex space-x-6 ">
                            <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Privacy
                                Policy</a>
                            <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Terms of
                                Service</a>
                            <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Contact
                                Us</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default ShopPage;
