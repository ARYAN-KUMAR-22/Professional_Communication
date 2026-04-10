import '../App.css'
import Navbar from './navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="landing-page-full">
                    <section className="hero">
                        <h1>Master Professional Communication</h1>
                        <p>Enhance your communication skills with comprehensive vocabulary, writing techniques, and professional soft skills</p>
                        <a href="/keywords" className="cta-button">Explore Keywords</a>
                    </section>

                    <section className="features">
                        <div className="feature-card">
                            <h3>📚 191+ Keywords</h3>
                            <p>Build your professional vocabulary with carefully curated terms, synonyms, and antonyms for business communication</p>
                        </div>
                        <div className="feature-card">
                            <h3>✍️ Writing Skills</h3>
                            <p>Master grammar, sentence structure, punctuation, and professional writing techniques</p>
                        </div>
                        <div className="feature-card">
                            <h3>🎤 Communication</h3>
                            <p>Develop oral communication, presentation skills, and soft skills for workplace success</p>
                        </div>
                        <div className="feature-card">
                            <h3>🎯 Activities</h3>
                            <p>Practice through interactive exercises and real-world scenarios to reinforce learning</p>
                        </div>
                    </section>

                    <section className="content-preview">
                        <h2>What You'll Learn</h2>
                        <div className="preview-grid">
                            <div className="preview-item">
                                <h4>Professional Communication Skills</h4>
                                <p>Core competencies for effective workplace communication</p>
                            </div>
                            <div className="preview-item">
                                <h4>Grammar & Language Structure</h4>
                                <p>Master English fundamentals and advanced grammar rules</p>
                            </div>
                            <div className="preview-item">
                                <h4>Vocabulary Building</h4>
                                <p>Expand your professional vocabulary systematically</p>
                            </div>
                            <div className="preview-item">
                                <h4>Presentation Skills</h4>
                                <p>Deliver impactful presentations and oral communication</p>
                            </div>
                        </div>
                    </section>

                    <section className="cta-section">
                        <h2>Ready to Elevate Your Communication?</h2>
                        <p>Start exploring our comprehensive resources today</p>
                        <a href="/keywords" className="cta-button-large">Get Started Now</a>
                    </section>
                </div>
        </>
    )
}

export default Home;
