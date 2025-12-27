const Contact = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>

        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Have a question, suggestion, or feedback?  
          We'd love to hear from you. Reach out and let's build better ideas together.
        </p>

        <form className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              required
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent resize-none"
            />
          </div>

          <button 
            type="submit" 
            className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200 active:scale-95"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
