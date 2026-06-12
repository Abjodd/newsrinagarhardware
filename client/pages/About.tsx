import { Link } from "react-router-dom";
import { Award, Users, Target, Zap } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in all our fabrication and construction work"
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction is our top priority, with dedicated project support"
    },
    {
      icon: Target,
      title: "Precision Engineering",
      description: "Cutting-edge technology and expertise in every project delivery"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly evolving with industry trends and technological advancements"
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About <span className="text-primary">Srinagar Hardware</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            More than 15 years of delivering premium industrial solutions
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-xl p-8 border border-primary/30">
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-primary/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-primary text-6xl mb-4">📦</div>
                    <p className="text-gray-400">Industrial Excellence</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Our Journey</h2>
              <p className="text-gray-500 mb-4 leading-relaxed">
                Founded by Masood Ali Wani, Srinagar Hardware Industries has established itself as a leader in industrial fabrication and infrastructure development. What started as a commitment to quality has grown into a comprehensive solution provider for some of the region's most challenging projects.
              </p>
              <p className="text-gray-500 mb-4 leading-relaxed">
                Over 15 years, we have successfully completed 100+ projects ranging from large-scale structural steel fabrication to specialized solar-powered fencing systems. Our team of 50+ skilled professionals brings expertise, innovation, and dedication to every project.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Our facility in Baghi Ali Mardan Khan Industrial Estate is equipped with state-of-the-art machinery and technology, allowing us to deliver precision-engineered solutions that exceed industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-primary">Core Values</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide our work and relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 hover:border-primary/50 rounded-xl p-8 transition-all hover:shadow-xl hover:shadow-primary/20"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Leadership <span className="text-primary">Team</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Dedicated professionals driving innovation and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
              <div className="bg-gradient-to-br from-primary/30 to-orange-500/30 h-40 flex items-center justify-center border-b border-gray-800">
                <div className="text-6xl">👤</div>
              </div>
              <div className="p-6">
                <h3 className="text-white font-bold text-xl">Masood Ali Wani</h3>
                <p className="text-primary font-semibold text-sm mb-3">Founder & Owner</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Visionary leader with 15+ years of expertise in industrial fabrication and infrastructure development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t border-primary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Choose <span className="text-primary">Srinagar Hardware?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "15+ Years Experience",
                description: "Proven track record of successful projects and satisfied clients"
              },
              {
                title: "100+ Completed Projects",
                description: "From residential to large-scale industrial infrastructure"
              },
              {
                title: "50+ Team Members",
                description: "Skilled professionals dedicated to excellence"
              },
              {
                title: "State-of-the-Art Facility",
                description: "Modern equipment and technology for precision work"
              },
              {
                title: "Quality Assurance",
                description: "Every project meets or exceeds industry standards"
              },
              {
                title: "Dedicated Support",
                description: "Personalized attention throughout your project lifecycle"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-primary/50 transition-colors">
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let's Build Something <span className="text-primary">Great</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Ready to discuss your project? Connect with our team today
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
