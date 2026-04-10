import '../App.css'
import Navbar from './navbar'
import Sidebar from './Sidebar'

const ProfessionalSkills = () => {
    return (
        <>
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="container" style={{animation: 'fadeIn 0.6s ease'}}>
                    <h1 style={{animation: 'slideInLeft 0.6s ease', color: '#2c3e50'}}>Professional Skills</h1>
                
                <section>
                    <h2>What are Professional Skills?</h2>
                    <p>
                        Professional skills are competencies and abilities that enable individuals to succeed in the workplace. 
                        They encompass technical expertise, interpersonal abilities, and personal qualities that contribute to career advancement 
                        and organizational value.
                    </p>
                </section>

                <section>
                    <h2>Categories of Professional Skills</h2>
                    
                    <details>
                        <summary className='ml2'>1. Technical Skills</summary>
                        <div className="box">
                            <p><strong>Hard, job-specific skills:</strong></p>
                            <ul>
                                <li>Software proficiency (Excel, Salesforce, etc.)</li>
                                <li>Industry knowledge</li>
                                <li>Technical certifications</li>
                                <li>Data analysis</li>
                                <li>Financial acumen</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>2. Time Management</summary>
                        <div className="box">
                            <p><strong>Ability to organize, prioritize, and execute:</strong></p>
                            <ul>
                                <li>Prioritizing tasks effectively</li>
                                <li>Meeting deadlines consistently</li>
                                <li>Managing multiple projects</li>
                                <li>Using tools like calendars and project management software</li>
                                <li>Avoiding procrastination</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>3. Problem-Solving</summary>
                        <div className="box">
                            <p><strong>Analyzing challenges and finding solutions:</strong></p>
                            <ul>
                                <li>Identifying root causes</li>
                                <li>Generating creative solutions</li>
                                <li>Making data-driven decisions</li>
                                <li>Implementing and monitoring solutions</li>
                                <li>Learning from failures</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>4. Leadership</summary>
                        <div className="box">
                            <p><strong>Guiding and influencing others:</strong></p>
                            <ul>
                                <li>Setting clear vision and goals</li>
                                <li>Motivating team members</li>
                                <li>Making tough decisions</li>
                                <li>Holding people accountable</li>
                                <li>Developing others' capabilities</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>5. Collaboration</summary>
                        <div className="box">
                            <p><strong>Working effectively with others:</strong></p>
                            <ul>
                                <li>Contributing to team goals</li>
                                <li>Sharing knowledge and resources</li>
                                <li>Supporting colleagues</li>
                                <li>Accepting feedback constructively</li>
                                <li>Resolving team conflicts</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>6. Adaptability</summary>
                        <div className="box">
                            <p><strong>Responding effectively to change:</strong></p>
                            <ul>
                                <li>Learning new skills quickly</li>
                                <li>Adjusting to new environments</li>
                                <li>Handling uncertainty productively</li>
                                <li>Being flexible in approach</li>
                                <li>Viewing change as opportunity</li>
                            </ul>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Developing Professional Skills</h2>
                    <ul className="feature-list">
                        <li><strong>Training and Certifications:</strong> Pursue relevant courses, certifications, and qualifications</li>
                        <li><strong>On-the-Job Learning:</strong> Seek challenging assignments and volunteer for new projects</li>
                        <li><strong>Mentorship:</strong> Learn from experienced professionals</li>
                        <li><strong>Feedback:</strong> Ask for constructive criticism and implement improvements</li>
                        <li><strong>Reading and Research:</strong> Stay current in your field</li>
                        <li><strong>Networking:</strong> Build relationships with professionals in your industry</li>
                        <li><strong>Reflection:</strong> Regularly assess your strengths and areas for improvement</li>
                    </ul>
                </section>

                <section>
                    <h2>Pro Tips for Professional Skill Development</h2>
                    
                    <details>
                        <summary className='ml2'>⭐ Trick 1: The "T-Shaped" Skills Approach</summary>
                        <div className="box">
                            <p><strong>Develop depth in your core skill (vertical bar) and breadth across related areas (horizontal bar).</strong></p>
                            <ul>
                                <li>Deep expertise in your specialty: Marketing Manager expert</li>
                                <li>Broad knowledge of adjacent areas: Sales, data analysis, customer psychology</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>⭐ Trick 2: The "Skill Stacking" Strategy</summary>
                        <div className="box">
                            <p><strong>Combine multiple skills to create unique value:</strong></p>
                            <ul>
                                <li>Communication + Data analysis = Better presentations</li>
                                <li>Technical skill + Leadership = Technical founder/CTO</li>
                                <li>Writing + Industry knowledge = Thought leader content</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>⭐ Trick 3: The "Deliberate Practice" Method</summary>
                        <div className="box">
                            <p><strong>Focus on improving skills that challenge you, not ones you're already good at.</strong></p>
                            <ul>
                                <li>Identify your weakness</li>
                                <li>Practice specific aspect intentionally</li>
                                <li>Get feedback on improvement</li>
                                <li>Repeat until skill improves</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>⭐ Trick 4: The "40-20-40 Learning Rule"</summary>
                        <div className="box">
                            <ul>
                                <li>40%: Learn from challenging experiences and assignments</li>
                                <li>20%: Learn from relationships and mentors</li>
                                <li>40%: Learn from training, courses, and self-study</li>
                            </ul>
                            <p>Balance real experience with formal learning!</p>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Key Takeaways</h2>
                    <ul className="feature-list">
                        <li>Professional skills span technical expertise, time management, problem-solving, leadership, collaboration, and adaptability.</li>
                        <li>Skills development is continuous and requires intentional effort.</li>
                        <li>Combine technical knowledge with soft skills for maximum impact.</li>
                        <li>Seek opportunities to apply and refine skills actively.</li>
                        <li>Balance learning from experience, mentors, and formal education.</li>
                    </ul>
                </section>
            </div>
            </div>
        </>
    )
}

export default ProfessionalSkills
