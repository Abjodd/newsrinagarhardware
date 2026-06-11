import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Users, Award, CheckCircle2, Factory } from "lucide-react";

export default function Index() {
  const productImages = [
    "https://cdn.builder.io/api/v1/image/assets%2F0d17661bd5434a8792db3f67e91c74a7%2Fe06305e43d9d4cffa08fb1883ed32d0e?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F0d17661bd5434a8792db3f67e91c74a7%2F121fc36202154b0b8915141850ca6c70?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F0d17661bd5434a8792db3f67e91c74a7%2Fac859cb0e2bf4c28b764b179a64d052b?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F0d17661bd5434a8792db3f67e91c74a7%2F08b5a12c435c4133997246605a6d1662?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F0d17661bd5434a8792db3f67e91c74a7%2Fe1c45694a3e64d96947372dd9c1524ab?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F0d17661bd5434a8792db3f67e91c74a7%2F2fdcb34c0a2e40f1b476c1ffca62cd01?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F0d17661bd5434a8792db3f67e91c74a7%2Fdc94756d0a6342ba983830e4c7dcb5d7?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F0d17661bd5434a8792db3f67e91c74a7%2F6bdbdd126049437caed60aa1eb0eb41e?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F0d17661bd5434a8792db3f67e91c74a7%2F11b93fbe48bb430f87fb502cb4b95884?format=webp&width=800&height=1200",
    "https://cdn.builder.io/api/v1/image/assets%2F0d17661bd5434a8792db3f67e91c74a7%2Fb79fd40819884227b6e3c9795210e624?format=webp&width=800&height=1200",
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
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-green-50 to-white py-32 border-b-4 border-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 right-0 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-40 left-0 w-80 h-80 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="inline-block mb-6 animate-scale-in">
                <span className="bg-green-100 text-primary px-4 py-2 rounded-full text-sm font-semibold border-2 border-primary">
                  ✨ Premium Industrial Excellence
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary leading-tight">
                Build With <span className="text-secondary">Precision</span> & <span className="text-primary">Quality</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-xl">
                Srinagar Hardware Industries delivers world-class fabrication and infrastructure solutions with 15+ years of excellence. From structural steel to solar fencing, we engineer the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Solutions
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Get Consultation
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mt-12 animate-fade-in-up">
                <div className="bg-white rounded-lg p-4 border-2 border-green-100 shadow-md hover:shadow-lg transition-all">
                  <p className="text-3xl font-bold text-primary">100+</p>
                  <p className="text-gray-600 text-sm font-semibold">Projects</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-green-100 shadow-md hover:shadow-lg transition-all">
                  <p className="text-3xl font-bold text-primary">15+</p>
                  <p className="text-gray-600 text-sm font-semibold">Years</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-green-100 shadow-md hover:shadow-lg transition-all">
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-gray-600 text-sm font-semibold">Team</p>
                </div>
              </div>
            </div>

            {/* Featured Product Image */}
            <div className="relative group animate-fade-in-right">
              <div className="absolute -inset-3 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <img
                src={productImages[6]}
                alt="Srinagar Hardware Products"
                className="relative rounded-2xl w-full h-96 object-cover border-4 border-white shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Core <span className="text-secondary">Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive industrial solutions tailored to your specifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-green-100 hover:border-primary rounded-2xl p-8 transition-all hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <service.icon className="text-primary group-hover:text-white" size={28} />
                </div>
                <h3 className="text-primary font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Gallery */}
      <section className="py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Product & <span className="text-secondary">Facility</span> Gallery
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              State-of-the-art machinery and precision fabrication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border-2 border-white shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center animate-fade-in-up">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:scale-105"
            >
              View Complete Gallery
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-primary mb-8">
                Why Choose <span className="text-secondary">Srinagar Hardware?</span>
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
                  <div key={index} className="flex gap-4 group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={16} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-primary font-bold text-lg group-hover:text-secondary transition-colors">{feature.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group animate-fade-in-right">
              <div className="absolute -inset-3 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <img
                src={productImages[3]}
                alt="Quality Products"
                className="relative rounded-2xl w-full h-96 object-cover border-4 border-white shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-secondary to-primary text-white border-y-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your <span className="text-white drop-shadow">Project?</span>
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your industrial fabrication and infrastructure needs with our expert team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-green-100 hover:shadow-lg transition-all transform hover:scale-105"
            >
              Contact Us Now
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all transform hover:scale-105"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
