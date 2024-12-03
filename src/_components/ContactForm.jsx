import { useState } from 'react';
import axios from 'axios';

 function ContactForm() {
  const [selectedInterest, setSelectedInterest] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interest: null,
  });
  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const interests = ['App Development', 'Web Development', 'Graphic Design', 'Other'];

  const handleInterestClick = (interest) => {
    setSelectedInterest((prevInterest) => (prevInterest === interest ? null : interest));
    setFormData((prev) => ({ ...prev, interest }));
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.interest) {
      setSubmitStatus({
        loading: false,
        success: false,
        error: 'Please select an interest',
      });
      return;
    }

    setSubmitStatus({ loading: true, success: false, error: null });

    try {
      const response = await axios.post('http://localhost:3000/send-email', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });

      setSubmitStatus({
        loading: false,
        success: true,
        error: null,
      });

      setFormData({
        name: '',
        email: '',
        message: '',
        interest: null,
      });
      setSelectedInterest(null);
    } catch (error) {
      setSubmitStatus({
        loading: false,
        success: false,
        error: error.response?.data?.message || 'Failed to send message. Please try again.',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section: Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-2xl font-bold text-[#002B5B] mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            {submitStatus.error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                {submitStatus.error}
              </div>
            )}
            {submitStatus.success && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}

            <div className="mb-6">
              <p className="text-sm mb-3">I'm interested in</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedInterest === interest
                        ? 'bg-[#00A6B2] text-white'
                        : 'border border-gray-200 hover:border-[#00A6B2] text-gray-600'
                    }`}
                    onClick={() => handleInterestClick(interest)}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-[#00A6B2]"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="email@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-[#00A6B2]"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="I would like to inquire about..."
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-[#00A6B2]"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitStatus.loading}
                className={`w-full text-white py-2 px-4 rounded-md transition duration-300 ${
                  submitStatus.loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#00A6B2] hover:bg-[#008C98]'
                }`}
              >
                {submitStatus.loading ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>

        {/* Right Section: Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              We'd love to <br /> hear from you
            </h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <img src="phone.png" alt="phone" className="w-6 h-6 mr-2" />
              <span className="text-lg">+916352329052</span>
            </div>
            <div className="flex items-center">
              <img src="email.png" alt="mail" className="w-6 h-6 mr-2" />
              <span className="text-lg">info@eloquentsolutions.in</span>
            </div>
            <div className="flex items-center">
              <img src="linkedln.png" alt="linkedin" className="w-6 h-6 mr-2" />
              <a
                href="https://linkedin.com/company/eloquent-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-lg"
              >
                linkedin.com/company/eloquent-solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;