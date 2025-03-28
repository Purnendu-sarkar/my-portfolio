import { useState } from "react";
import { Mail, Phone, MessageSquare } from "react-feather";
import Lottie from "lottie-react";
import contactAnimation from "../assets/Lottie/contact.json";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      {/* Direct Contact Information Section */}
      <section id="contact-info" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Contact Me Directly
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a
                href="mailto:dsr102.purnendu@gmail.com"
                className="flex flex-col items-center p-8 bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <Mail className="text-indigo-600 mb-4" size={32} />
                <span className="text-lg">dsr102.purnendu@gmail.com</span>
              </a>
              <a
                href="tel:+8801409012843"
                className="flex flex-col items-center p-8 bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform translate-y-4"
              >
                <Phone className="text-indigo-600 mb-4" size={32} />
                <span className="text-lg">+880 1409-012843</span>
              </a>
              <a
                href="https://wa.me/+8801409012843"
                className="flex flex-col items-center p-8 bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <MessageSquare className="text-indigo-600 mb-4" size={32} />
                <span className="text-lg">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact-form"
        className="py-20 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Send a Message
          </h2>{" "}
          0
          <div className="max-w-lg mx-auto flex flex-col items-center">
            <Lottie
              animationData={contactAnimation}
              loop
              autoplay
              className="w-60 mb-6"
            />
            <form
              onSubmit={handleSubmit}
              className="w-full bg-gray-800 p-10 rounded-lg shadow-xl space-y-6"
            >
              <div className="mb-6">
                <label className="block text-gray-300 mb-2" htmlFor="name">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-900 text-white"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-300 mb-2" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-900 text-white"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-300 mb-2" htmlFor="message">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-900 text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-lg shadow-md transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
