const About = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">About IdeaKeeper</h1>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          <strong>IdeaKeeper</strong> is a simple yet powerful web application
          designed to help individuals capture, organize, and revisit their
          ideas effortlessly.
        </p>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Great ideas often come unexpectedly; during a conversation, while
          working, or even in the middle of the night. Unfortunately, many of
          these ideas are lost because they are written in random places or not
          written down at all. IdeaKeeper was created to solve this exact problem.
        </p>

        <h2 className="text-3xl font-bold text-indigo-600 mb-4 mt-8">Why IdeaKeeper Was Built</h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          As a problem-solving frontend engineer, I constantly generate ideas—
          project ideas, product ideas, and learning ideas—but struggled to
          keep them in one reliable place. Notes were scattered across notebooks,
          apps, and documents.
        </p>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          IdeaKeeper was built to provide clarity, organization, and focus—a
          single source of truth for ideas worth building.
        </p>

        <h2 className="text-3xl font-bold text-indigo-600 mb-4 mt-8">What You Can Do With IdeaKeeper</h2>
        <ul className="list-none space-y-3 mb-8 text-lg text-gray-700">
          <li className="flex items-center gap-3"><span className="text-indigo-600 font-bold">✓</span> Capture ideas instantly</li>
          <li className="flex items-center gap-3"><span className="text-indigo-600 font-bold">✓</span> Organize ideas for easy access</li>
          <li className="flex items-center gap-3"><span className="text-indigo-600 font-bold">✓</span> Revisit and refine ideas over time</li>
          <li className="flex items-center gap-3"><span className="text-indigo-600 font-bold">✓</span> Turn thoughts into actionable plans</li>
        </ul>

        <h2 className="text-3xl font-bold text-indigo-600 mb-4 mt-8">The Vision</h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The long-term vision for IdeaKeeper is to grow into a platform that
          helps users move ideas from conception to execution, encouraging
          consistency, creativity, and productivity.
        </p>

        <p className="text-lg text-gray-700 italic font-semibold border-l-4 border-indigo-600 pl-6 py-4 mt-10 bg-indigo-50">
          Every meaningful product starts with a simple idea.
          <br />
          <strong className="text-indigo-600">IdeaKeeper exists to make sure your ideas never get lost.</strong>
        </p>
      </div>
    </section>
  );
};

export default About;
