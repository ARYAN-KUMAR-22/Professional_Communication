import '../App.css'
import Navbar from './navbar'
import Sidebar from './Sidebar'

const OralCommunication = () => {
    return (
        <>
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="container" style={{animation: 'fadeIn 0.6s ease'}}>
                    <h1 style={{animation: 'slideInLeft 0.6s ease', color: '#2c3e50'}}>Oral Communication</h1>
                
                <section>
                    <h2>What is Oral Communication?</h2>
                    <p>
                        Oral communication is the exchange of information through spoken words. It includes conversations, presentations, 
                        meetings, phone calls, and negotiations. In professional settings, strong oral communication skills are essential for 
                        collaboration, persuasion, and leadership.
                    </p>
                </section>

                <section>
                    <h2>Types of Oral Communication</h2>
                    
                    <details>
                        <summary className='ml2'>1. One-on-One Conversations</summary>
                        <div className="box">
                            <p><strong>Characteristics:</strong> Direct, personal, immediate feedback</p>
                            <p><strong>Best for:</strong> Building relationships, sensitive discussions, quick decisions</p>
                            <p><strong>Key Skills:</strong> Active listening, empathy, clarity, conciseness</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>2. Meetings and Group Discussions</summary>
                        <div className="box">
                            <p><strong>Characteristics:</strong> Multiple participants, structured agenda, decision-making</p>
                            <p><strong>Best for:</strong> Brainstorming, problem-solving, team updates, planning</p>
                            <p><strong>Key Skills:</strong> Speaking clearly, respecting others' input, summarizing, consensus-building</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>3. Presentations</summary>
                        <div className="box">
                            <p><strong>Characteristics:</strong> One speaker, multiple listeners, often visual aids</p>
                            <p><strong>Best for:</strong> Sharing reports, pitching ideas, training, keynote speeches</p>
                            <p><strong>Key Skills:</strong> Confidence, organization, audience engagement, time management</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>4. Phone/Video Calls</summary>
                        <div className="box">
                            <p><strong>Characteristics:</strong> Remote, no non-verbal cues (unless video), real-time communication</p>
                            <p><strong>Best for:</strong> Quick conversations, remote collaboration, client calls</p>
                            <p><strong>Key Skills:</strong> Clear speech, active listening, verbal cues, technical proficiency</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>5. Interviews and Negotiations</summary>
                        <div className="box">
                            <p><strong>Characteristics:</strong> High-stakes, requires preparation, often formal</p>
                            <p><strong>Best for:</strong> Job searches, salary discussions, major decisions, partnerships</p>
                            <p><strong>Key Skills:</strong> Clarity, persuasion, emotional control, strategic thinking</p>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Elements of Effective Oral Communication</h2>
                    
                    <details>
                        <summary className='ml2'>1. Clarity</summary>
                        <div className="box">
                            <ul>
                                <li>Speak clearly and pronounce words correctly</li>
                                <li>Use simple language; avoid jargon unless explaining it</li>
                                <li>Organize thoughts before speaking when possible</li>
                                <li>Summarize key points explicitly</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>2. Confidence</summary>
                        <div className="box">
                            <ul>
                                <li>Make eye contact with your audience</li>
                                <li>Use an appropriate speaking pace (not too fast or slow)</li>
                                <li>Maintain good posture and open body language</li>
                                <li>Appear prepared and knowledgeable</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>3. Engagement</summary>
                        <div className="box">
                            <ul>
                                <li>Show genuine interest in the topic and audience</li>
                                <li>Vary your tone and volume to maintain interest</li>
                                <li>Use stories and examples to illustrate points</li>
                                <li>Ask questions and invite participation</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>4. Listening Skills</summary>
                        <div className="box">
                            <ul>
                                <li>Give full attention to the speaker</li>
                                <li>Avoid interrupting</li>
                                <li>Ask clarifying questions when appropriate</li>
                                <li>Remember key points and follow up on them</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>5. Non-Verbal Communication</summary>
                        <div className="box">
                            <ul>
                                <li>Eye contact shows engagement and honesty</li>
                                <li>Facial expressions should match your message</li>
                                <li>Gestures should emphasize key points (not distract)</li>
                                <li>Posture conveys confidence or discomfort</li>
                            </ul>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Pro Tips for Oral Communication Mastery</h2>
                    
                    <details>
                        <summary className='ml2'>🎙️ Trick 1: The "Pause Power" Technique</summary>
                        <div className="box">
                            <p><strong>Replace filler words (um, uh, like) with strategic pauses.</strong></p>
                            <p>Pauses make you sound more thoughtful and professional while giving you time to think.</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>🎙️ Trick 2: The "Volume Variation" Method</summary>
                        <div className="box">
                            <p><strong>Adjust volume to emphasize importance:</strong></p>
                            <ul>
                                <li>Key points: Speak slightly louder</li>
                                <li>Important data: Speak clearly and deliberately</li>
                                <li>Sensitive topic: Modulate slightly lower</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>🎙️ Trick 3: The "Preparation Advantage"</summary>
                        <div className="box">
                            <p><strong>For presentations/important discussions:</strong></p>
                            <ul>
                                <li>Know your opening (memorize first 2 minutes)</li>
                                <li>Memorize your main 3-5 points</li>
                                <li>Practice out loud (not silently) at least 3 times</li>
                                <li>Prepare for likely questions</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>🎙️ Trick 4: The "Feedback Loop"</summary>
                        <div className="box">
                            <p><strong>In conversations, use reflective statements:</strong></p>
                            <p>"So you're saying that... Is that correct?" (Confirms understanding and shows you're listening)</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>🎙️ Trick 5: The "Vocal Warm-Up" Before Important Speaking</summary>
                        <div className="box">
                            <ul>
                                <li>Hum for 30 seconds</li>
                                <li>Say tongue twisters: "Unique New York, unique New York, unique New York"</li>
                                <li>Do breathing exercises: Deep breath in for 4 counts, out for 4 counts, repeat 5 times</li>
                                <li>Speak a bit of your content aloud</li>
                            </ul>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Key Takeaways</h2>
                    <ul className="feature-list">
                        <li>Oral communication includes one-on-one conversations, meetings, presentations, calls, and negotiations.</li>
                        <li>Clarity, confidence, engagement, listening, and non-verbal skills are essential.</li>
                        <li>Preparation significantly improves oral communication outcomes.</li>
                        <li>Active listening is as important as clear speaking.</li>
                        <li>Practice speaking out loud to improve delivery and confidence.</li>
                    </ul>
                </section>
            </div>
            </div>
        </>
    )
}

export default OralCommunication
