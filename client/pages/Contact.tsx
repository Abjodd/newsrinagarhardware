import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Contact us to discuss your industrial project requirements
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              </div>

              {/* Phone */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-primary font-bold text-lg">9419003668</p>
                    <p className="text-gray-400 text-sm mt-1">Available Mon-Sat, 9AM-6PM</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Email</h3>
                    <p className="text-primary font-bold break-all">waniamasoodali@gmail.com</p>
                    <p className="text-gray-400 text-sm mt-1">We respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Location</h3>
                    <p className="text-gray-300 font-semibold">Baghi Ali Mardan Khan</p>
                    <p className="text-gray-400 text-sm">Industrial Estate, Srinagar</p>
                  </div>
                </div>
              </div>

              {/* Owner */}
              <div className="bg-gradient-to-br from-primary/20 to-orange-500/20 border border-primary/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-xl">
                    👤
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Owner</h3>
                    <p className="text-white font-bold">Masood Ali Wani</p>
                    <p className="text-gray-400 text-sm">Founder & Director</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-3">Business Hours</h3>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-300">Monday - Saturday</p>
                      <p className="text-primary font-semibold">9:00 AM - 6:00 PM</p>
                      <p className="text-gray-400">Sunday - Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 md:p-10">
                <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-white font-semibold mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-white font-semibold mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-white font-semibold mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-white font-semibold mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-white font-semibold mb-2">Service Interested In</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="industrial-cages">Industrial Cages</option>
                      <option value="chain-link">Chain Link Fencing</option>
                      <option value="solar-fencing">Solar Power Fencing</option>
                      <option value="structural-steel">Structural Steel</option>
                      <option value="bridges-trusses">Bridges & Trusses</option>
                      <option value="fence-poles">Fence Poles</option>
                      <option value="fabrication">Industrial Fabrication</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-white font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-lg"
                  >
                    Send Message
                  </button>
                </form>

                <p className="text-gray-400 text-sm mt-4">
                  We'll get back to you within 24 hours during business hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Visit Our Facility</h2>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 h-96">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-orange-500/20 flex items-center justify-center text-center">
              <div>
                <p className="text-6xl mb-4">📍</p>
                <p className="text-white font-bold text-xl mb-2">Baghi Ali Mardan Khan Industrial Estate</p>
                <p className="text-gray-400">Srinagar, Jammu & Kashmir</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "What is your typical project turnaround time?",
                a: "Project timelines vary based on complexity. Simple fencing projects may take 2-4 weeks, while large structural steel projects can take 2-3 months. We'll provide a detailed timeline during consultation."
              },
              {
                q: "Do you offer custom design services?",
                a: "Yes, we offer comprehensive design and engineering services. Our team will work with you to create custom solutions tailored to your specific requirements."
              },
              {
                q: "What areas do you serve?",
                a: "We primarily serve the Kashmir region and surrounding areas. For projects outside our region, we can discuss custom arrangements. Please contact us for details."
              },
              {
                q: "Do you provide warranty on your products?",
                a: "Yes, all our products come with comprehensive warranties. The length and coverage depend on the specific product and service. We'll discuss warranty details during your consultation."
              },
              {
                q: "Can you handle emergency projects?",
                a: "We do accept urgent projects depending on our current workload. Please call us directly at 9419003668 to discuss your emergency requirements."
              },
              {
                q: "How do I get a quote for my project?",
                a: "You can request a quote by filling out our contact form above, calling us directly, or emailing us with project details. We'll schedule a consultation and provide a detailed estimate."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-primary/50 transition-colors">
                <h3 className="text-white font-bold text-lg mb-3">{faq.q}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
