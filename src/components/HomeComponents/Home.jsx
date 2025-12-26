import {useNavigate} from 'react-router-dom'
import Button from '../Reusables/Button'

export default function Home() {

  const navigate = useNavigate()
  return (
    <div className="home">
      <section className="hero">
        <h1>Capture Every Brilliant Idea</h1>
        <p>
          Never lose a thought again. IdeaKeeper helps you organize, develop, 
          and bring your ideas to life <span> (all in one place). </span>
        </p>
        <Button onClick={()=> navigate('/ideas')}>Start Keeping Ideas</Button>
      </section>

      <section className="features">
        <h2>Why IdeaKeeper?</h2>
        <div className="feature-grid">
          <div className="feature">
            <h3>Quick Capture</h3>
            <p>Jot down ideas instantly before they slip away</p>
          </div>
          <div className="feature">
            <h3>Smart Organization</h3>
            <p>Tag, categorize, and find your ideas effortlessly</p>
          </div>
          <div className="feature">
            <h3>Develop & Refine</h3>
            <p>Turn rough thoughts into actionable plans</p>
          </div>
          <div className="feature">
            <h3>Sync Everywhere</h3>
            <p>Access your ideas across all your devices</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Keep Your Best Ideas?</h2>
        <p>Join thousands of creators, entrepreneurs, and thinkers</p>
        <Button onClick={()=> navigate('/ideas')}>Get Started Free</Button>
      </section>
    </div>
  );
}