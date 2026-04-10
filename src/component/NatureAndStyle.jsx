import '../App.css'
import Navbar from './navbar'
import Sidebar from './Sidebar'

const NatureAndStyle = () => {
    return (
        <>
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="container" style={{animation: 'fadeIn 0.6s ease'}}>
                    <h1 style={{animation: 'slideInLeft 0.6s ease', color: '#2c3e50'}}>Nature and Style of Sensible Writing</h1>
                
                <section>
                    <h2>What is "Sensible" Writing?</h2>
                    <p>
                        Sensible writing is writing that makes sense—is logical, clear, and purposeful. It demonstrates thoughtful composition, 
                        acknowledges the audience, and serves a specific communicative purpose. Sensible writing stands in contrast to unclear, 
                        rambling, or self-indulgent writing.
                    </p>
                </section>

                <section>
                    <h2>Nature of Sensible Writing</h2>
                    
                    <details>
                        <summary className='ml2'>1. Purpose-Driven</summary>
                        <div className="box">
                            <p>
                                Every piece of writing should have a clear purpose: to inform, persuade, entertain, or direct.
                            </p>
                            <ul>
                                <li><strong>Inform:</strong> "Q2 sales increased 15% compared to Q1."</li>
                                <li><strong>Persuade:</strong> "We should implement this solution because it saves time and money."</li>
                                <li><strong>Direct:</strong> "Please complete the survey by Friday."</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>2. Audience-Aware</summary>
                        <div className="box">
                            <p>
                                Sensible writing considers the reader's knowledge level, interests, and needs.
                            </p>
                            <ul>
                                <li><strong>For Experts:</strong> Use technical terminology; assume background knowledge</li>
                                <li><strong>For General Audience:</strong> Explain concepts; define specialized terms</li>
                                <li><strong>For Mixed Audience:</strong> Balance without oversimplifying or overcomplicating</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>3. Logically Organized</summary>
                        <div className="box">
                            <p>
                                Ideas flow in a rational sequence that builds understanding.
                            </p>
                            <ul>
                                <li>Introduce the main idea first</li>
                                <li>Support with evidence and examples</li>
                                <li>Conclude by reinforcing the main idea or recommending action</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>4. Concise and Efficient</summary>
                        <div className="box">
                            <p>
                                Sensible writing gets to the point without unnecessary elaboration.
                            </p>
                            <p><strong>Verbose:</strong> "In view of the fact that we have received notification of the existence of a situation..."</p>
                            <p><strong>Sensible:</strong> "We've learned that..."</p>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Style Elements of Sensible Writing</h2>
                    
                    <details>
                        <summary className='ml2'>1. Tone</summary>
                        <div className="box">
                            <p>
                                The writer's attitude toward the subject and audience. Should be appropriate to context.
                            </p>
                            <ul>
                                <li><strong>Professional:</strong> Formal, respectful, objective</li>
                                <li><strong>Conversational:</strong> Friendly, accessible, still professional</li>
                                <li><strong>Authoritative:</strong> Confident, knowledgeable, commanding respect</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>2. Voice</summary>
                        <div className="box">
                            <p>
                                The personality and perspective of the writer that shines through the writing.
                            </p>
                            <ul>
                                <li>Consistent use of pronouns (I/we perspective)</li>
                                <li>Distinctive word choices and phrasing</li>
                                <li>Authentic and genuine expression</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>3. Diction (Word Choice)</summary>
                        <div className="box">
                            <p>
                                Words chosen should be:
                            </p>
                            <ul>
                                <li>Precise and accurate</li>
                                <li>Appropriate for the context and audience</li>
                                <li>Varied to maintain reader interest</li>
                                <li>Free of jargon unless necessary and defined</li>
                            </ul>
                            <p><strong>Weak:</strong> "The thing is good and works nice with other things."</p>
                            <p><strong>Strong:</strong> "The interface integrates seamlessly with existing systems."</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>4. Syntax (Sentence Structure)</summary>
                        <div className="box">
                            <p>
                                How sentences are constructed affects readability and emphasis.
                            </p>
                            <ul>
                                <li>Vary sentence length for rhythm</li>
                                <li>Use active voice predominantly</li>
                                <li>Place important ideas at sentence beginning or end</li>
                                <li>Use parallel structure for lists or comparisons</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>5. Tone Consistency</summary>
                        <div className="box">
                            <p>
                                Maintain consistent tone throughout. Don't shift between formal and informal unexpectedly.
                            </p>
                            <p><strong>Inconsistent:</strong> "The company achieved significant market penetration. Also, we got way more customers than before."</p>
                            <p><strong>Consistent:</strong> "The company achieved significant market penetration, expanding our customer base substantially."</p>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Characteristics of Sensible Writing</h2>
                    <ul className="feature-list">
                        <li><strong>Clear:</strong> Ideas are easily understood; language is straightforward</li>
                        <li><strong>Coherent:</strong> Sentences and paragraphs connect logically</li>
                        <li><strong>Correct:</strong> Grammar, punctuation, and spelling are accurate</li>
                        <li><strong>Concise:</strong> Uses words efficiently without unnecessary repetition</li>
                        <li><strong>Complete:</strong> Provides necessary information and context</li>
                        <li><strong>Compelling:</strong> Engages the reader and maintains interest</li>
                        <li><strong>Confident:</strong> Demonstrates knowledge and authority</li>
                    </ul>
                </section>

                <section>
                    <h2>Pro Tips for Achieving Sensible Writing Style</h2>
                    
                    <details>
                        <summary className='ml2'>✨ Trick 1: The "So What?" Test</summary>
                        <div className="box">
                            <p><strong>After each sentence, ask "So what?"</strong></p>
                            <p>If you can't answer why it matters, cut it or revise it.</p>
                            <p><strong>Example:</strong> "The morning was beautiful." (So what? Not relevant to business writing.) Cut it.</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>✨ Trick 2: The Consistency Audit</summary>
                        <div className="box">
                            <p><strong>Check for:</strong></p>
                            <ul>
                                <li>□ Tone consistent throughout?</li>
                                <li>□ Verb tense consistent?</li>
                                <li>□ Terminology consistent? (Don't call it "project" then "initiative" then "undertaking")</li>
                                <li>□ Formal/informal level consistent?</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>✨ Trick 3: The "Eliminate Redundancy" Search</summary>
                        <div className="box">
                            <p><strong>Find words you repeat:</strong></p>
                            <ul>
                                <li>"The goal is to achieve success." (goal + achieve = redundant) → "The goal is success."</li>
                                <li>"Very unique" (unique already means one-of-a-kind) → "Unique"</li>
                                <li>"Small minority" (minorities are typically small) → "Minority"</li>
                            </ul>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Key Takeaways</h2>
                    <ul className="feature-list">
                        <li>Sensible writing is purposeful, audience-aware, and logically organized.</li>
                        <li>Style elements (tone, voice, diction, syntax) work together to create effective communication.</li>
                        <li>Consistency in tone, tense, and terminology strengthens credibility.</li>
                        <li>Clear and concise word choice demonstrates respect for the reader's time.</li>
                        <li>Sensible writers eliminate unnecessary information and redundancy.</li>
                    </ul>
                </section>
            </div>
            </div>
        </>
    )
}

export default NatureAndStyle
