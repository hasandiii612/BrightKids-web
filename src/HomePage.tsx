import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function HomePage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const { ref: featuresRef, inView: featuresInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: teamRef, inView: teamInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { ref: heroRef, inView: heroInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className="min-h-screen bg-transparent">
            <nav className="w-full bg-gradient-to-b from-white-100 to-blue-50">
                <div className="container mx-auto px-6 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img src="/Logo.png" alt="BrightKids Logo" className="w-full max-w-40 h-auto transition-all hover:scale-110"/>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8 text-gray-1200 ">
                            <a href="#" className="hover:text-primary-600 transition-colors">Home</a>
                            <Link to="/shop" className="hover:text-primary-600 transition-colors">Shop</Link>
                            <a href="#features" className="hover:text-primary-600 transition-colors">Features</a>
                            <a href="#team" className="hover:text-primary-600 transition-colors">Team</a>
                            {/* Remove bg-white from this button */}
                            <a href="#"
                               className="text-primary-600 px-4 py-2 rounded-full font-bold hover:bg-primary-100 transition-colors">Download App</a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-white focus:outline-none"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {mobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden mt-3 pt-3 border-t border-primary-400">
                            <a href="#" className="block py-2 text-white hover:text-primary-200">Home</a>
                            <Link to="/shop" className="block py-2 text-white hover:text-primary-200">Shop</Link>
                            <a href="#features" className="block py-2 text-white hover:text-primary-200" onClick={() => setMobileMenuOpen(false)}>Features</a>
                            <a href="#team" className="block py-2 text-white hover:text-primary-200" onClick={() => setMobileMenuOpen(false)}>Team</a>
                            <a href="#" className="block py-2 mt-2 bg-white text-primary-600 px-4 rounded-full font-bold hover:bg-primary-100 text-center">Download App</a>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section - Improved animations and layout */}
            <section ref={heroRef}
                     className="relative bg-gradient-to-b from-white-50 to-white text-monster-dark overflow-hidden">
                <div className="container mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-8">
                    <div
                        className={`md:w-1/2 text-left transition-all duration-700 ${heroInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-primary-800">
                            Where Good Manners Become <span className="text-primary-600">Magical Adventures</span>
                        </h1>
                        <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                            Transform your child's everyday moments into enchanting journeys of discovery that inspire
                            kindness, creativity, and joy.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="btn-primary">Get Started</button>
                            <button
                                className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors">Learn
                                More
                            </button>
                        </div>
                    </div>
                    <div
                        className={`md:w-1/2 flex justify-center transition-all duration-700 ${heroInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="relative">
                            <div
                                className="absolute -inset-4 bg-gradient-to-r from-primary-200 to-purple-200 rounded-full opacity-30 blur-xl"></div>
                            <img src="/HeroAnimal4.jpeg" alt="Hero Animation"
                                 className="relative w-full max-w-md rounded-xl shadow-2xl"/>
                        </div>
                    </div>
                </div>

                {/* Wave separator */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
                        <path fill="#FFFFFF" fillOpacity="1"
                              d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
                    </svg>
                </div>
            </section>

            {/* Features Section - Improved layout and animation */}
            <section ref={featuresRef} id="features" className="py-24 bg-white px-6 relative">
                <div className={`container mx-auto transition-all duration-700 ${featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl font-bold text-primary-700 text-center mb-12">Interactive Story Adventures</h2>
                    <div className="grid gap-12 md:grid-cols-2 items-center">
                        <div className="order-2 md:order-1">
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg border border-gray-100 shadow-lg">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Every story is a new journey where your child's choices shape their adventure. Our interactive storytelling adapts to your child's decisions, offering a personalized and immersive experience.
                                </p>
                                <div className="mt-6 grid grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-lg shadow">
                                        <div className="text-primary-500 text-2xl mb-2">🌟</div>
                                        <h3 className="font-bold text-gray-800">Adaptive Learning</h3>
                                        <p className="text-sm text-gray-600 mt-1">Stories adjust to your child's choices</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow">
                                        <div className="text-primary-500 text-2xl mb-2">🔍</div>
                                        <h3 className="font-bold text-gray-800">Discovery</h3>
                                        <p className="text-sm text-gray-600 mt-1">New adventures to explore every day</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow">
                                        <div className="text-primary-500 text-2xl mb-2">🧠</div>
                                        <h3 className="font-bold text-gray-800">Problem Solving</h3>
                                        <p className="text-sm text-gray-600 mt-1">Develops critical thinking skills</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow">
                                        <div className="text-primary-500 text-2xl mb-2">❤️</div>
                                        <h3 className="font-bold text-gray-800">Empathy</h3>
                                        <p className="text-sm text-gray-600 mt-1">Teaches understanding and kindness</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-30 blur-xl"></div>
                                <img src="/HeroSpace.jpeg" alt="Adventure" className="relative w-full rounded-lg shadow-lg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team Section - Improved cards and layout */}
            <section ref={teamRef} id="team" className="py-24 bg-gradient-to-r from-blue-100 to-purple-100 px-6 relative">
                {/* Top wave separator */}
                <div className="absolute top-0 left-0 right-0 rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
                        <path fill="#FFFFFF" fillOpacity="1" d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
                    </svg>
                </div>

                <div className={`container mx-auto text-center transition-all duration-700 ${teamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl font-bold text-primary-800 mb-3">Meet Our Creative Team</h2>
                    <p className="text-gray-700 max-w-2xl mx-auto mb-12">The brilliant minds behind BrightKids who are passionate about creating magical learning experiences for children.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        {[
                            { name: "Yohan Liyange", role: "Frontend Developer", image: "/team1.png", social: ["twitter", "linkedin"] },
                            { name: "Hasandi Seelarathne", role: "Backend Developer", image: "/team2.png", social: ["github", "linkedin"] },
                            { name: "Kasun Wijesinghe", role: "Frontend Developer", image: "/team3.png", social: ["dribbble", "linkedin"] },
                            { name: "Senethma Hewavitharana", role: "Frontend Developer", image: "/team4.png", social: ["twitter", "github"] },
                            { name: "Rushela Perera", role: "Backend Developer", image: "/team1.png", social: ["linkedin", "github"] },
                            { name: "Venuri Jayasuriya", role: "Backend Developer", image: "/team1.png", social: ["twitter", "linkedin"] },
                        ].map((member, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                                <div className="relative inline-block">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full opacity-70 blur"></div>
                                    <img src={member.image} alt={member.name} className="relative w-24 h-24 mx-auto rounded-full object-cover border-4 border-white shadow-md" />
                                </div>
                                <h3 className="text-xl font-bold mt-4 text-gray-800">{member.name}</h3>
                                <p className="text-primary-600 font-semibold mt-1">{member.role}</p>

                                {/* Social Media Icons */}
                                <div className="flex justify-center gap-3 mt-4">
                                    {member.social.map((platform, idx) => (
                                        <a key={idx} href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                                            {platform === "twitter" && (
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.03 10.03 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                                            )}
                                            {platform === "linkedin" && (
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                            )}
                                            {platform === "github" && (
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                                            )}
                                            {platform === "dribble" && (
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/></svg>
                                            )}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to action */}
                <div className="container mx-auto mt-20">
                    <div className="bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl p-8 shadow-lg text-white text-center">
                        <h3 className="text-2xl font-bold mb-3">Join the BrightKids Family</h3>
                        <p className="mb-6 max-w-2xl mx-auto">Start your child's magical learning journey today and watch them grow with joy and confidence.</p>
                        <button className="bg-white text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-colors shadow-md">Download Now</button>
                    </div>
                </div>

                {/* Bottom wave separator - optional if you add a footer */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
                        <path fill="#FFFFFF" fillOpacity="1" d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
                    </svg>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white py-10 px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <img src="/Logo.png" alt="BrightKids Logo" className="h-20" />
                            <p className="text-gray-600 mt-2">© 2025 BrightKids. All rights reserved.</p>
                        </div>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Terms of Service</a>
                            <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">Contact Us</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;