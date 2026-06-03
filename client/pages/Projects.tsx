import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      title: "Industrial Steel Bridge",
      category: "Bridges & Trusses",
      description: "Large-scale steel bridge construction with advanced truss systems",
      image: "🌉"
    },
    {
      title: "Solar Fencing Installation",
      category: "Solar Power Fencing",
      description: "Comprehensive solar-powered fencing system for agricultural property",
      image: "☀️"
    },
    {
      title: "Chain Link Factory Enclosure",
      category: "Chain Link Fencing",
      description: "High-security perimeter fencing for industrial facility",
      image: "🏭"
    },
    {
      title: "Structural Steel Warehouse",
      category: "Structural Steel",
      description: "Complete structural fabrication for modern warehouse facility",
      image: "🏗️"
    },
    {
      title: "Industrial Cage Systems",
      category: "Industrial Cages",
      description: "Custom-designed secure cage systems for storage and containment",
      image: "📦"
    },
    {
      title: "Multi-Purpose Fence Poles",
      category: "Fence Poles",
      description: "Installation of durable fence poles across expansive property",
      image: "🔧"
    },
    {
      title: "Commercial Fabrication",
      category: "Industrial Fabrication",
      description: "Custom metal fabrication for commercial applications",
      image: "⚙️"
    },
    {
      title: "Bridge Truss System",
      category: "Bridges & Trusses",
      description: "Engineering excellence in complex truss design and installation",
      image: "🏗️"
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-primary">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Showcase of our completed projects and industrial solutions
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 hover:border-primary/50 rounded-xl overflow-hidden transition-all hover:shadow-xl hover:shadow-primary/20 group cursor-pointer"
              >
                <div className="h-40 bg-gradient-to-br from-primary/20 to-orange-500/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                  {project.image}
                </div>
                <div className="p-6">
                  <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                  <div className="mt-4 pt-4 border-t border-gray-800">
                    <button className="text-primary hover:text-yellow-400 text-sm font-semibold transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Project <span className="text-primary">Categories</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Bridges & Trusses",
                projects: 15,
                description: "Large-scale infrastructure projects"
              },
              {
                category: "Chain Link Fencing",
                projects: 23,
                description: "Perimeter security solutions"
              },
              {
                category: "Solar Power Fencing",
                projects: 12,
                description: "Eco-friendly fencing systems"
              },
              {
                category: "Structural Steel",
                projects: 28,
                description: "Industrial and commercial structures"
              },
              {
                category: "Industrial Cages",
                projects: 18,
                description: "Containment and storage solutions"
              },
              {
                category: "Fabrication",
                projects: 31,
                description: "Custom metal fabrication work"
              }
            ].map((cat, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 hover:border-primary/50 rounded-xl p-8 transition-all hover:shadow-xl hover:shadow-primary/20"
              >
                <h3 className="text-white font-bold text-xl mb-2">{cat.category}</h3>
                <p className="text-primary font-semibold text-2xl mb-3">{cat.projects}+</p>
                <p className="text-gray-400 text-sm">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-xl p-12 border border-primary/30">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-primary/20 flex items-center justify-center text-6xl">
                  🌉
                </div>
              </div>
              <div>
                <p className="text-primary font-semibold uppercase tracking-wider mb-3">Featured Project</p>
                <h3 className="text-4xl font-bold text-white mb-4">Industrial Steel Bridge</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  A landmark infrastructure project showcasing our expertise in large-scale structural steel fabrication. This bridge spans multiple kilometers and handles heavy industrial traffic daily.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-300 flex items-center gap-2">
                    <span className="text-primary">✓</span> Advanced truss engineering
                  </li>
                  <li className="text-gray-300 flex items-center gap-2">
                    <span className="text-primary">✓</span> Precision fabrication
                  </li>
                  <li className="text-gray-300 flex items-center gap-2">
                    <span className="text-primary">✓</span> On-time delivery
                  </li>
                  <li className="text-gray-300 flex items-center gap-2">
                    <span className="text-primary">✓</span> Certified installation
                  </li>
                </ul>
                <button className="bg-primary text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-primary font-semibold uppercase tracking-wider mb-3">Featured Project</p>
                <h3 className="text-4xl font-bold text-white mb-4">Solar Fencing System</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  An innovative solar-powered fencing solution installed across a large agricultural property. The system combines security with sustainable energy generation.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-300 flex items-center gap-2">
                    <span className="text-primary">✓</span> Renewable energy integration
                  </li>
                  <li className="text-gray-300 flex items-center gap-2">
                    <span className="text-primary">✓</span> Smart monitoring system
                  </li>
                  <li className="text-gray-300 flex items-center gap-2">
                    <span className="text-primary">✓</span> Low maintenance
                  </li>
                  <li className="text-gray-300 flex items-center gap-2">
                    <span className="text-primary">✓</span> Eco-friendly operation
                  </li>
                </ul>
                <button className="bg-primary text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                  Learn More
                </button>
              </div>
              <div className="order-1 lg:order-2 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-xl p-12 border border-primary/30">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-primary/20 flex items-center justify-center text-6xl">
                  ☀️
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t border-primary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <p className="text-4xl font-bold text-primary mb-2">100+</p>
              <p className="text-gray-400 font-semibold">Projects Completed</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <p className="text-4xl font-bold text-primary mb-2">15+</p>
              <p className="text-gray-400 font-semibold">Years in Business</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <p className="text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-gray-400 font-semibold">Team Members</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <p className="text-4xl font-bold text-primary mb-2">99%</p>
              <p className="text-gray-400 font-semibold">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Project <span className="text-primary">Today</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let us bring your industrial vision to life
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
