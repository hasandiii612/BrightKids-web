import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

function HomePage() {
    const { ref: featuresRef, inView: featuresInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: teamRef, inView: teamInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="w-full bg-primary-500">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <img
                            src="https://placehold.co/120x40/primary/white/png?text=BrightKids"
                            alt="BrightKids Logo"
                            className="h-10"
                        />
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#" className="text-white hover:text-primary-200">Home</a>
                            <Link to="/shop" className="text-white hover:text-primary-200">Shop</Link>
                            <a href="#" className="text-white hover:text-primary-200">Download</a>
                            <a href="#" className="text-white hover:text-primary-200">About</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative bg-hero-pattern text-monster-dark overflow-hidden">
                <div className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 text-left">
                        <h1 className="text-5xl font-bold mb-8">
                            Where Good Manners Become Magical Adventures
                        </h1>
                        <p className="text-xl mb-10 text-monster-dark/90">
                            Transform your child's everyday moments into enchanting journeys of discovery.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img src="/hero-animation.gif" alt="Hero Animation" className="w-full max-w-md" />
                    </div>
                </div>
            </section>

            {/* Features Section - Interactive Story Adventures */}
            <section ref={featuresRef} id="features" className="py-20 bg-white px-6">
                <div className={`container mx-auto grid gap-12 md:grid-cols-2 transition-all duration-500 ${featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div>
                        <h2 className="text-4xl font-bold text-primary-700">Interactive Story Adventures</h2>
                        <p className="text-lg mt-4 text-gray-600">
                            Every story is a new journey where your child's choices shape their adventure. Our interactive storytelling adapts to your child's decisions, offering a personalized and immersive experience. Through engaging narration, animations, and captivating visuals, children actively participate in the stories, making learning enjoyable and memorable. These adventures not only entertain but also teach essential life skills, values, and problem-solving techniques, fostering creativity and empathy in young minds.
                        </p>
                    </div>
                    <div>
                        <img src="/adventure.svg" alt="Adventure" className="w-full" />
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section ref={teamRef} id="team" className="py-20 bg-gradient-to-r from-blue-200 to-purple-300 px-6">
                <div className={`container mx-auto text-center transition-all duration-500 ${teamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl font-bold text-primary-800">Meet Our Creative Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        {[
                            { name: "Emma Thompson", role: "Educational Director", image: "/team1.png" },
                            { name: "David Chen", role: "Lead Developer", image: "/team2.png" },
                            { name: "Sophia Martinez", role: "Story Designer", image: "/team3.png" },
                            { name: "James Lee", role: "UI/UX Designer", image: "/team4.png" },
                        ].map((member, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                                <img src={member.image} alt={member.name} className="w-24 h-24 mx-auto rounded-full object-cover" />
                                <h3 className="text-xl font-bold mt-4">{member.name}</h3>
                                <p className="text-primary-600 font-semibold mt-2">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
