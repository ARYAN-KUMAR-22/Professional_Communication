import '../App.css'
import Navbar from './navbar'
import Sidebar from './Sidebar'

const IdentifyingCommonErrors = () => {
    return (
        <>
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="container" style={{animation: 'fadeIn 0.6s ease'}}>
                    <h1 style={{animation: 'slideInLeft 0.6s ease', color: '#2c3e50'}}>Identifying Common Errors in Writing</h1>
                
                <section>
                    <h2>Introduction</h2>
                    <p>
                        Even professional writers make mistakes. Learning to identify and correct common writing errors is crucial for maintaining 
                        credibility and ensuring clear communication. This guide covers the most frequent errors in professional writing and how to fix them.
                    </p>
                </section>

                <section>
                    <h2>Grammar Errors</h2>
                    
                    <details>
                        <summary className='ml2'>1. Run-On Sentences</summary>
                        <div className="box">
                            <p><strong>Error:</strong> "The project was completed last month it was delivered to the client."</p>
                            <p><strong>Solution 1 - Semicolon:</strong> "The project was completed last month; it was delivered to the client."</p>
                            <p><strong>Solution 2 - Period:</strong> "The project was completed last month. It was delivered to the client."</p>
                            <p><strong>Solution 3 - Conjunction:</strong> "The project was completed last month, and it was delivered to the client."</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>2. Sentence Fragments</summary>
                        <div className="box">
                            <p><strong>Error:</strong> "Because the deadline was approaching. We worked overtime."</p>
                            <p><strong>Fix:</strong> "Because the deadline was approaching, we worked overtime."</p>
                            <p><strong>Or:</strong> "The deadline was approaching. We worked overtime."</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>3. Subject-Verb Disagreement</summary>
                        <div className="box">
                            <p><strong>Error:</strong> "The team are meeting tomorrow."</p>
                            <p><strong>Fix:</strong> "The team is meeting tomorrow." (Collective nouns are singular)</p>
                            <p><strong>Error:</strong> "Each employee have their files."</p>
                            <p><strong>Fix:</strong> "Each employee has their files."</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>4. Pronoun Errors</summary>
                        <div className="box">
                            <p><strong>Unclear Reference:</strong> "John told his manager he was late." (Who was late—John or the manager?)</p>
                            <p><strong>Fix:</strong> "John told his manager that John was late." OR "John was late and told his manager."</p>
                            <p><strong>Wrong Case:</strong> "Between you and I, this is confidential." ✗</p>
                            <p><strong>Fix:</strong> "Between you and me, this is confidential." ✓</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>5. Verb Tense Inconsistency</summary>
                        <div className="box">
                            <p><strong>Error:</strong> "The company was founded in 1995 and now operates in 50 countries."</p>
                            <p><strong>Fix (Option 1):</strong> "The company was founded in 1995 and now operates in 50 countries." (Time shift explained)</p>
                            <p><strong>Fix (Option 2):</strong> "The company was founded in 1995 and operated in 50 countries initially."</p>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Punctuation Errors</h2>
                    
                    <details>
                        <summary className='ml2'>1. Comma Splice</summary>
                        <div className="box">
                            <p><strong>Error:</strong> "The meeting was productive, we made significant progress."</p>
                            <p><strong>Fixes:</strong></p>
                            <ul>
                                <li>Semicolon: "The meeting was productive; we made significant progress."</li>
                                <li>Period: "The meeting was productive. We made significant progress."</li>
                                <li>Conjunction: "The meeting was productive, and we made significant progress."</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>2. Misplaced Apostrophes</summary>
                        <div className="box">
                            <p><strong>Error:</strong> "The 1990's were prosperous." (Plurals don't need apostrophes)</p>
                            <p><strong>Fix:</strong> "The 1990s were prosperous."</p>
                            <p><strong>Error:</strong> "Its a great opportunity." (Confusing it's/its)</p>
                            <p><strong>Fix:</strong> "It's a great opportunity." (= It is)</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>3. Missing Commas in Lists</summary>
                        <div className="box">
                            <p><strong>Error (Missing Oxford Comma):</strong> "We need dedication, hard work and integrity."</p>
                            <p><strong>Fix:</strong> "We need dedication, hard work, and integrity."</p>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Word Choice Errors</h2>
                    
                    <details>
                        <summary className='ml2'>1. Homophones (Sound Alike, Different Meaning)</summary>
                        <div className="box">
                            <ul>
                                <li><strong>Their, They're, There:</strong> "Their success, they're happy, there's a problem"</li>
                                <li><strong>Accept, Except:</strong> "I accept the offer. Everyone except John."</li>
                                <li><strong>Effect, Affect:</strong> "The effect was dramatic. It affects productivity."</li>
                                <li><strong>Principle, Principal:</strong> "The core principle. The principal of the school."</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>2. Commonly Confused Words</summary>
                        <div className="box">
                            <ul>
                                <li><strong>Lose/Loose:</strong> "We might lose the account." "The screw is loose."</li>
                                <li><strong>Compliment/Complement:</strong> "He gave a compliment. The color complements the design."</li>
                                <li><strong>Continual/Continuous:</strong> "Continual = repeated. Continuous = uninterrupted."</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>3. Passive vs. Active Voice Mistakes</summary>
                        <div className="box">
                            <p><strong>Unnecessary Passive:</strong> "The project was completed by the team." ✗</p>
                            <p><strong>Better - Active:</strong> "The team completed the project." ✓</p>
                            <p><strong>Exception - Use Passive:</strong> "Mistakes were made." (Focus on action, not actor)</p>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Pro Tips & Tricks for Error Detection</h2>
                    
                    <details>
                        <summary className='ml2'>🔍 Trick 1: The Highlighter Method</summary>
                        <div className="box">
                            <p><strong>First pass:</strong> Highlight every verb (makes sure you have them)</p>
                            <p><strong>Second pass:</strong> Highlight every subject (makes sure it matches the verb)</p>
                            <p><strong>Third pass:</strong> Highlight every pronoun (check for clear references)</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>🔍 Trick 2: Read Aloud</summary>
                        <div className="box">
                            <p><strong>What you'll catch:</strong></p>
                            <ul>
                                <li>Awkward phrasing that looks OK but sounds wrong</li>
                                <li>Missing words your eyes skipped</li>
                                <li>Repetitive words</li>
                                <li>Incorrect punctuation (you naturally pause at periods/semicolons)</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>🔍 Trick 3: The One-Sentence-at-a-Time Technique</summary>
                        <div className="box">
                            <p><strong>Cover everything but one sentence and ask:</strong></p>
                            <ul>
                                <li>Does this sentence have a subject and verb?</li>
                                <li>Is it a complete thought?</li>
                                <li>Can I read it aloud comfortably (or does it feel choppy)?</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>🔍 Trick 4: The Common Errors Checklist</summary>
                        <div className="box">
                            <p><strong>Before submitting, check for:</strong></p>
                            <ul>
                                <li>□ Run-on sentences?</li>
                                <li>□ Fragments?</li>
                                <li>□ Subject-verb agreement?</li>
                                <li>□ Tense consistency?</li>
                                <li>□ Comma splices?</li>
                                <li>□ Homophones (their/they're/there)?</li>
                                <li>□ Passive voice overuse?</li>
                            </ul>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Key Takeaways</h2>
                    <ul className="feature-list">
                        <li>Run-on sentences and fragments are caught by checking every sentence is complete.</li>
                        <li>Subject-verb agreement and pronoun reference errors improve clarity significantly.</li>
                        <li>Homophones and commonly confused words require deliberate attention.</li>
                        <li>Reading aloud catches errors that silent reading misses.</li>
                        <li>Use a systematic checklist when editing to catch common mistakes consistently.</li>
                    </ul>
                </section>
            </div>
            </div>
        </>
    )
}

export default IdentifyingCommonErrors
