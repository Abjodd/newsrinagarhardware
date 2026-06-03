import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Users, Award } from "lucide-react";

export default function Index() {
  const services = [
    {
      icon: Shield,
      title: "Chain Link Fencing",
      description: "Durable and reliable fencing solutions for residential and commercial properties"
    },
    {
      icon: Zap,
      title: "Solar Power Fencing",
      description: "Integrated solar-powered fencing systems for remote and eco-friendly applications"
    },
    {
      icon: Users,
      title: "Structural Steel",
      description: "High-quality structural steel fabrication for industrial and construction projects"
    },
    {
      icon: Award,
      title: "Bridges & Trusses",
      description: "Engineering excellence in bridge construction and truss systems"
    }
  ];

  const features = [
    { title: "Industrial Cages", description: "Secure and reliable cage systems" },
    { title: "Fence Poles", description: "Sturdy poles for all fencing applications" },
    { title: "Fabrication", description: "Complete industrial fabrication services" },
    { title: "Expert Team", description: "Experienced professionals ensuring quality" }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Premium Industrial <span className="text-primary">Solutions</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Srinagar Hardware Industries delivers world-class fabrication and infrastructure solutions. From structural steel to solar fencing, we build the backbone of industrial success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="bg-primary text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
                >
                  Explore Products
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-black transition-colors"
                >
                  Get in Touch
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">100+</p>
                  <p className="text-gray-400 text-sm mt-1">Projects Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">15+</p>
                  <p className="text-gray-400 text-sm mt-1">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-gray-400 text-sm mt-1">Team Members</p>
                </div>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-xl p-12 border border-primary/30">
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-primary/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-primary text-6xl mb-4">⚙️</div>
                    <p className="text-gray-400">Industrial Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-primary">Core Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive industrial solutions tailored to your project needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 hover:border-primary/50 rounded-xl p-8 transition-all hover:shadow-xl hover:shadow-primary/20"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-xl p-12 border border-primary/30">
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-primary/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-primary text-6xl mb-4">🏗️</div>
                    <p className="text-gray-400">Quality Construction</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Why Choose <span className="text-primary">Srinagar Hardware?</span>
              </h2>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-black font-bold">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">{feature.title}</h3>
                      <p className="text-gray-400 mt-1">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-block mt-8 bg-primary text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t border-primary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your industrial fabrication and infrastructure needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Contact Us Now
            </Link>
            <Link
              to="/projects"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-black transition-colors"
            >
              View Our Projects
            </Link>
          </div>

          {/* Contact Quick Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <p className="text-gray-400 text-sm mb-2">Phone</p>
              <p className="text-primary font-bold text-xl">9419003668</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <p className="text-gray-400 text-sm mb-2">Email</p>
              <p className="text-primary font-bold text-sm">waniamasoodali@gmail.com</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <p className="text-gray-400 text-sm mb-2">Owner</p>
              <p className="text-white font-bold">Masood Ali Wani</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
