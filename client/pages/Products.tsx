import { Link } from "react-router-dom";
import { Shield, Zap, Box, Hammer, Wrench, AlertCircle } from "lucide-react";

export default function Products() {
  const products = [
    {
      icon: Box,
      title: "Industrial Cages",
      description: "Secure, durable cage systems designed for storage, containment, and safety applications",
      features: ["Customizable designs", "Heavy-duty construction", "Various sizes available", "Security-focused"]
    },
    {
      icon: Shield,
      title: "Chain Link Fencing",
      description: "Professional chain link fencing solutions for residential, commercial, and industrial use",
      features: ["Galvanized steel", "Long-lasting durability", "Easy maintenance", "Cost-effective"]
    },
    {
      icon: Zap,
      title: "Solar Power Fencing",
      description: "Innovative solar-powered fencing systems combining security with sustainable energy",
      features: ["Eco-friendly operation", "Remote area suitable", "Low maintenance", "Advanced technology"]
    },
    {
      icon: Hammer,
      title: "Structural Steel",
      description: "High-quality structural steel fabrication for buildings, factories, and infrastructure",
      features: ["Precision engineering", "Quality certifications", "Custom designs", "Expert craftsmanship"]
    },
    {
      icon: Wrench,
      title: "Bridges & Trusses",
      description: "Complex bridge structures and truss systems engineered for safety and longevity",
      features: ["Professional design", "Load calculations", "Durability tested", "Industry standards"]
    },
    {
      icon: AlertCircle,
      title: "Fence Poles",
      description: "Sturdy fence poles and posts manufactured for all fencing applications and conditions",
      features: ["Multiple materials", "Weather resistant", "Strength guaranteed", "Various dimensions"]
    }
  ];

  const services = [
    { title: "Design & Engineering", description: "Expert design and engineering solutions tailored to your specifications" },
    { title: "Custom Fabrication", description: "Precision fabrication for unique and specialized requirements" },
    { title: "Installation Services", description: "Professional installation with attention to detail and timeline" },
    { title: "Project Management", description: "End-to-end project coordination and management" },
    { title: "Quality Assurance", description: "Rigorous testing and inspection for highest standards" },
    { title: "Maintenance Support", description: "Ongoing support and maintenance services for your installations" }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Products & <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Comprehensive industrial solutions for every project need
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our <span className="text-primary">Product Range</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Complete industrial solutions from design to installation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 hover:border-primary/50 rounded-xl overflow-hidden transition-all hover:shadow-xl hover:shadow-primary/20"
              >
                <div className="bg-gradient-to-br from-primary/20 to-orange-500/20 h-20 flex items-center justify-center border-b border-gray-800">
                  <product.icon className="text-primary" size={40} />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-bold text-xl mb-2">{product.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{product.description}</p>
                  <div className="space-y-2 mt-4 pt-4 border-t border-gray-800">
                    {product.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Additional <span className="text-primary">Services</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Complete support throughout your project journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 hover:border-primary/50 rounded-xl p-8 transition-all hover:shadow-xl hover:shadow-primary/20"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black text-center mb-16">
            Our <span className="text-primary">Process</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { step: 1, title: "Consultation", description: "We understand your requirements and discuss project scope" },
                { step: 2, title: "Design & Planning", description: "Expert engineers design solutions tailored to your needs" },
                { step: 3, title: "Fabrication", description: "High-quality manufacturing using state-of-the-art equipment" },
                { step: 4, title: "Quality Check", description: "Rigorous testing and inspection before delivery" },
                { step: 5, title: "Installation", description: "Professional installation with minimal disruption" },
                { step: 6, title: "Support", description: "Ongoing maintenance and support services" }
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-black font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-gray-400 font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t border-primary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Quality <span className="text-primary">Standards</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
              <h3 className="text-white font-bold text-lg mb-4">Materials</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="text-primary">✓</span> Premium grade steel
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="text-primary">✓</span> Corrosion resistant coatings
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="text-primary">✓</span> Certified components
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="text-primary">✓</span> Industry tested durability
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
              <h3 className="text-white font-bold text-lg mb-4">Certifications</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="text-primary">✓</span> International standards compliance
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="text-primary">✓</span> Safety certifications
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="text-primary">✓</span> Quality management systems
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span className="text-primary">✓</span> Professional inspections
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray mb-6">
            Ready to Get <span className="text-primary">Started?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us to discuss your product or service requirements
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
