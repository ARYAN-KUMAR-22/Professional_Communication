import '../App.css'
import Navbar from './navbar'
import Sidebar from './Sidebar'
import Kcontainer from './Kcontainer'

const About_Us = () => {
    return (
        <>
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="container">
                    <h1 style={{animation: 'slideInLeft 0.6s ease'}}>About Us</h1>
                    
                    <section style={{animation: 'slideInRight 0.5s ease'}}>
                        <p>Welcome to Professional Communication Skills Hub – your comprehensive resource for mastering the art and science of effective communication in professional settings.</p>
                    </section>

                    <section style={{animation: 'slideInLeft 0.5s ease', animationDelay: '0.1s'}}>
                        <h2>Our Mission</h2>
                        <p>We believe that strong communication skills are the cornerstone of professional success. Our mission is to empower individuals, teams, and organizations to communicate with clarity, confidence, and authenticity in every interaction.</p>
                    </section>

                    <section style={{animation: 'slideInRight 0.5s ease', animationDelay: '0.2s'}}>
                        <h2>What We Offer</h2>
                        <ul className="feature-list">
                            <li><strong>Comprehensive Content:</strong> Explore 15+ topics covering grammar, vocabulary, writing skills, oral communication, and professional soft skills</li>
                            <li><strong>Interactive Learning:</strong> Practice with our simulators and quizzes to get real-time feedback on your communication</li>
                            <li><strong>Practical Tips & Tricks:</strong> Learn proven strategies that professionals use to influence, persuade, and connect</li>
                            <li><strong>Real-World Examples:</strong> Every concept is backed by examples relevant to modern workplaces</li>
                        </ul>
                    </section>

                    <section style={{animation: 'slideInLeft 0.5s ease', animationDelay: '0.3s'}}>
                        <h2>Who Should Use This Platform?</h2>
                        <ul className="feature-list">
                            <li>Students preparing for careers in corporate environments</li>
                            <li>Professionals seeking to advance their communication capabilities</li>
                            <li>Managers and leaders enhancing team communication</li>
                            <li>Non-native English speakers looking to improve professional fluency</li>
                            <li>Anyone committed to personal and professional growth</li>
                        </ul>
                    </section>

                    <section style={{animation: 'slideInRight 0.5s ease', animationDelay: '0.4s'}}>
                        <h2>Our Core Values</h2>
                        <table style={{width: '100%', borderCollapse: 'collapse'}}>
                            <thead>
                                <tr style={{backgroundColor: '#667eea', color: 'white'}}>
                                    <th style={{border: '1px solid #ddd', padding: '12px'}}>Value</th>
                                    <th style={{border: '1px solid #ddd', padding: '12px'}}>What It Means</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{border: '1px solid #ddd', padding: '12px'}}><strong>Clarity</strong></td>
                                    <td style={{border: '1px solid #ddd', padding: '12px'}}>Communication should be clear, concise, and easily understood</td>
                                </tr>
                                <tr style={{backgroundColor: '#f5f5f5'}}>
                                    <td style={{border: '1px solid #ddd', padding: '12px'}}><strong>Authenticity</strong></td>
                                    <td style={{border: '1px solid #ddd', padding: '12px'}}>Genuine communication builds trust and lasting relationships</td>
                                </tr>
                                <tr>
                                    <td style={{border: '1px solid #ddd', padding: '12px'}}><strong>Integrity</strong></td>
                                    <td style={{border: '1px solid #ddd', padding: '12px'}}>Ethical communication is the foundation of professional credibility</td>
                                </tr>
                                <tr style={{backgroundColor: '#f5f5f5'}}>
                                    <td style={{border: '1px solid #ddd', padding: '12px'}}><strong>Growth</strong></td>
                                    <td style={{border: '1px solid #ddd', padding: '12px'}}>Communication skills can always be improved and refined</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section style={{animation: 'slideInLeft 0.5s ease', animationDelay: '0.5s'}}>
                        <h2>How to Get Started</h2>
                        <ol>
                            <li><strong>Explore the Menu:</strong> Use the sidebar to navigate to topics that interest you most</li>
                            <li><strong>Read & Learn:</strong> Start with the fundamentals and progress to advanced strategies</li>
                            <li><strong>Practice:</strong> Use our interactive simulators and quizzes to test your knowledge</li>
                            <li><strong>Apply:</strong> Implement the tips and tricks in your daily professional interactions</li>
                            <li><strong>Reflect:</strong> Notice improvements in your communication effectiveness over time</li>
                        </ol>
                    </section>

                    <section style={{animation: 'slideInRight 0.5s ease', animationDelay: '0.6s'}}>
                        <h2>A Commitment to Excellence</h2>
                        <div className="box">
                            <p>We understand that communication is not one-size-fits-all. Whether you're composing a formal email, delivering a presentation, negotiating a contract, or providing feedback to your team, the principles outlined in our platform will help you communicate with greater impact.</p>
                            <p><strong>Remember:</strong> Every great professional was once where you are now. With dedication, practice, and the right resources, you'll develop communication skills that propel your career forward.</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default About_Us;