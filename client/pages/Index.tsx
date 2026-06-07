import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Users, Award, CheckCircle2 } from "lucide-react";

export default function Index() {
  const photos = [
    "https://cdn.builder.io/api/v1/image/assets%2F0d17661bd5434a8792db3f67e91c74a7%2Fce7a364d27d543178f5c2f415aa423c4?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F0d17661bd5434a8792db3f67e91c74a7%2F599dde0c5a8348e08c6019f43f63c6e3?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F0d17661bd5434a8792db3f67e91c74a7%2F772b7f0844ab461bb422eaea9de1e544?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F0d17661bd5434a8792db3f67e91c74a7%2Fc9b84739d1fd42029f66979a3f3797b8?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F0d17661bd5434a8792db3f67e91c74a7%2F3218bc89686f4a42be15dc880b60e566?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F0d17661bd5434a8792db3f67e91c74a7%2Fe16475f7945647638f99df3ec459081a?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F0d17661bd5434a8792db3f67e91c74a7%2Ffcdbe46c7c9f435c8aca0c462b19c37c?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F0d17661bd5434a8792db3f67e91c74a7%2Fd223799c0b5d40939eff7da9504b22e3?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F0d17661bd5434a8792db3f67e91c74a7%2F403cff3c4f6a4206b8682437270ab0de?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F0d17661bd5434a8792db3f67e91c74a7%2F52c7501266204cb8ad92baf6a1d4d8bd?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F0d17661bd5434a8792db3f67e91c74a7%2F91b8a75649c54808a568047a7d872b1e?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F0d17661bd5434a8792db3f67e91c74a7%2F31f5609953d74222ac870afb9f46ebf4?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F0d17661bd5434a8792db3f67e91c74a7%2Fd5a9f1a389984baaace31cd640ccebad?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F0d17661bd5434a8792db3f67e91c74a7%2F27f80c9018cb49f785282263826c1d2a?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F0d17661bd5434a8792db3f67e91c74a7%2Fb359c0b7823c48a4892ab0b6beb6d483?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F0d17661bd5434a8792db3f67e91c74a7%2F4c433428a43e4aee9facdeb1b12d2f55?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F0d17661bd5434a8792db3f67e91c74a7%2F095496f08aa649da993f94f241c5b1ac?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F0d17661bd5434a8792db3f67e91c74a7%2Fe82ebb6f30a44a3ba8a19b6a6a124525?format=webp&width=800&height=1200",
  ];

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

  return (
    <div className="bg-background">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-32 border-b-4 border-primary/40">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6">
                <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/30">
                  Industry Leaders in Industrial Fabrication
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Premier Industrial <span className="text-primary">Solutions</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                Srinagar Hardware Industries delivers world-class fabrication and infrastructure solutions with 15+ years of excellence. From structural steel to solar fencing, we build the backbone of industrial success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all"
                >
                  Explore Solutions
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-black transition-all"
                >
                  Get Consultation
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div>
                  <p className="text-3xl font-bold text-primary">100+</p>
                  <p className="text-gray-400 text-sm">Projects</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">15+</p>
                  <p className="text-gray-400 text-sm">Years</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-gray-400 text-sm">Team</p>
                </div>
              </div>
            </div>

            {/* Featured Facility Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-500 rounded-lg blur-lg opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <img
                src={photos[0]}
                alt="Srinagar Hardware Facility"
                className="relative rounded-lg w-full h-96 object-cover border-2 border-primary/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-24 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive industrial solutions tailored to your exact specifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-primary/50 rounded-xl p-8 transition-all hover:shadow-2xl hover:shadow-primary/20"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-primary">Facility</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              State-of-the-art machinery and professional infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.slice(0, 9).map((photo, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-gray-800 hover:border-primary/50 transition-all"
              >
                <img
                  src={photo}
                  alt={`Facility ${index + 1}`}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-primary text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all"
            >
              View All Gallery
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Why Choose <span className="text-primary">Srinagar Hardware?</span>
              </h2>

              <div className="space-y-6">
                {[
                  { title: "Expert Engineering", desc: "15+ years of precision and excellence" },
                  { title: "Advanced Technology", desc: "State-of-the-art machinery and techniques" },
                  { title: "Quality Assurance", desc: "Every project meets international standards" },
                  { title: "On-Time Delivery", desc: "Reliable project completion and support" },
                  { title: "Custom Solutions", desc: "Tailored to your specific requirements" },
                  { title: "Professional Team", desc: "50+ experienced fabrication experts" }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                      <CheckCircle2 size={16} className="text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{feature.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-500 rounded-lg blur-lg opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <img
                src={photos[9]}
                alt="Quality Control"
                className="relative rounded-lg w-full h-96 object-cover border-2 border-primary/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-black to-gray-900 border-y border-primary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your <span className="text-primary">Project?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your industrial fabrication and infrastructure needs with our expert team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all"
            >
              Contact Us Now
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-black transition-all"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
