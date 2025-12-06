import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const contactRef = useScrollReveal();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Sending form data:', formData); // Debug

    // Send email using EmailJS
    emailjs.send(
      'service_afqy635',   // Your Service ID
      'template_fadkzwx',  // Your Template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString(), // optional
      },
      'a6tK3146HviwEyTBB'    // Your Public Key
    )
      .then((response) => {
        console.log('Email sent successfully:', response);
        setStatus('✅ Message sent! Thank you for reaching out.');
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setStatus(''), 5000); // Hide message after 5 sec
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        setStatus('❌ Failed to send message. Please try again.');
      });
  };

  return (
    <section ref={contactRef} id="contact" className="py-24  scroll-reveal z-40 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Talk</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always interested in hearing about new projects and opportunities. Whether you need a custom WordPress site, a Shopify store, or a complete web solution, I'd love to help bring your ideas to life.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg shadow-md hover:shadow-lg hover:shadow-cyan-500/20 transition-all border border-gray-800 hover:border-cyan-600">
                <div className="p-3 bg-gray-800 rounded-[100px] ">
                  <Mail size={24} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <p className="text-gray-400">
                    <a href="mailto:bhardwajmehak25@gmail.com" className="hover:underline">
                      bhardwajmehak25@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-900 rounded-lg shadow-md hover:shadow-[0_0_20px_#ffffff33] transition-all border border-gray-800 hover:border-cyan-600">
                <div className=" p-3 bg-gray-800 rounded-lg pulse">
                  <Phone size={24} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Phone</h4>
                  <p className="text-gray-400">
                    <a href="tel:8628031066" className="hover:underline">
                      8628031066
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-600 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {status && (
                <div className="p-4 bg-cyan-900 text-cyan-200 rounded-lg text-center border border-cyan-700">
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
