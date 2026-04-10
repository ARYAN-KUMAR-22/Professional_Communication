import '../App.css'
import Navbar from './navbar'
import Sidebar from './Sidebar'

const BasicWritingSkills = () => {
    return (
        <>
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="container" style={{animation: 'fadeIn 0.6s ease'}}>
                    <h1 style={{animation: 'slideInLeft 0.6s ease', color: '#2c3e50'}}>Basic Writing Skills</h1>
                
                <section>
                    <h2>Introduction to Basic Writing Skills</h2>
                    <p>
                        Basic writing skills form the foundation of professional communication. These fundamental skills include sentence construction, 
                        paragraph organization, and correct punctuation. Whether you're writing emails, reports, or memos, mastering the basics ensures 
                        your message is clear, professional, and impactful.
                    </p>
                </section>

                <section>
                    <h2>Sentence Construction</h2>
                    
                    <details>
                        <summary className='ml2'>What Makes a Complete Sentence?</summary>
                        <div className="box">
                            <p><strong>A complete sentence must have:</strong></p>
                            <ul>
                                <li><strong>Subject:</strong> Who or what the sentence is about</li>
                                <li><strong>Verb:</strong> Action or state of being</li>
                                <li><strong>Complete Thought:</strong> Expresses a complete idea</li>
                            </ul>
                            <p><strong>Examples:</strong></p>
                            <ul>
                                <li>"The team completed the project." ✓ (Subject: team, Verb: completed)</li>
                                <li>"We improved efficiency." ✓ (Subject: we, Verb: improved)</li>
                                <li>"After careful review completed." ✗ (Incomplete - missing subject)</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>Sentence Types</summary>
                        <div className="box">
                            <ul>
                                <li><strong>Simple:</strong> One independent clause. "She wrote the report."</li>
                                <li><strong>Compound:</strong> Two independent clauses joined by a conjunction. "She wrote the report, and he presented it."</li>
                                <li><strong>Complex:</strong> One independent clause and at least one dependent clause. "Although she was busy, she wrote the report."</li>
                                <li><strong>Compound-Complex:</strong> Two independent clauses and at least one dependent clause.</li>
                            </ul>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Paragraph Structure</h2>
                    
                    <details>
                        <summary className='ml2'>The Five-Sentence Paragraph Model</summary>
                        <div className="box">
                            <ol>
                                <li><strong>Topic Sentence:</strong> Main idea of the paragraph</li>
                                <li><strong>Supporting Sentence 1:</strong> Evidence or explanation</li>
                                <li><strong>Supporting Sentence 2:</strong> Additional evidence or example</li>
                                <li><strong>Supporting Sentence 3:</strong> Further support or detail</li>
                                <li><strong>Concluding Sentence:</strong> Restates main idea or transitions</li>
                            </ol>
                            <p><strong>Pro Tip:</strong> Not all paragraphs need exactly 5 sentences, but this structure works well for professional writing.</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>Transitions Between Sentences</summary>
                        <div className="box">
                            <p><strong>Use transition words to connect ideas:</strong></p>
                            <ul>
                                <li>Addition: Furthermore, Moreover, Additionally</li>
                                <li>Contrast: However, In contrast, Conversely</li>
                                <li>Cause/Effect: Therefore, Consequently, As a result</li>
                                <li>Time: First, Next, Subsequently, Finally</li>
                            </ul>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Punctuation Essentials</h2>
                    
                    <details>
                        <summary className='ml2'>Commas</summary>
                        <div className="box">
                            <p><strong>Use commas:</strong></p>
                            <ul>
                                <li>Between items in a list: "We need teamwork, communication, and dedication."</li>
                                <li>Before coordinating conjunctions: "We worked hard, but we still missed the deadline."</li>
                                <li>After introductory phrases: "After the meeting, we discussed the results."</li>
                                <li>Around non-essential information: "The manager, who was busy, approved the proposal."</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>Semicolons and Colons</summary>
                        <div className="box">
                            <p><strong>Semicolon (;):</strong> Connects two independent clauses or separates items in a complex list.</p>
                            <ul>
                                <li>"The project was successful; it exceeded all expectations."</li>
                                <li>"We visited three cities: Boston, Massachusetts; Denver, Colorado; and Phoenix, Arizona."</li>
                            </ul>
                            <p><strong>Colon (:):</strong> Introduces a list, explanation, or important information.</p>
                            <ul>
                                <li>"The team needs three things: dedication, resources, and time."</li>
                                <li>"Here's the decision: We will proceed as planned."</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>Apostrophes</summary>
                        <div className="box">
                            <p><strong>Possessives:</strong> "The CEO's office" or "The managers' meeting"</p>
                            <p><strong>Contractions:</strong> "I'm" (I am), "It's" (It is), "Don't" (Do not)</p>
                            <p><strong>Common Mistake:</strong> Don't use apostrophes for plurals! "The 1990s" NOT "The 1990's"</p>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Pro Tips & Tricks for Basic Writing</h2>
                    
                    <details>
                        <summary className='ml2'>💡 Trick 1: The Subject-Verb Agreement Quick Check</summary>
                        <div className="box">
                            <p><strong>Circle the subject, underline the verb, make sure they match:</strong></p>
                            <ul>
                                <li>"(The team) IS working..." ✓ (Team = singular)</li>
                                <li>"(The data) IS important..." ✓ (Data = singular; was plural in Latin)</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>💡 Trick 2: The "One Main Idea Per Paragraph" Rule</summary>
                        <div className="box">
                            <p><strong>If you're starting a new idea, start a new paragraph!</strong></p>
                            <p>Paragraph 1: Topic A details. Paragraph 2: Topic B details. This improves readability by 40%!</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>💡 Trick 3: The "Read Backwards" Proofreading</summary>
                        <div className="box">
                            <p><strong>To catch typos and punctuation errors, read your last sentence first, then second-to-last, etc.</strong></p>
                            <p>Your brain won't autocorrect when reading backwards, so you'll spot actual errors!</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>💡 Trick 4: The Comma Splice Test</summary>
                        <div className="box">
                            <p><strong>If you can say "and" between two independent clauses, use a semicolon, not a comma:</strong></p>
                            <p>"The meeting was productive, it led to new ideas." → "The meeting was productive; it led to new ideas." ✓</p>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Key Takeaways</h2>
                    <ul className="feature-list">
                        <li>Every complete sentence needs a subject and verb expressing a complete thought.</li>
                        <li>Organize writing into paragraphs with clear topic sentences and supporting details.</li>
                        <li>Use punctuation correctly to enhance clarity and professionalism.</li>
                        <li>Proofread carefully, reading backwards to catch errors your eyes might skip.</li>
                        <li>One main idea per paragraph improves readability and comprehension.</li>
                    </ul>
                </section>
            </div>
            </div>
        </>
    )
}

export default BasicWritingSkills
