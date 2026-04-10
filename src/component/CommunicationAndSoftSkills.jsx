import '../App.css'
import Navbar from './navbar'
import Sidebar from './Sidebar'

const CommunicationAndSoftSkills = () => {
    return (
        <>
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="container" style={{animation: 'fadeIn 0.6s ease'}}>
                    <h1 style={{animation: 'slideInLeft 0.6s ease', color: '#2c3e50'}}>Communication & Soft Skills</h1>
                
                <section>
                    <h2>Understanding Soft Skills</h2>
                    <p>
                        Soft skills are personal and interpersonal qualities that help individuals interact effectively with others. 
                        Unlike technical skills, soft skills are about how you work, not what you know. They're increasingly critical 
                        in modern workplaces.
                    </p>
                </section>

                <section>
                    <h2>Core Communication Skills</h2>
                    
                    <details>
                        <summary className='ml2'>1. Verbal Communication</summary>
                        <div className="box">
                            <p><strong>Speaking clearly and effectively:</strong></p>
                            <ul>
                                <li>Clarity: Use simple, direct language</li>
                                <li>Tone: Match tone to context and audience</li>
                                <li>Pace: Speak at appropriate speed</li>
                                <li>Volume: Adjust for environment</li>
                                <li>Engagement: Make listeners feel connected</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>2. Active Listening</summary>
                        <div className="box">
                            <p><strong>Fully focusing on what others are saying:</strong></p>
                            <ul>
                                <li>Eliminate distractions</li>
                                <li>Make eye contact</li>
                                <li>Use body language to show engagement</li>
                                <li>Ask clarifying questions</li>
                                <li>Avoid interrupting</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>3. Nonverbal Communication</summary>
                        <div className="box">
                            <p><strong>Communicating through body and facial expressions:</strong></p>
                            <ul>
                                <li>Body language: Open posture, confident stance</li>
                                <li>Facial expressions: Smile, show genuine emotion</li>
                                <li>Eye contact: Build trust and connection</li>
                                <li>Gestures: Use hands to emphasize points</li>
                                <li>Proximity: Respect personal space</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>4. Written Communication</summary>
                        <div className="box">
                            <p><strong>Expressing ideas clearly in writing:</strong></p>
                            <ul>
                                <li>Emails: Professional, concise, purposeful</li>
                                <li>Reports: Organized, data-driven, actionable</li>
                                <li>Messages: Clear intent, appropriate tone</li>
                                <li>Grammar: Correct spelling and punctuation</li>
                                <li>Format: Professional, easy to read</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>5. Presentation Skills</summary>
                        <div className="box">
                            <p><strong>Delivering information to groups:</strong></p>
                            <ul>
                                <li>Structure: Clear beginning, middle, end</li>
                                <li>Visuals: Engaging slides without clutter</li>
                                <li>Delivery: Confident, engaging, energetic</li>
                                <li>Interaction: Involve audience, encourage questions</li>
                                <li>Q&A: Handle questions thoughtfully</li>
                            </ul>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Important Soft Skills</h2>
                    
                    <details>
                        <summary className='ml2'>1. Emotional Intelligence (EI)</summary>
                        <div className="box">
                            <ul>
                                <li><strong>Self-awareness:</strong> Understanding your emotions and impact</li>
                                <li><strong>Self-regulation:</strong> Managing your emotions appropriately</li>
                                <li><strong>Empathy:</strong> Understanding others' emotions</li>
                                <li><strong>Social skills:</strong> Building and managing relationships</li>
                                <li><strong>Motivation:</strong> Driving yourself toward goals</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>2. Teamwork & Collaboration</summary>
                        <div className="box">
                            <ul>
                                <li>Contribute actively to team goals</li>
                                <li>Support and encourage teammates</li>
                                <li>Share credit for successes</li>
                                <li>Accept responsibility for failures</li>
                                <li>Resolve conflicts constructively</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>3. Interpersonal Skills</summary>
                        <div className="box">
                            <ul>
                                <li>Building rapport with diverse people</li>
                                <li>Showing genuine interest in others</li>
                                <li>Creating psychological safety</li>
                                <li>Networking effectively</li>
                                <li>Managing relationships professionally</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>4. Conflict Resolution</summary>
                        <div className="box">
                            <ul>
                                <li><strong>Understanding:</strong> Listen to all perspectives</li>
                                <li><strong>Empathy:</strong> Acknowledge emotions involved</li>
                                <li><strong>Communication:</strong> Express concerns without blame</li>
                                <li><strong>Collaboration:</strong> Find win-win solutions</li>
                                <li><strong>Preparation:</strong> Follow up to ensure resolution</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>5. Critical Feedback Delivery</summary>
                        <div className="box">
                            <ul>
                                <li>Use the sandwich method: Positive → Constructive → Positive</li>
                                <li>Focus on behavior, not personality</li>
                                <li>Be specific with examples</li>
                                <li>Offer solutions, not just criticism</li>
                                <li>Follow up to show you care about growth</li>
                            </ul>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Integrating Communication & Soft Skills</h2>
                    <ul className="feature-list">
                        <li><strong>In Meetings:</strong> Listen actively, contribute thoughtfully, respect others' time</li>
                        <li><strong>In Conflicts:</strong> Communicate concerns gently, listen empathetically, collaborate on solutions</li>
                        <li><strong>In Teams:</strong> Show emotional intelligence, support others, communicate progress clearly</li>
                        <li><strong>With Leadership:</strong> Communicate needs clearly, show alignment with vision, demonstrate maturity</li>
                        <li><strong>With Diverse Colleagues:</strong> Respect differences, communicate inclusively, adapt communication style</li>
                    </ul>
                </section>

                <section>
                    <h2>Pro Tips for Soft Skills Development</h2>
                    
                    <details>
                        <summary className='ml2'>🎯 Trick 1: The "Communication Mirror" Technique</summary>
                        <div className="box">
                            <p><strong>Reflect back what you hear to ensure understanding.</strong></p>
                            <p><em>"So what I'm hearing is... Did I understand correctly?"</em></p>
                            <ul>
                                <li>Shows genuine interest</li>
                                <li>Prevents misunderstandings</li>
                                <li>Builds trust and rapport</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>🎯 Trick 2: The "WAIT" Principle</summary>
                        <div className="box">
                            <p><strong>WAIT = Why Am I Talking?</strong></p>
                            <ul>
                                <li>Before speaking, ask why this message matters</li>
                                <li>Reduces unnecessary talking</li>
                                <li>Improves listening quality</li>
                                <li>Strengthens thoughtfulness</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>🎯 Trick 3: The "EI Audit" Method</summary>
                        <div className="box">
                            <p><strong>Track your emotional intelligence daily:</strong></p>
                            <ul>
                                <li>Morning: Set emotional intention for the day</li>
                                <li>Midday: Check how you're managing emotions</li>
                                <li>Evening: Reflect on one EI win and one opportunity</li>
                                <li>Weekly: Identify patterns to work on</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>🎯 Trick 4: The "Feedback Sandwich Plus" Approach</summary>
                        <div className="box">
                            <p><strong>Enhanced feedback delivery works better:</strong></p>
                            <ul>
                                <li>1. Recognition of effort/intent</li>
                                <li>2. Specific observation with example</li>
                                <li>3. Impact explanation</li>
                                <li>4. Constructive suggestion</li>
                                <li>5. Expression of confidence in improvement</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>🎯 Trick 5: The "Perspective Challenge" Exercise</summary>
                        <div className="box">
                            <p><strong>In conflicts, understand all three viewpoints:</strong></p>
                            <ul>
                                <li>Your perspective: Your view and concerns</li>
                                <li>Their perspective: Their view and concerns</li>
                                <li>Third-party perspective: Neutral observer's view</li>
                                <li>This creates empathy and broader solutions</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>🎯 Trick 6: The "Communication Audit" Checklist</summary>
                        <div className="box">
                            <p><strong>Before important communications, verify:</strong></p>
                            <ul>
                                <li>☐ Is my tone appropriate for the message?</li>
                                <li>☐ Is my message clear and concise?</li>
                                <li>☐ Did I consider my audience?</li>
                                <li>☐ Is my body language open and confident?</li>
                                <li>☐ Am I prepared to listen and adapt?</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>🎯 Trick 7: The "Emotional Vocabulary" Expansion</summary>
                        <div className="box">
                            <p><strong>More precise emotional words improve EI:</strong></p>
                            <ul>
                                <li>Instead of "angry": frustrated, disappointed, betrayed</li>
                                <li>Instead of "sad": discouraged, overwhelmed, disappointed</li>
                                <li>Instead of "happy": grateful, energized, satisfied</li>
                                <li>This helps identify needs and communicate authentically</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>🎯 Trick 8: The "72-Hour Rule" for Difficult Conversations</summary>
                        <div className="box">
                            <ul>
                                <li>Don't address conflicts immediately (emotions are high)</li>
                                <li>Wait 72 hours to allow emotions to settle</li>
                                <li>Prepare your points thoughtfully</li>
                                <li>Communicate with clarity and empathy</li>
                                <li>Results: More productive, less damage</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>🎯 Trick 9: The "Nonverbal Consistency" Check</summary>
                        <div className="box">
                            <p><strong>Ensure your body language matches your words:</strong></p>
                            <ul>
                                <li>If saying "I'm interested", make eye contact</li>
                                <li>If saying "That's great", smile genuinely</li>
                                <li>If saying "Let's work together", open posture</li>
                                <li>Inconsistency: Damages trust and credibility</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>🎯 Trick 10: The "Relationship Investment" Strategy</summary>
                        <div className="box">
                            <p><strong>Build strong relationships proactively:</strong></p>
                            <ul>
                                <li>Remember details about colleagues' lives</li>
                                <li>Celebrate their wins</li>
                                <li>Offer help before being asked</li>
                                <li>Show consistency and reliability</li>
                                <li>Strong relationships make difficult conversations easier</li>
                            </ul>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Key Takeaways</h2>
                    <ul className="feature-list">
                        <li>Communication skills are fundamental to all professional interactions.</li>
                        <li>Soft skills like emotional intelligence determine long-term career success.</li>
                        <li>Active listening is as important as effective speaking.</li>
                        <li>Nonverbal communication carries significant weight in message delivery.</li>
                        <li>Regular reflection and practice improve both communication and soft skills.</li>
                    </ul>
                </section>
            </div>
            </div>
        </>
    )
}

export default CommunicationAndSoftSkills
