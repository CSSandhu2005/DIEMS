import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left div - Title, Subtitle and Social Media Icons */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 space-y-4"
        >
          <h2 className="text-3xl font-semibold text-[#33CCFF]">Get in Touch With Us</h2>
          <p className="text-lg text-[#848E98]">
            Have questions about admissions, courses, or campus life? Fill out the form below — we're here to help you!
          </p>

          <div className="flex space-x-4 mt-8">
            <a href="https://x.com/gdscdiems" target="_blank" rel="noopener noreferrer">
              <Twitter size={20} className="text-white" />
            </a>
            <a href="https://www.linkedin.com/company/deogiri-institute-of-engineering-&-management-studies-aurangabad/about/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} className="text-white" />
            </a>
            <a href="https://www.facebook.com/DIEMS.Auranagabad/" target="_blank" rel="noopener noreferrer">
              <Facebook size={20} className="text-white" />
            </a>
            <a href="https://www.instagram.com/official_diems/" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} className="text-white" />
            </a>
            <a href="https://www.youtube.com/c/DeogiriInstituteofEngineeringandManagement" target="_blank" rel="noopener noreferrer">
              <Youtube size={20} className="text-white" />
            </a>
          </div>
        </motion.div>

        {/* Right div - Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <form onSubmit={handleSubmit} className="space-y-4 border border-[#254B88] p-6 rounded-lg shadow-[0_0_30px_#33CCFF30]">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#254B88] rounded-md bg-transparent text-white placeholder-[#848E98]"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#254B88] rounded-md bg-transparent text-white placeholder-[#848E98]"
              required
            />
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#254B88] rounded-md bg-transparent text-white placeholder-[#848E98]"
              required
            />
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#254B88] rounded-md bg-transparent text-white placeholder-[#848E98]"
              rows={3}
              required
            />
            <button
              type="submit"
              className="w-full py-2 bg-[#33CCFF] text-white text-base font-semibold rounded-md hover:bg-[#00bdfc] transition"
            >
              Submit
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
