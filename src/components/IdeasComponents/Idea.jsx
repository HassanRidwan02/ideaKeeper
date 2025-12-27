import { useState, useEffect } from "react";
import { auth, db } from "../../firebase/firebaseConfig";
import { collection, addDoc, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Ideas = () => {
  const navigate = useNavigate();
  const [ideas, setIdeas] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  // Load ideas from Firebase on component mount
  useEffect(() => {
    const loadIdeas = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          navigate("/signin");
          return;
        }

        const q = query(collection(db, "ideas"), where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);
        const loadedIdeas = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setIdeas(loadedIdeas);
      } catch (error) {
        console.error("Error loading ideas:", error);
      } finally {
        setLoading(false);
      }
    };

    loadIdeas();
  }, [navigate]);

  const handleAddIdea = async (e) => {
    e.preventDefault();
    if (!title || !description) return;

    try {
      const user = auth.currentUser;
      if (!user) {
        alert("You must be logged in to add ideas");
        return;
      }

      const docRef = await addDoc(collection(db, "ideas"), {
        title,
        description,
        userId: user.uid,
        createdAt: new Date(),
      });

      setIdeas([{ id: docRef.id, title, description, userId: user.uid, createdAt: new Date() }, ...ideas]);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error adding idea:", error);
      alert("Failed to save idea. Please try again.");
    }
  };

  const handleDeleteIdea = async (ideaId) => {
    try {
      await deleteDoc(doc(db, "ideas", ideaId));
      setIdeas(ideas.filter((idea) => idea.id !== ideaId));
    } catch (error) {
      console.error("Error deleting idea:", error);
      alert("Failed to delete idea. Please try again.");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 sm:p-6 min-h-screen bg-gray-50">
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
      <main className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md flex flex-col">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Ideas</h2>
        <div className="flex-1 overflow-y-auto border border-gray-200 rounded-lg p-4 bg-gray-50">
          {loading ? (
            <p className="text-gray-500 text-lg">Loading your ideas...</p>
          ) : ideas.length === 0 ? (
            <p className="text-gray-500 text-lg">No ideas yet. Add one!</p>
          ) : (
            <ul className="space-y-4">
              {ideas.map((idea) => (
                <li 
                  key={idea.id} 
                  className="p-4 border border-gray-200 rounded-lg bg-white hover:shadow-md hover:translate-y-0.5 transition-all duration-150 flex justify-between items-start"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{idea.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{idea.description}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteIdea(idea.id)}
                    className="ml-4 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
};

export default Ideas;
