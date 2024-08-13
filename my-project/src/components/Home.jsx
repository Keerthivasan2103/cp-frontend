import React from 'react';
import a from '../assets/a.png';
import b from '../assets/b.png';
import c from '../assets/c.png';
import e from '../assets/e.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

// TestimonialCard Component
const TestimonialCard = ({ logo, text, author }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center text-center">
      <img src={logo} alt={`${author} logo`} className="h-16 mb-4" />
      <p className="text-gray-700 mb-4">{text}</p>
      <p className="font-semibold text-gray-900">{author}</p>
    </div>
  );
};

// Testimonials Component
const Testimonials = () => {
  const testimonials = [
    {
      logo: a,
      text: 'This service has transformed our business!',
      author: 'IT',
    },
    {
      logo: b,
      text: 'Exceptional quality and customer service.',
      author: 'HR',
    },
    {
      logo: c,
      text: 'Highly recommended for anyone looking to improve their workflow.',
      author: 'AI',
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              logo={testimonial.logo}
              text={testimonial.text}
              author={testimonial.author}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Component that combines the Navbar and Testimonials
const App = () => {
  const [formData, setFormData] = useState({
    St_name: '',
    St_email: '',
    St_phonenumber: '',
    St_state: '',
    St_country: '',
    St_pincode: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://cp-backend-007b.onrender.com/form', formData);
      console.log(response.data);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      alert('Failed to submit the form.');
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="flex items-center justify-between">
          <img src={e} alt="Logo" className="h-8" />
          <ul className="flex space-x-4 ml-auto mr-auto">
            <li className="text-white hover:text-gray-300 transition duration-300">HOME</li>
            <li className="text-white hover:text-gray-300 transition duration-300">ABOUT</li>
            <li className="text-white hover:text-gray-300 transition duration-300">SERVICES</li>
            <li className="text-white hover:text-gray-300 transition duration-300">CONTACT</li>
          </ul>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300">
            <Link to="/login">LOGIN</Link>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Our Website</h1>
          <p className="text-lg mb-10 text-center max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan ante
            sed massa tincidunt, et vehicula ligula commodo.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Form Section */}
      <h1 className="text-center text-gray-700 font-bold text-3xl mb-8 mt-12">Enter Your Student Details</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8">
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="St_name" className="block text-gray-700 font-semibold mb-2">Enter Name</label>
            <input
              id="St_name"
              type="text"
              name="St_name"
              value={formData.St_name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="St_email" className="block text-gray-700 font-semibold mb-2">Enter Email</label>
            <input
              id="St_email"
              type="email"
              name="St_email"
              value={formData.St_email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="St_phonenumber" className="block text-gray-700 font-semibold mb-2">Enter Phone Number</label>
            <input
              id="St_phonenumber"
              type="tel"
              name="St_phonenumber"
              value={formData.St_phonenumber}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="St_state" className="block text-gray-700 font-semibold mb-2">Enter State</label>
            <input
              id="St_state"
              type="text"
              name="St_state"
              value={formData.St_state}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="St_country" className="block text-gray-700 font-semibold mb-2">Enter Country</label>
            <input
              id="St_country"
              type="text"
              name="St_country"
              value={formData.St_country}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="St_pincode" className="block text-gray-700 font-semibold mb-2">Enter PinCode</label>
            <input
              id="St_pincode"
              type="number"
              name="St_pincode"
              value={formData.St_pincode}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded transition duration-300 w-full mt-4">
              Save
            </button>
          </div>
        </div>
      </form>

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Company Name. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default App;
