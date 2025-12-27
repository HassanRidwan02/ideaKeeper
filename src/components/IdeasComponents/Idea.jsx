import { useState } from "react";

const Ideas = () => {
  const [ideas, setIdeas] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddIdea = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    setIdeas([{ title, description }, ...ideas]);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-4 sm:p-6 min-h-screen bg-gray-50">
      {/* LEFT COLUMN: Form */}
      <aside className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md h-fit sticky top-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Idea</h2>
        <form onSubmit={handleAddIdea} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Idea Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
          />
          <textarea
            placeholder="Idea Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent resize-none h-32"
          />
          <button 
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200 active:scale-95"
          >
            Add Idea
          </button>
        </form>
      </aside>

      {/* RIGHT COLUMN: Ideas List */}
      <main className="lg:col-span-3 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Ideas</h2>
        {ideas.length === 0 ? (
          <p className="text-gray-500 text-lg">No ideas yet. Add one!</p>
        ) : (
          <ul className="space-y-4">
            {ideas.map((idea, index) => (
              <li 
                key={index} 
                className="p-4 border border-gray-200 rounded-lg bg-gray-50 hover:shadow-md hover:translate-y-0.5 transition-all duration-150"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{idea.title}</h3>
                <p className="text-gray-700 leading-relaxed">{idea.description}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

export default Ideas;
