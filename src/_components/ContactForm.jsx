import { useState, useRef } from 'react';
import axios from 'axios';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interest: null,
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const interests = ['App Development', 'Web Development', 'Graphic Design', 'Other'];
  const successMessageTimeoutRef = useRef(null);

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required.';
    if (!formData.email) errors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Invalid email format.';
    if (!formData.message) errors.message = 'Message is required.';
    if (!formData.interest) errors.interest = 'Please select an interest.';
    return errors;
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleInterestClick = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interest: prev.interest === interest ? null : interest,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setSubmitStatus({ loading: true, success: false, error: null });

    try {
      await axios.post('http://localhost:3000/send-email', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setSubmitStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', message: '', interest: null });

      // Clear success message after 5 seconds
      successMessageTimeoutRef.current = setTimeout(() => {
        setSubmitStatus((prev) => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      setSubmitStatus({
        loading: false,
        success: false,
        error: error.response?.data?.message || 'Failed to send message. Please try again later.',
      });
    }
  };

  const isSubmitDisabled = !formData.name || !formData.email || !formData.message || !formData.interest;

  return (
    <div className=" bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section: Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg border">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} noValidate>
            {submitStatus.error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded" aria-live="polite">
                {submitStatus.error}
              </div>
            )}
            {submitStatus.success && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded" aria-live="polite">
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
                    className={`px-4 py-2 rounded-full text-sm transition ${
                      formData.interest === interest
                        ? 'bg-teal-600 text-white'
                        : 'border border-gray-300 hover:border-teal-600 text-gray-700'
                    }`}
                    onClick={() => handleInterestClick(interest)}
                  >
                    {interest}
                  </button>
                ))}
              </div>
              {formErrors.interest && <p className="text-sm text-red-600">{formErrors.interest}</p>}
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-teal-600"
                  required
                />
                {formErrors.name && <p className="text-sm text-red-600">{formErrors.name}</p>}
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-teal-600"
                  required
                />
                {formErrors.email && <p className="text-sm text-red-600">{formErrors.email}</p>}
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-teal-600"
                  required
                />
                {formErrors.message && <p className="text-sm text-red-600">{formErrors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitDisabled || submitStatus.loading}
                className={`w-full text-white py-2 px-4 rounded-md transition duration-300 ${
                  isSubmitDisabled || submitStatus.loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-teal-600 hover:bg-teal-700'
                }`}
              >
                {submitStatus.loading ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>

        {/* Right Section: Contact Information */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            We'd love to <br /> hear from you
          </h2>
          <div className="space-y-4">
            <ContactInfo icon="assets/images/phone.png" text="+916352329052" />
            <ContactInfo icon="assets/images/email.png" text="info@eloquentsolutions.in" />
            <ContactInfo icon="assets/images/linkedln.png" text="linkedin.com/company/eloquent-solutions" link="https://linkedin.com/company/eloquent-solutions/" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfo({ icon, text, link }) {
  return (
    <div className="flex items-center">
      <img src={icon} alt="icon" className="w-6 h-6 mr-2" />
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-lg">
          {text}
        </a>
      ) : (
        <span className="text-lg">{text}</span>
      )}
    </div>
  );
}

export default ContactForm;
