import {useNavigate} from 'react-router-dom'
import { auth } from "../../firebase/firebaseConfig";
import Button from '../Reusables/Button'

export default function Home() {

  const navigate = useNavigate()

  function handleGetStarted(){
    const user = auth.currentUser
    if (user){
      navigate('/ideas')
    }
    else {
      navigate('signup')
    }
  }
  return (
    <div className="w-4/5 mx-auto py-20">
      <section className="text-center mb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Capture Every Brilliant Idea</h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mx-auto max-w-2xl leading-relaxed mb-8">
          Never lose a thought again. IdeaKeeper helps you organize, develop, 
          and bring your ideas to life <span className="text-indigo-600 font-semibold"> (all in one place). </span>
        </p>
        <Button onClick={handleGetStarted}>Start Keeping Ideas</Button>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 text-center mb-12">Why IdeaKeeper?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
          <div className="bg-indigo-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Capture</h3>
            <p className="text-gray-700">Jot down ideas instantly before they slip away</p>
          </div>
          <div className="bg-indigo-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Organization</h3>
            <p className="text-gray-700">Tag, categorize, and find your ideas effortlessly</p>
          </div>
          <div className="bg-indigo-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Develop & Refine</h3>
            <p className="text-gray-700">Turn rough thoughts into actionable plans</p>
          </div>
          <div className="bg-indigo-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Sync Everywhere</h3>
            <p className="text-gray-700">Access your ideas across all your devices</p>
          </div>
        </div>
      </section>

      <section className="text-center py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Ready to Keep Your Best Ideas?</h2>
        <p className="text-xl text-gray-600 mb-8">Join thousands of creators, entrepreneurs, and thinkers</p>
        <Button onClick={handleGetStarted}>Get Started Free</Button>
      </section>
    </div>
  );
}