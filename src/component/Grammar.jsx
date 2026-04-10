import '../App.css'
import Navbar from './navbar'
import Sidebar from './Sidebar'
import GrammarSimulator from './GrammarSimulator'

const Grammar = () => {
    return (
        <>
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="container" style={{animation: 'fadeIn 0.6s ease'}}>
                    <h1 style={{animation: 'slideInLeft 0.6s ease'}}>Grammar and Language Structure</h1>
                
                <section style={{animation: 'slideInRight 0.5s ease'}}>
                    <h2>Introduction to Grammar</h2>
                    <p>
                        Grammar is the system of rules and principles that governs the structure of sentences and the combination of words in a language. 
                        It provides the framework for clear and effective communication. Mastering grammar is essential for professional communication as it 
                        ensures that your message is understood correctly and you are perceived as a credible communicator.
                    </p>
                </section>

                <section style={{animation: 'slideInLeft 0.5s ease 0.1s both'}}>
                    <h2>Parts of Speech</h2>
                    <p>The eight parts of speech are the building blocks of English grammar:</p>
                    
                    <details>
                        <summary className='ml2'>1. Noun</summary>
                        <div className="box">
                            <p>
                                <strong>Definition:</strong> A word used to name a person, place, thing, or idea.
                            </p>
                            <p>
                                <strong>Types:</strong>
                            </p>
                            <ul>
                                <li><strong>Common Nouns:</strong> General names (book, teacher, city)</li>
                                <li><strong>Proper Nouns:</strong> Names of specific people, places, or things (John, Paris, Microsoft)</li>
                                <li><strong>Concrete Nouns:</strong> Things you can perceive with senses (table, music, flowers)</li>
                                <li><strong>Abstract Nouns:</strong> Ideas, qualities, or states (love, freedom, courage)</li>
                                <li><strong>Collective Nouns:</strong> Names for groups (team, family, committee)</li>
                            </ul>
                            <p>
                                <strong>Examples:</strong> "The <em>team</em> made a <em>decision</em> about the <em>project</em>."
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>2. Verb</summary>
                        <div className="box">
                            <p>
                                <strong>Definition:</strong> A word used to indicate an action, state of being, or occurrence.
                            </p>
                            <p>
                                <strong>Types:</strong>
                            </p>
                            <ul>
                                <li><strong>Action Verbs:</strong> Show physical or mental activity (run, think, write)</li>
                                <li><strong>Linking Verbs:</strong> Connect subject to subject complement (is, are, seem, appear)</li>
                                <li><strong>Transitive Verbs:</strong> Require a direct object (hit, throw, give)</li>
                                <li><strong>Intransitive Verbs:</strong> Don't require a direct object (sleep, laugh, exist)</li>
                                <li><strong>Modal Verbs:</strong> Show mode or mood (can, could, will, would, should)</li>
                            </ul>
                            <p>
                                <strong>Examples:</strong> "She <em>completed</em> the report and <em>submitted</em> it on time."
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>3. Pronoun</summary>
                        <div className="box">
                            <p>
                                <strong>Definition:</strong> A word used in place of a noun to avoid repetition.
                            </p>
                            <p>
                                <strong>Types:</strong>
                            </p>
                            <ul>
                                <li><strong>Personal Pronouns:</strong> Refer to specific people (I, you, he, she, it, we, they)</li>
                                <li><strong>Possessive Pronouns:</strong> Show ownership (mine, yours, his, hers, ours, theirs)</li>
                                <li><strong>Relative Pronouns:</strong> Introduce clauses (who, which, that, whom, whose)</li>
                                <li><strong>Demonstrative Pronouns:</strong> Point to specific things (this, that, these, those)</li>
                                <li><strong>Interrogative Pronouns:</strong> Ask questions (who, which, what, whom, whose)</li>
                            </ul>
                            <p>
                                <strong>Examples:</strong> "<em>They</em> completed <em>their</em> assignment, and <em>it</em> was excellent."
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>4. Adjective</summary>
                        <div className="box">
                            <p>
                                <strong>Definition:</strong> A word used to describe or modify a noun or pronoun.
                            </p>
                            <p>
                                <strong>Types:</strong>
                            </p>
                            <ul>
                                <li><strong>Descriptive Adjectives:</strong> Describe qualities (beautiful, large, difficult)</li>
                                <li><strong>Quantitative Adjectives:</strong> Describe quantity (many, few, several, all)</li>
                                <li><strong>Possessive Adjectives:</strong> Show ownership (my, your, his, her, its, our, their)</li>
                                <li><strong>Demonstrative Adjectives:</strong> Point to specific things (this, that, these, those)</li>
                            </ul>
                            <p>
                                <strong>Examples:</strong> "The <em>professional</em> team completed the <em>challenging</em> project with <em>excellent</em> results."
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>5. Adverb</summary>
                        <div className="box">
                            <p>
                                <strong>Definition:</strong> A word used to modify a verb, adjective, or another adverb, usually describing how, when, where, or why something happens.
                            </p>
                            <p>
                                <strong>Types:</strong>
                            </p>
                            <ul>
                                <li><strong>Adverbs of Manner:</strong> Describe how (quickly, carefully, well)</li>
                                <li><strong>Adverbs of Time:</strong> Describe when (today, yesterday, soon, now)</li>
                                <li><strong>Adverbs of Place:</strong> Describe where (here, there, outside, inside)</li>
                                <li><strong>Adverbs of Frequency:</strong> Describe how often (always, never, often, sometimes)</li>
                                <li><strong>Adverbs of Degree:</strong> Describe to what extent (very, extremely, quite, rather)</li>
                            </ul>
                            <p>
                                <strong>Examples:</strong> "She <em>carefully</em> reviewed the document <em>yesterday</em> and <em>thoroughly</em> edited it."
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>6. Preposition</summary>
                        <div className="box">
                            <p>
                                <strong>Definition:</strong> A word that shows the relationship between a noun or pronoun and other words in a sentence.
                            </p>
                            <p>
                                <strong>Common Prepositions:</strong>
                            </p>
                            <ul>
                                <li><strong>Location:</strong> in, on, at, under, over, beside, between, among</li>
                                <li><strong>Direction:</strong> to, from, toward, away from, up, down, into, out of</li>
                                <li><strong>Time:</strong> before, after, during, since, for, until, throughout</li>
                                <li><strong>Relationship:</strong> of, about, with, without, through, by, except</li>
                            </ul>
                            <p>
                                <strong>Examples:</strong> "The meeting is <em>on</em> Monday <em>at</em> the office <em>near</em> the conference room."
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>7. Conjunction</summary>
                        <div className="box">
                            <p>
                                <strong>Definition:</strong> A word used to connect words, phrases, or clauses.
                            </p>
                            <p>
                                <strong>Types:</strong>
                            </p>
                            <ul>
                                <li><strong>Coordinating Conjunctions:</strong> Connect equal elements (and, but, or, nor, for, yet, so)</li>
                                <li><strong>Subordinating Conjunctions:</strong> Connect dependent and independent clauses (because, although, while, if, unless, since)</li>
                                <li><strong>Correlative Conjunctions:</strong> Pairs of conjunctions (either/or, neither/nor, both/and, whether/or)</li>
                            </ul>
                            <p>
                                <strong>Examples:</strong> "She worked on the project <em>and</em> finished it <em>because</em> she was dedicated <em>but</em> also had several days off."
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>8. Interjection</summary>
                        <div className="box">
                            <p>
                                <strong>Definition:</strong> A word or phrase used to express surprise, emotion, or to get someone's attention.
                            </p>
                            <p>
                                <strong>Common Interjections:</strong> Wow, Ah, Oh, Oops, Excellent, Great, Alas, Hey
                            </p>
                            <p>
                                <strong>Examples:</strong> "<em>Well</em>, the results are <em>excellent</em>! We achieved our goals."
                            </p>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Subject-Verb Agreement</h2>
                    <p>
                        The verb must agree with its subject in number (singular or plural) and person (first, second, or third).
                    </p>
                    <ul className="feature-list">
                        <li><strong>Rule 1:</strong> A singular subject takes a singular verb. "The manager <em>is</em> in the meeting."</li>
                        <li><strong>Rule 2:</strong> A plural subject takes a plural verb. "The managers <em>are</em> in the meeting."</li>
                        <li><strong>Rule 3:</strong> Compound subjects joined by "and" take a plural verb. "John and Sarah <em>are</em> working together."</li>
                        <li><strong>Rule 4:</strong> Compound subjects joined by "or" or "nor" agree with the nearest subject. "Either the manager or the employees <em>are</em> responsible."</li>
                        <li><strong>Rule 5:</strong> Indefinite pronouns (everyone, somebody, nobody) are usually singular. "<em>Everyone</em> <em>is</em> excited about the announcement."</li>
                    </ul>
                </section>

                <section>
                    <h2>Verb Tenses</h2>
                    <p>
                        Tenses indicate when an action or state occurs: in the past, present, or future.
                    </p>
                    
                    <details>
                        <summary className='ml2'>Simple Tenses</summary>
                        <div className="box">
                            <p>
                                <strong>Simple Present:</strong> "I work" - Habitual actions, facts, or states. <br/>
                                <strong>Simple Past:</strong> "I worked" - Completed actions. <br/>
                                <strong>Simple Future:</strong> "I will work" - Future actions.
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>Continuous (Progressive) Tenses</summary>
                        <div className="box">
                            <p>
                                <strong>Present Continuous:</strong> "I am working" - Actions happening now. <br/>
                                <strong>Past Continuous:</strong> "I was working" - Actions happening at a specific time in the past. <br/>
                                <strong>Future Continuous:</strong> "I will be working" - Actions that will be happening in the future.
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>Perfect Tenses</summary>
                        <div className="box">
                            <p>
                                <strong>Present Perfect:</strong> "I have worked" - Actions started in the past and continue or just finished. <br/>
                                <strong>Past Perfect:</strong> "I had worked" - Actions completed before another action in the past. <br/>
                                <strong>Future Perfect:</strong> "I will have worked" - Actions that will be completed before a specific future time.
                            </p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>Perfect Continuous Tenses</summary>
                        <div className="box">
                            <p>
                                <strong>Present Perfect Continuous:</strong> "I have been working" - Actions started in the past and continuing to now. <br/>
                                <strong>Past Perfect Continuous:</strong> "I had been working" - Actions that were ongoing before another past action. <br/>
                                <strong>Future Perfect Continuous:</strong> "I will have been working" - Actions that will continue up until a future time.
                            </p>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Active vs. Passive Voice</h2>
                    <p>
                        Voice indicates whether the subject performs the action (active) or receives the action (passive).
                    </p>
                    
                    <div className="box">
                        <p>
                            <strong>Active Voice:</strong> "The team completed the project." (Subject performs the action)
                        </p>
                        <p>
                            <strong>Passive Voice:</strong> "The project was completed by the team." (Subject receives the action)
                        </p>
                        <p>
                            In professional communication, <strong>active voice is generally preferred</strong> as it is more direct, concise, and engaging. 
                            However, passive voice can be used when the action is more important than the performer or when the performer is unknown.
                        </p>
                    </div>
                </section>

                <section>
                    <h2>Modal Verbs</h2>
                    <p>
                        Modal verbs express mood, possibility, obligation, or necessity. Common modals include: can, could, may, might, will, would, shall, should, must, and ought to.
                    </p>
                    <ul className="feature-list">
                        <li><strong>Can/Could:</strong> Ability or possibility. "I can complete this task." "Could you help me?"</li>
                        <li><strong>May/Might:</strong> Permission or possibility. "May I submit the report tomorrow?" "It might rain."</li>
                        <li><strong>Will/Would:</strong> Future action or habitual action. "I will attend the meeting." "I would always check twice."</li>
                        <li><strong>Shall/Should:</strong> Obligation or recommendation. "You should review the guidelines." "Shall we begin?"</li>
                        <li><strong>Must:</strong> Strong obligation or high probability. "You must submit by Friday." "He must be tired."</li>
                        <li><strong>Ought to:</strong> Moral obligation or expectation. "You ought to apologize."</li>
                    </ul>
                </section>

                <section>
                    <h2>Sentence Structure</h2>
                    
                    <details>
                        <summary className='ml2'>Simple Sentences</summary>
                        <div className="box">
                            <p>Contains one independent clause with a subject and a predicate.</p>
                            <p><strong>Example:</strong> "The CEO announced the new policy."</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>Complex Sentences</summary>
                        <div className="box">
                            <p>Contains one independent clause and one or more dependent clauses.</p>
                            <p><strong>Example:</strong> "Although the project was challenging, the team succeeded because they worked collaboratively."</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>Compound Sentences</summary>
                        <div className="box">
                            <p>Contains two or more independent clauses connected by a coordinator (and, but, or, nor, for, yet, so).</p>
                            <p><strong>Example:</strong> "She submitted the proposal on time, and the management approved it immediately."</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>Compound-Complex Sentences</summary>
                        <div className="box">
                            <p>Contains two or more independent clauses and one or more dependent clauses.</p>
                            <p><strong>Example:</strong> "Although we faced challenges, the team worked hard and achieved the target because they were determined."</p>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Common Grammar Mistakes to Avoid</h2>
                    <ul className="feature-list">
                        <li><strong>Run-on Sentences:</strong> Joining two independent clauses without proper punctuation or conjunctions.</li>
                        <li><strong>Fragments:</strong> Incomplete sentences lacking a subject or verb.</li>
                        <li><strong>Comma Splice:</strong> Using only a comma to join two independent clauses.</li>
                        <li><strong>Misplaced Modifiers:</strong> Placing modifiers away from the words they modify.</li>
                        <li><strong>Inconsistent Tense:</strong> Switching between tenses without a reason.</li>
                        <li><strong>Dangling Participles:</strong> Participles that don't clearly refer to the subject of the sentence.</li>
                        <li><strong>Double Negatives:</strong> Using two negatives that create confusion.</li>
                    </ul>
                </section>

                <section>
                    <h2>Key Takeaways</h2>
                    <ul className="feature-list">
                        <li>Master the eight parts of speech for a strong foundation.</li>
                        <li>Ensure subject-verb agreement for grammatically correct sentences.</li>
                        <li>Use appropriate verb tenses to convey meaning accurately.</li>
                        <li>Prefer active voice in professional communication for clarity and directness.</li>
                        <li>Understand and use modal verbs to express different levels of certainty and obligation.</li>
                        <li>Construct varied sentence structures to enhance readability and engagement.</li>
                        <li>Review your writing to catch and correct common grammar mistakes.</li>
                    </ul>
                </section>

                <section>
                    <h2>Pro Tips & Tricks for Grammar Mastery</h2>
                    
                    <details>
                        <summary className='ml2'>🎯 Trick 1: The "Who/Whom" Test</summary>
                        <div className="box">
                            <p>
                                Confused about who vs. whom? Replace with HE (who) or HIM (whom):
                            </p>
                            <ul>
                                <li>"<strong>Who</strong> is that?" → "HE is that?" ✓ (Correct)</li>
                                <li>"<strong>Whom</strong> did you meet?" → "Did you meet HIM?" ✓ (Correct)</li>
                            </ul>
                            <p><strong>Pro Tip:</strong> In professional emails: "Who should I send this to?" is acceptable and natural.</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>🎯 Trick 2: Subject-Verb Agreement with Tricky Subjects</summary>
                        <div className="box">
                            <p><strong>Common Mistakes:</strong></p>
                            <ul>
                                <li>"The team <strong>are</strong> meeting" ✗ → "The team <strong>is</strong> meeting" ✓</li>
                                <li>"Each employee <strong>have</strong> concerns" ✗ → "Each employee <strong>has</strong> concerns" ✓</li>
                                <li>"50% of the data <strong>are</strong> incorrect" ✗ → "50% of the data <strong>is</strong> incorrect" ✓</li>
                            </ul>
                            <p><strong>Pro Tip:</strong> Collective nouns (team, committee, group) are usually singular. The subject is the collection, not individuals.</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>🎯 Trick 3: Comma Splicing - How to Fix It</summary>
                        <div className="box">
                            <p><strong>Problem:</strong> "The meeting was productive, it led to new ideas." ✗</p>
                            <p><strong>Solutions:</strong></p>
                            <ul>
                                <li>Use a semicolon: "The meeting was productive; it led to new ideas." ✓</li>
                                <li>Use a coordinating conjunction: "The meeting was productive, and it led to new ideas." ✓</li>
                                <li>Create two sentences: "The meeting was productive. It led to new ideas." ✓</li>
                                <li>Use a subordinating conjunction: "Because the meeting was productive, it led to new ideas." ✓</li>
                            </ul>
                            <p><strong>Pro Tip:</strong> Remember FANBOYS for coordinating conjunctions: For, And, Nor, But, Or, Yet, So</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>🎯 Trick 4: Dangling Modifiers - Quick Fix</summary>
                        <div className="box">
                            <p><strong>Problem:</strong> "After reviewing the report, the conclusions were clear." ✗</p>
                            <p>Who reviewed the report? Not clear - modifiers dangle!</p>
                            <p><strong>Solution:</strong> "After reviewing the report, <strong>I found</strong> the conclusions were clear." ✓</p>
                            <p><strong>Pro Tip:</strong> The modifier's subject must match the sentence's subject. Check: "I reviewed" = I is the subject. ✓</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>🎯 Trick 5: Tense Consistency in Business Writing</summary>
                        <div className="box">
                            <p><strong>Rule:</strong> Don't randomly switch tenses unless time actually shifts.</p>
                            <p><strong>Incorrect:</strong> "The company was founded in 1995 and <strong>now operates</strong> in 50 countries." ✗</p>
                            <p><strong>Better:</strong> "The company was founded in 1995 and <strong>operated</strong> in 50 countries." ✓</p>
                            <p><strong>OR</strong> "The company <strong>was</strong> founded in 1995 and <strong>now operates</strong> in 50 countries." ✓ (Time shift explained)</p>
                            <p><strong>Pro Tip:</strong> In reports, maintain past tense for historical info, present/perfect for current status.</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>🎯 Trick 6: Active vs. Passive - Professional Advantage</summary>
                        <div className="box">
                            <p><strong>Passive (Weak):</strong> "Mistakes were made in the report." - Avoids responsibility</p>
                            <p><strong>Active (Strong):</strong> "The team made mistakes in the report." - Takes ownership</p>
                            <p><strong>When to use Passive:</strong></p>
                            <ul>
                                <li>When you truly don't know who did it</li>
                                <li>When the action is more important than the actor: "The project was completed on time." ✓</li>
                                <li>In technical writing: "The sample was tested at 100°C."</li>
                            </ul>
                            <p><strong>Pro Tip:</strong> Default to active voice but use passive strategically for diplomacy!</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>🎯 Trick 7: Apostrophes - Possessives vs. Contractions</summary>
                        <div className="box">
                            <p><strong>Possessives (no apostrophe before 's' for plurals):</strong></p>
                            <ul>
                                <li>The <strong>CEO's</strong> decision (one CEO) ✓</li>
                                <li>The <strong>CEOs'</strong> decision (multiple CEOs) ✓</li>
                                <li>James' office (already ends in 's') ✓</li>
                                <li>Its (possessive, no apostrophe) ✗ It's (contraction of "it is")</li>
                            </ul>
                            <p><strong>Pro Tip:</strong> If you can replace with "is/has," use it's. Otherwise, no apostrophe.</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>🎯 Trick 8: The Oxford Comma in Professional Writing</summary>
                        <div className="box">
                            <p><strong>With Oxford Comma (AP Style, Business Standard):</strong></p>
                            <p>"We need grammar, vocabulary, <strong>and</strong> communication skills." ✓</p>
                            <p><strong>Without Oxford Comma:</strong></p>
                            <p>"We need grammar, vocabulary and communication skills."</p>
                            <p><strong>Pro Tip:</strong> Use Oxford comma to avoid ambiguity: "We invited the CEO, the trainer, and the HR manager."</p>
                            <p>Without it: "We invited the CEO, the trainer and the HR manager." (Could be 2 or 3 people?)</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>🎯 Trick 9: Complex Sentence Structure for Impact</summary>
                        <div className="box">
                            <p><strong>Boring:</strong> "We worked hard. We succeeded. Our company grew." (Too many short sentences)</p>
                            <p><strong>Professional:</strong> "Because we worked hard, we succeeded, and our company subsequently grew." ✓</p>
                            <p><strong>Even Better:</strong> "Our dedication led to success and, consequently, company growth." ✓</p>
                            <p><strong>Pro Tip:</strong> Vary sentence length: Short for impact, long for complexity. Mix them!</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>🎯 Trick 10: Modal Verbs for Professionalism</summary>
                        <div className="box">
                            <p><strong>To soften requests (sound professional):</strong></p>
                            <ul>
                                <li>"Can you help?" (Direct) → "Could you help?" (Polite) → "Would you mind helping?" (Very polite)</li>
                                <li>"I will attend" (Firm) → "I should attend" (Likely) → "I might attend" (Uncertain)</li>
                            </ul>
                            <p><strong>Power Ranking of Certainty:</strong></p>
                            <ul>
                                <li><strong>Must/Will:</strong> Absolute certainty</li>
                                <li><strong>Should/Ought to:</strong> Strong likelihood</li>
                                <li><strong>May/Can:</strong> Possibility</li>
                                <li><strong>Might/Could:</strong> Lower probability</li>
                            </ul>
                            <p><strong>Pro Tip:</strong> In emails, use "could" and "would" to sound less demanding: "Would you be able to review this?"</p>
                        </div>
                    </details>
                </section>

                <section style={{animation: 'slideInLeft 0.6s ease', marginTop: '40px'}}>
                    <h2 style={{marginBottom: '30px', color: '#667eea'}}>📊 Interactive Grammar Practice</h2>
                    <GrammarSimulator />
                </section>
            </div>
            </div>
        </>
    )
}

export default Grammar
