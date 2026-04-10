import '../App.css'
import Navbar from './navbar'
import Sidebar from './Sidebar'

const WritingPractices = () => {
    return (
        <>
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="container" style={{animation: 'fadeIn 0.6s ease'}}>
                    <h1 style={{animation: 'slideInLeft 0.6s ease', color: '#2c3e50'}}>Writing Practices & Comprehension</h1>
                
                <section>
                    <h2>Introduction</h2>
                    <p>
                        Writing practices refer to consistent habits and routines that improve writing quality over time. 
                        Comprehension—understanding both what you're reading and what your reader will understand—is essential for effective communication. 
                        This section covers practical approaches to developing strong writing habits and ensuring your message is comprehensible.
                    </p>
                </section>

                <section>
                    <h2>Effective Writing Practices</h2>
                    
                    <details>
                        <summary className='ml2'>1. Prewriting: Plan Before You Write</summary>
                        <div className="box">
                            <p><strong>Methods:</strong></p>
                            <ul>
                                <li><strong>Brainstorming:</strong> List all ideas without judgment</li>
                                <li><strong>Outlining:</strong> Organize ideas hierarchically</li>
                                <li><strong>Mind Mapping:</strong> Visually connect related ideas</li>
                                <li><strong>Freewriting:</strong> Write continuously for 10-15 minutes without stopping</li>
                            </ul>
                            <p><strong>Benefit:</strong> 5 minutes of planning saves 15 minutes of writing!</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>2. Drafting: Get Ideas on Paper</summary>
                        <div className="box">
                            <p>
                                Don't aim for perfection in the first draft. Focus on getting your ideas out.
                            </p>
                            <ul>
                                <li>Write without stopping to edit</li>
                                <li>Follow your outline but allow flexibility</li>
                                <li>Don't worry about grammar or spelling initially</li>
                                <li>Aim for a rough version that captures all main points</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>3. Revising: Reorganize and Improve</summary>
                        <div className="box">
                            <p>
                                The most important step! Revision is where good writing becomes great writing.
                            </p>
                            <ul>
                                <li><strong>Content Revision:</strong> Is the message clear? Do supporting points strengthen the argument?</li>
                                <li><strong>Organization Revision:</strong> Does the structure make sense? Should paragraphs be reordered?</li>
                                <li><strong>Style Revision:</strong> Is the tone consistent? Is language precise?</li>
                                <li><strong>Sentence-Level Revision:</strong> Are sentences clear and varied?</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>4. Editing: Fix Grammar and Style</summary>
                        <div className="box">
                            <p>
                                Now focus on grammar, punctuation, spelling, and formatting.
                            </p>
                            <ul>
                                <li>Check subject-verb agreement</li>
                                <li>Verify correct punctuation</li>
                                <li>Ensure consistent formatting</li>
                                <li>Catch spelling errors and typos</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>5. Proofreading: Final Check</summary>
                        <div className="box">
                            <p>
                                A final careful read to catch any remaining errors.
                            </p>
                            <ul>
                                <li>Read the document aloud</li>
                                <li>Look for consistency in terminology</li>
                                <li>Check that all sentences are complete</li>
                                <li>Verify citations and references if applicable</li>
                            </ul>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Ensuring Comprehension</h2>
                    
                    <details>
                        <summary className='ml2'>1. Know Your Audience</summary>
                        <div className="box">
                            <ul>
                                <li><strong>Technical Background:</strong> Can use industry jargon; assume certain knowledge</li>
                                <li><strong>General Audience:</strong> Define specialized terms; avoid unnecessary jargon</li>
                                <li><strong>Multiple Audiences:</strong> Use a glossary or appendix for terminology</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>2. Use Clear Structure</summary>
                        <div className="box">
                            <p><strong>Make documents easy to navigate:</strong></p>
                            <ul>
                                <li>Use descriptive headings and subheadings</li>
                                <li>Number lists and steps clearly</li>
                                <li>Use white space effectively</li>
                                <li>Highlight or bold key terms on first mention</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>3. Use Examples and Scenarios</summary>
                        <div className="box">
                            <p>
                                Real-world examples make abstract concepts concrete and memorable.
                            </p>
                            <p><strong>Abstract:</strong> "Efficiency improvements are beneficial."</p>
                            <p><strong>With Example:</strong> "Efficiency improvements save time. For example, automating data entry reduced processing time from 4 hours to 30 minutes daily."</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>4. Define Unfamiliar Terms</summary>
                        <div className="box">
                            <p>
                                When introducing new terminology, explain it immediately.
                            </p>
                            <p><strong>Good:</strong> "The API (Application Programming Interface), which is a set of rules allowing different software to communicate, enables..."</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>5. Use Repetition Strategically</summary>
                        <div className="box">
                            <p>
                                Key concepts should be reinforced through repetition in different ways.
                            </p>
                            <ul>
                                <li>Introduce the concept</li>
                                <li>Explain it with examples</li>
                                <li>Restate it in conclusion</li>
                            </ul>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>The Readability Formula</h2>
                    <ul className="feature-list">
                        <li><strong>Short sentences:</strong> Aim for 15-20 words average. Under 25 words is best.</li>
                        <li><strong>Common words:</strong> Use words your audience knows. Avoid unnecessary complexity.</li>
                        <li><strong>Short paragraphs:</strong> 4-7 sentences maximum. White space improves comprehension.</li>
                        <li><strong>Active voice:</strong> "We completed" not "It was completed"</li>
                        <li><strong>One idea per paragraph:</strong> Navigate readers through your logic clearly.</li>
                    </ul>
                </section>

                <section>
                    <h2>Pro Tips for Writing Practice and Comprehension</h2>
                    
                    <details>
                        <summary className='ml2'>📚 Trick 1: The Readability Score Check</summary>
                        <div className="box">
                            <p><strong>Tools like Hemingway App or Grammarly check readability levels.</strong></p>
                            <p>Aim for "Grade 8-10" readability for professional writing (accessible but sophisticated).</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>📚 Trick 2: The "Teach Someone Else" Test</summary>
                        <div className="box">
                            <p><strong>Try explaining your main point to someone unfamiliar with the topic.</strong></p>
                            <p>If they understand, your writing is comprehensible. If not, you need to clarify.</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>📚 Trick 3: The Time-Gap Revision</summary>
                        <div className="box">
                            <p><strong>Wait at least 2-4 hours (or a day if possible) before revising.</strong></p>
                            <p>Fresh eyes catch errors and clarity issues you'd miss immediately after writing.</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>📚 Trick 4: Beta Reader Feedback</summary>
                        <div className="box">
                            <p><strong>Have a colleague read your important documents.</strong></p>
                            <p>Ask: "Is the main point clear? Where did you get confused? What would you change?"</p>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Key Takeaways</h2>
                    <ul className="feature-list">
                        <li>Effective writing follows a 5-step process: prewriting, drafting, revising, editing, proofreading.</li>
                        <li>Revision is where quality writing is created—don't skip this step.</li>
                        <li>Understanding your audience determines vocabulary, tone, and detail level.</li>
                        <li>Clear structure, examples, and defined terms enhance comprehension.</li>
                        <li>Short sentences, paragraphs, and common words improve readability significantly.</li>
                    </ul>
                </section>
            </div>
            </div>
        </>
    )
}

export default WritingPractices
