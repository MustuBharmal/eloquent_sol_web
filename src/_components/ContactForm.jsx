import { useState } from 'react';
import axios from 'axios'; // Make sure to install axios

export default function ContactForm() {
  const [selectedInterest, setSelectedInterest] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interest: null
  });
  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const interests = ['App Development', 'Web Development', 'Graphic Design', 'Other'];

  const handleInterestClick = (interest) => {
    setSelectedInterest((prevInterest) => (prevInterest === interest ? null : interest));
    setFormData(prev => ({ ...prev, interest }));
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.interest) {
      setSubmitStatus({
        loading: false,
        success: false,
        error: 'Please select an interest'
      });
      return;
    }

    setSubmitStatus({ loading: true, success: false, error: null });

    try {
      const response = await axios.post('http://localhost:3000/send-email', formData, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });

      // Handle successful submission
      setSubmitStatus({ 
        loading: false, 
        success: true, 
        error: null 
      });

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: '',
        interest: null
      });
      setSelectedInterest(null);

    } catch (error) {
      // Handle submission error
      setSubmitStatus({
        loading: false,
        success: false,
        error: error.response?.data?.message || 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <div className="w-[1440px] h-[994px] bg-[#F2F2F2] relative" style={{ marginTop: '6248px' }}>
      {/* Contact Us Title */}
      <h1 className="text-3xl font-bold text-[#002B5B] text-center pt-8 mb-8">Contact Us</h1>

      {/* Existing contact details section remains the same */}
      <div className="absolute top-[304px] left-[910px] w-[243px]">
        <h2 className="font-semibold text-[32px] leading-[39.01px] text-[#1A202C]">
          We'd love to<br />hear from you
        </h2>
      </div>

      {/* Contact Details */}
      <div className="absolute top-[446px] left-[910px] w-[340px] h-[104px]">
        <div className="flex items-center mb-5">
          <span className="w-6 h-6 mr-2">
            <img src="phone.png" alt="phone" />
          </span>
          <span className="text-base leading-[18.75px]">+916352329052</span>
        </div>
        <div className="flex items-center">
          <span className="w-6 h-6 mr-2">
            <img src="email.png" alt="mail" />
          </span>
          <span className="text-base leading-[18.75px]">info@eloquentsolutions.in</span>
        </div>
        <div className="flex items-center mt-3">
          <span className="w-6 h-6 mr-2">
            <img src="linkedln.png" alt="linkedin" />
          </span>
          <a
            href="https://linkedin.com/company/shopkart-solutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base leading-[18.75px] text-blue-500 underline truncate"
            style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
          >
            linkedin.com/company/eloquent-solutions/
          </a>
        </div>
      </div>

      {/* Form Section */}
      <div className="absolute top-[304px] left-[190px] w-[660px] bg-white p-6 rounded-lg border border-[#E5E7EB]">
        <form onSubmit={handleSubmit}>
          {/* Status Messages */}
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
    </div>
  );
}