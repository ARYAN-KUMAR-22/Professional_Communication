import '../App.css'
import Navbar from './navbar'
import Sidebar from './Sidebar'

const Activities = () => {
    return (
        <>
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="container" style={{animation: 'fadeIn 0.6s ease'}}>
                    <h1 style={{animation: 'slideInLeft 0.6s ease', color: '#2c3e50'}}>Practical Activities & Exercises</h1>
                
                <section>
                    <h2>Learning Through Doing</h2>
                    <p>
                        Professional communication skills are best learned through active practice. This section provides practical 
                        exercises, scenarios, and activities designed to help you apply concepts and build confidence in real professional situations.
                    </p>
                </section>

                <section>
                    <h2>Communication Skills Activities</h2>
                    
                    <details>
                        <summary className='ml2'>Activity 1: The "Active Listening" Exercise</summary>
                        <div className="box">
                            <p><strong>Build active listening skills with a partner:</strong></p>
                            <ul>
                                <li><strong>Setup:</strong> Pair with a colleague. One speaks for 3 minutes about a work challenge.</li>
                                <li><strong>Listen:</strong> Other person listens without interrupting or preparing response.</li>
                                <li><strong>Reflect:</strong> Listener reflects back what they heard: "What I heard was... Is that right?"</li>
                                <li><strong>Swap:</strong> Switch roles and repeat.</li>
                                <li><strong>Debrief:</strong> Discuss what you noticed about listening quality.</li>
                                <li><strong>Frequency:</strong> Practice 2-3 times weekly for 4 weeks</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>Activity 2: The "Presentation Rehearsal" Challenge</summary>
                        <div className="box">
                            <p><strong>Build presentation confidence through repetition:</strong></p>
                            <ul>
                                <li><strong>Prepare:</strong> Create a 5-minute presentation on any work topic.</li>
                                <li><strong>Practice Solo:</strong> Deliver to yourself 3 times, recording audio or video.</li>
                                <li><strong>Practice Alone:</strong> Present to an empty room, focusing on pacing and gestures.</li>
                                <li><strong>Practice Small:</strong> Present to 1-2 trusted colleagues, get feedback.</li>
                                <li><strong>Practice Large:</strong> Present to larger group, note improvements.</li>
                                <li><strong>Truth:</strong> Repetition builds confidence and reduces anxiety</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>Activity 3: The "Email Effectiveness" Review</summary>
                        <div className="box">
                            <p><strong>Evaluate and improve your written communication:</strong></p>
                            <ul>
                                <li><strong>Review:</strong> Pull 5 emails you sent last week.</li>
                                <li><strong>Analyze:</strong> For each, ask:
                                    <ul>
                                        <li>Is the purpose clear in the first sentence?</li>
                                        <li>Have I answered all recipient questions?</li>
                                        <li>Is my tone appropriate and professional?</li>
                                        <li>Are there unnecessary words?</li>
                                        <li>Did I use proper structure (greeting, body, closing)?</li>
                                    </ul>
                                </li>
                                <li><strong>Rewrite:</strong> Rewrite the 2 least effective emails.</li>
                                <li><strong>Compare:</strong> Notice improvements in clarity and conciseness.</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>Activity 4: The "Voice Recording" Practice</summary>
                        <div className="box">
                            <p><strong>Improve vocal delivery and confidence:</strong></p>
                            <ul>
                                <li><strong>Record:</strong> Use your phone to record yourself reading a professional passage for 2-3 minutes.</li>
                                <li><strong>Listen:</strong> Notice your pace, tone, clarity, filler words (um, uh, like).</li>
                                <li><strong>Improve:</strong> Rerecord, focusing on one improvement (slower pace, remove fillers, better projection).</li>
                                <li><strong>Repeat:</strong> Do this weekly with different passages.</li>
                                <li><strong>Track:</strong> After 4 weeks, listen to first vs. last recording—notice dramatic improvement.</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>Activity 5: The "Difficult Conversation" Role-Play</summary>
                        <div className="box">
                            <p><strong>Practice handling challenging communication scenarios:</strong></p>
                            <ul>
                                <li><strong>Scenarios:</strong> Deliver critical feedback, address conflict, say no to request, handle complaint</li>
                                <li><strong>Prepare:</strong> Write your key points before the conversation.</li>
                                <li><strong>Role-Play:</strong> Have a trusted colleague play the difficult person.</li>
                                <li><strong>Experience:</strong> Go through the conversation fully.</li>
                                <li><strong>Feedback:</strong> Ask role-play partner: "How did that feel? What worked? What could improve?"</li>
                                <li><strong>Iterate:</strong> Try the scenario again with adjustments.</li>
                            </ul>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Soft Skills Development Activities</h2>
                    
                    <details>
                        <summary className='ml2'>Activity 6: The "Creativity Brainstorm" Session</summary>
                        <div className="box">
                            <p><strong>Build creative thinking in teams:</strong></p>
                            <ul>
                                <li><strong>Challenge:</strong> Identify a real work problem (inefficient process, low team morale, etc.)</li>
                                <li><strong>Rules:</strong> 20 minutes, no judgment, quantity over quality, build on others' ideas.</li>
                                <li><strong>Brainstorm:</strong> Generate as many solutions as possible without criticizing.</li>
                                <li><strong>Evaluate:</strong> Discuss which ideas have merit and could be piloted.</li>
                                <li><strong>Implement:</strong> Consider implementing the best idea as a small test.</li>
                                <li><strong>Result:</strong> Creates psychological safety and demonstrates value of creative input</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>Activity 7: The "Resilience Challenge" Journal</summary>
                        <div className="box">
                            <p><strong>Build resilience through reflection:</strong></p>
                            <ul>
                                <li><strong>Daily:</strong> Record one challenge you faced today.</li>
                                <li><strong>Analyze:</strong> What was within your control? What wasn't?</li>
                                <li><strong>Response:</strong> How did you handle it? What was your emotional reaction?</li>
                                <li><strong>Learning:</strong> What did you learn? How will you handle similar situations differently?</li>
                                <li><strong>Monthly:</strong> Review patterns. Notice how resilience is growing.</li>
                                <li><strong>Impact:</strong> Over time, you handle challenges with greater ease and wisdom.</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>Activity 8: The "Cultural Exploration" Project</summary>
                        <div className="box">
                            <p><strong>Build cultural intelligence and inclusivity:</strong></p>
                            <ul>
                                <li><strong>Select:</strong> Choose a culture different from your own.</li>
                                <li><strong>Research:</strong> Learn about etiquette, values, communication styles, holidays, traditions.</li>
                                <li><strong>Experience:</strong> Attend a cultural event or try traditional cuisine.</li>
                                <li><strong>Connect:</strong> Have a conversation with someone from that culture. Ask respectful questions.</li>
                                <li><strong>Share:</strong> Present your learning to colleagues.</li>
                                <li><strong>Repeat:</strong> Do this quarterly to build global perspective.</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>Activity 9: The "Pro Bono Project" Initiative</summary>
                        <div className="box">
                            <p><strong>Develop leadership and accountability through giving:</strong></p>
                            <ul>
                                <li><strong>Identify:</strong> Find a real need in your organization or community.</li>
                                <li><strong>Propose:</strong> Create a simple project to address it.</li>
                                <li><strong>Lead:</strong> Volunteer to own the project or lead implementation.</li>
                                <li><strong>Manage:</strong> Coordinate people, resources, and timeline.</li>
                                <li><strong>Track:</strong> Document progress and outcomes.</li>
                                <li><strong>Share:</strong> Present results and lessons learned.</li>
                                <li><strong>Benefit:</strong> Demonstrates leadership, initiative, and ownership</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>Activity 10: The "Feedback Receptivity" Challenge</summary>
                        <div className="box">
                            <p><strong>Develop humility and self-awareness:</strong></p>
                            <ul>
                                <li><strong>Week 1:</strong> Ask three colleagues: "Where could I most improve?"</li>
                                <li><strong>Listen:</strong> Don't defend, explain, or dispute their feedback.</li>
                                <li><strong>Thank:</strong> Say "Thank you for your honesty. This helps me grow."</li>
                                <li><strong>Reflect:</strong> Journal on potential truth in their comments.</li>
                                <li><strong>Week 4:</strong> Ask same three people: "Have you noticed improvement in [area]?"</li>
                                <li><strong>Growth:</strong> Demonstrates genuine commitment to humility and development</li>
                            </ul>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Professional Scenario-Based Exercises</h2>
                    
                    <details>
                        <summary className='ml2'>Scenario 1: The "Uncomfortable Feedback" Situation</summary>
                        <div className="box">
                            <p><strong>Situation:</strong> Your manager says, "Your presentations need work. You speak too fast and people can't follow."</p>
                            <p><strong>Challenge:</strong> Respond with maturity, ask clarifying questions, and propose improvement plan.</p>
                            <p><strong>Practice Response:</strong></p>
                            <ul>
                                <li>"Thank you for the feedback. That's helpful to know."</li>
                                <li>"Can you give me specific examples from recent presentations?"</li>
                                <li>"What pace and approach would be more effective?"</li>
                                <li>"I'd like to improve. Could I practice with you before the next presentation?"</li>
                                <li><strong>Result:</strong> Shows humility, initiative, and commitment to growth</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>Scenario 2: The "Team Conflict" Situation</summary>
                        <div className="box">
                            <p><strong>Situation:</strong> Two colleagues disagree on project direction. Both are expressing frustration.</p>
                            <p><strong>Challenge:</strong> Mediate constructively to find common ground.</p>
                            <p><strong>Practice Response:</strong></p>
                            <ul>
                                <li>"I see you both care about this project. Help me understand your concerns."</li>
                                <li>Listen to Person A's perspective without interruption</li>
                                <li>"Person A values [priority]. Person B values [priority]. Is that accurate?"</li>
                                <li>"How can we honor both priorities in our approach?"</li>
                                <li><strong>Result:</strong> Demonstrates empathy, collaboration, and conflict resolution</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>Scenario 3: The "Saying No" Situation</summary>
                        <div className="box">
                            <p><strong>Situation:</strong> Your manager asks you to take on a project on top of your current workload.</p>
                            <p><strong>Challenge:</strong> Decline respectfully while offering alternatives.</p>
                            <p><strong>Practice Response:</strong></p>
                            <ul>
                                <li>"I appreciate your trust in asking me. I want to be honest about capacity."</li>
                                <li>"My current projects include X, Y, Z (show priorities)."</li>
                                <li>"Adding this would compromise quality or delay existing work."</li>
                                <li>"Can we discuss priorities? Or could [colleague] be better suited for this?"</li>
                                <li><strong>Result:</strong> Shows professionalism, accountability, and strategic thinking</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>Scenario 4: The "Mistake Recovery" Situation</summary>
                        <div className="box">
                            <p><strong>Situation:</strong> You made an error that affected team output. Your manager asks about it in a meeting.</p>
                            <p><strong>Challenge:</strong> Take ownership, explain impact, and propose solution.</p>
                            <p><strong>Practice Response:</strong></p>
                            <ul>
                                <li>"I made an error on [specific task]. That was on me, not the team."</li>
                                <li>"The impact was [be honest about consequences]."</li>
                                <li>"I've already corrected it by [action taken]."</li>
                                <li>"To prevent future mistakes, I'm implementing [process change]."</li>
                                <li><strong>Result:</strong> Shows integrity, accountability, and commitment to improvement</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>Scenario 5: The "Cross-Cultural" Situation</summary>
                        <div className="box">
                            <p><strong>Situation:</strong> You're working with a colleague from a different culture who communicates differently than you expected.</p>
                            <p><strong>Challenge:</strong> Adapt communication style and build mutual respect.</p>
                            <p><strong>Practice Response:</strong></p>
                            <ul>
                                <li>"I notice we communicate differently. That's actually valuable—different perspectives."</li>
                                <li>"Help me understand the best way to communicate with you. Direct or more context?"</li>
                                <li>"I'd like to learn from your approach. What can I adjust?"</li>
                                <li>Listen and implement suggestions</li>
                                <li><strong>Result:</strong> Shows cultural respect, adaptability, and genuine interest</li>
                            </ul>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Weekly Activity Schedule</h2>
                    <div className="box">
                        <p><strong>Create sustainable growth with consistent practice:</strong></p>
                        <ul>
                            <li><strong>Monday:</strong> Communication Review - Check last week's emails/presentations for quality</li>
                            <li><strong>Tuesday:</strong> Active Listening Session - Practice with a colleague</li>
                            <li><strong>Wednesday:</strong> Resilience Journal - Reflect on challenges and growth</li>
                            <li><strong>Thursday:</strong> Feedback Practice - Ask someone for honest feedback on one skill</li>
                            <li><strong>Friday:</strong> Creative Brainstorm - Contribute novel ideas in team meeting</li>
                            <li><strong>Weekend:</strong> Learning Activity - Read article, watch video, or reflect on week's growth</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2>Progress Tracking Tools</h2>
                    <ul className="feature-list">
                        <li><strong>Skills Tracker:</strong> Rate yourself 1-10 weekly on each skill you're developing</li>
                        <li><strong>Feedback Log:</strong> Document feedback received and actions taken</li>
                        <li><strong>Victory Journal:</strong> Record wins, no matter how small—builds confidence</li>
                        <li><strong>Mentor Check-ins:</strong> Monthly reviews with mentor on skill development</li>
                        <li><strong>360 Review:</strong> Quarterly feedback from colleagues on professional growth</li>
                    </ul>
                </section>

                <section>
                    <h2>Key Takeaways</h2>
                    <ul className="feature-list">
                        <li>Professional communication skills develop through deliberate practice, not osmosis.</li>
                        <li>Consistent, small activities compound into significant growth over weeks and months.</li>
                        <li>Real-world scenarios help bridge the gap between learning and application.</li>
                        <li>Feedback and reflection accelerate skill development.</li>
                        <li>Accountability partners and structured programs increase success rates.</li>
                    </ul>
                </section>
            </div>
            </div>
        </>
    )
}

export default Activities
