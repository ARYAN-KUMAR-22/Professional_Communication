import '../App.css'
import Navbar from './navbar'
import Sidebar from './Sidebar'

const Vocabulary = () => {
    return (
        <>
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="container" style={{animation: 'fadeIn 0.6s ease'}}>
                <h1 style={{animation: 'slideInLeft 0.6s ease', color: '#2c3e50'}}>Vocabulary Building & Enhancement</h1>
                
                <section>
                    <h2>Introduction to Vocabulary</h2>
                    <p>
                        A strong, versatile vocabulary is essential for professional communication. It allows you to express ideas precisely, 
                        understand complex texts, and make a positive impression on colleagues and clients. Building vocabulary is an ongoing process 
                        that requires exposure to new words and deliberate practice.
                    </p>
                </section>

                <section>
                    <h2>Word Formation</h2>
                    <p>
                        Understanding how words are formed helps you recognize patterns and learn multiple related words at once.
                    </p>

                    <details>
                        <summary className='ml2'>Prefixes</summary>
                        <div className="box">
                            <p>
                                A prefix is a group of letters added to the beginning of a word to change its meaning.
                            </p>
                            <table style={{width: '100%', borderCollapse: 'collapse'}}>
                                <thead>
                                    <tr style={{backgroundColor: '#f0f0f0'}}>
                                        <th style={{border: '1px solid #ddd', padding: '10px'}}>Prefix</th>
                                        <th style={{border: '1px solid #ddd', padding: '10px'}}>Meaning</th>
                                        <th style={{border: '1px solid #ddd', padding: '10px'}}>Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>un-</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>not, opposite</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>unhappy, unable, unclear</td>
                                    </tr>
                                    <tr style={{backgroundColor: '#fafbff'}}>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>re-</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>again, back</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>redo, rewrite, rebuild</td>
                                    </tr>
                                    <tr>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>pre-</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>before</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>preview, prepare, prevent</td>
                                    </tr>
                                    <tr style={{backgroundColor: '#fafbff'}}>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>dis-</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>not, opposite, away</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>disagree, discover, discourage</td>
                                    </tr>
                                    <tr>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>over-</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>too much, above</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>overwork, overlook, overflow</td>
                                    </tr>
                                    <tr style={{backgroundColor: '#fafbff'}}>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>sub-</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>under, below</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>subtract, submarine, submit</td>
                                    </tr>
                                    <tr>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>inter-</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>between, among</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>interact, international, interrupt</td>
                                    </tr>
                                    <tr style={{backgroundColor: '#fafbff'}}>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>mis-</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>wrong, bad</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>misunderstand, misbehave, misplace</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>Suffixes</summary>
                        <div className="box">
                            <p>
                                A suffix is a group of letters added to the end of a word to change its meaning or function.
                            </p>
                            <table style={{width: '100%', borderCollapse: 'collapse'}}>
                                <thead>
                                    <tr style={{backgroundColor: '#f0f0f0'}}>
                                        <th style={{border: '1px solid #ddd', padding: '10px'}}>Suffix</th>
                                        <th style={{border: '1px solid #ddd', padding: '10px'}}>Use</th>
                                        <th style={{border: '1px solid #ddd', padding: '10px'}}>Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>-tion / -sion</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>Noun: the act or result</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>action, communication, decision</td>
                                    </tr>
                                    <tr style={{backgroundColor: '#fafbff'}}>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>-ment</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>Noun: the result or product</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>development, achievement, management</td>
                                    </tr>
                                    <tr>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>-ness</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>Noun: quality or state</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>happiness, professionalism, awareness</td>
                                    </tr>
                                    <tr style={{backgroundColor: '#fafbff'}}>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>-ful</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>Adjective: full of</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>helpful, successful, meaningful</td>
                                    </tr>
                                    <tr>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>-less</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>Adjective: without</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>helpless, hopeless, pointless</td>
                                    </tr>
                                    <tr style={{backgroundColor: '#fafbff'}}>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>-able / -ible</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>Adjective: capable of being</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>manageable, possible, flexible</td>
                                    </tr>
                                    <tr>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>-tion / -ous</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>Adjective: full of</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>ambitious, dangerous, famous</td>
                                    </tr>
                                    <tr style={{backgroundColor: '#fafbff'}}>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>-ly</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>Adverb: in a certain way</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>quickly, professionally, clearly</td>
                                    </tr>
                                    <tr>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>-er / -or</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>Noun: one who does</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>teacher, manager, supervisor</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Synonyms and Antonyms</h2>
                    
                    <details>
                        <summary className='ml2'>Synonyms</summary>
                        <div className="box">
                            <p>
                                <strong>Synonyms</strong> are words with similar meanings. Using synonyms helps you vary your language and avoid repetition.
                            </p>
                            <ul>
                                <li><strong>Important:</strong> significant, crucial, essential, vital, critical</li>
                                <li><strong>Happy:</strong> pleased, delighted, content, satisfied, cheerful</li>
                                <li><strong>Big:</strong> large, enormous, huge, massive, substantial</li>
                                <li><strong>Good:</strong> excellent, outstanding, superior, fine, admirable</li>
                                <li><strong>Complete:</strong> finish, conclude, accomplish, fulfill, achieve</li>
                                <li><strong>Help:</strong> assist, support, aid, facilitate, contribute</li>
                                <li><strong>Problem:</strong> issue, challenge, difficulty, obstacle, complication</li>
                                <li><strong>Improve:</strong> enhance, upgrade, refine, develop, strengthen</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>Antonyms</summary>
                        <div className="box">
                            <p>
                                <strong>Antonyms</strong> are words with opposite meanings. Understanding antonyms helps clarify meaning and express contrasts.
                            </p>
                            <ul>
                                <li><strong>Success</strong> ↔ <strong>Failure</strong></li>
                                <li><strong>Clear</strong> ↔ <strong>Confusing</strong></li>
                                <li><strong>Strength</strong> ↔ <strong>Weakness</strong></li>
                                <li><strong>Beginning</strong> ↔ <strong>End</strong></li>
                                <li><strong>Increase</strong> ↔ <strong>Decrease</strong></li>
                                <li><strong>Accept</strong> ↔ <strong>Reject</strong></li>
                                <li><strong>Advantage</strong> ↔ <strong>Disadvantage</strong></li>
                                <li><strong>Formal</strong> ↔ <strong>Informal</strong></li>
                            </ul>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Common Business Vocabulary</h2>
                    <ul className="feature-list">
                        <li><strong>Stakeholder:</strong> A person or group with an interest in the success of a project or organization.</li>
                        <li><strong>Deliverable:</strong> A tangible or intangible product produced as a result of a project.</li>
                        <li><strong>Feedback:</strong> Information given to evaluate or criticize performance.</li>
                        <li><strong>Objective:</strong> A goal or aim that guides actions and decisions.</li>
                        <li><strong>Strategic:</strong> Carefully planned according to long-term goals and purposes.</li>
                        <li><strong>Implement:</strong> To put a plan or system into action.</li>
                        <li><strong>Analyze:</strong> To examine something carefully and in detail to understand its nature.</li>
                        <li><strong>Collaborate:</strong> To work cooperatively with others.</li>
                        <li><strong>Benchmark:</strong> A standard or point of reference against which something is measured.</li>
                        <li><strong>Synergy:</strong> The interaction of two or more elements to produce a combined effect greater than the sum of individual parts.</li>
                        <li><strong>Leverage:</strong> To use something to maximum advantage or effect.</li>
                        <li><strong>Paradigm:</strong> A typical example or pattern of something; a model.</li>
                    </ul>
                </section>

                <section>
                    <h2>Word Roots from Foreign Languages</h2>
                    
                    <details>
                        <summary className='ml2'>Latin Roots</summary>
                        <div className="box">
                            <ul>
                                <li><strong>dict</strong> (speak): dictionary, predict, dictate, verdict</li>
                                <li><strong>scrib</strong> (write): describe, prescribe, manuscript, transcribe</li>
                                <li><strong>port</strong> (carry): transport, import, export, portable</li>
                                <li><strong>duc</strong> (lead): introduce, produce, conduct, educate</li>
                                <li><strong>struct</strong> (build): construct, structure, infrastructure, destruct</li>
                            </ul>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>Greek Roots</summary>
                        <div className="box">
                            <ul>
                                <li><strong>graph</strong> (write): biography, photograph, graphic, paragraph</li>
                                <li><strong>phone</strong> (sound): telephone, microphone, symphony, megaphone</li>
                                <li><strong>chron</strong> (time): chronological, synchronize, anachronism, chronicle</li>
                                <li><strong>scope</strong> (see): microscope, telescope, horoscope, periscope</li>
                                <li><strong>geo</strong> (earth): geography, geology, geometry, geothermal</li>
                            </ul>
                        </div>
                    </details>
                </section>

                <section>
                    <h2>Acronyms and Abbreviations</h2>
                    <p>
                        Acronyms are words formed from the first letter of each word in a phrase. Abbreviations are shortened forms of words or phrases.
                    </p>
                    <div className="box">
                        <p>
                            Common business acronyms: CEO (Chief Executive Officer), HR (Human Resources), ROI (Return on Investment), 
                            KPI (Key Performance Indicator), B2B (Business to Business), SOP (Standard Operating Procedure), 
                            FAQ (Frequently Asked Questions), EOD (End of Day)
                        </p>
                    </div>
                </section>

                <section>
                    <h2>Strategies for Building Vocabulary</h2>
                    <ul className="feature-list">
                        <li><strong>Read Regularly:</strong> Expose yourself to new words through reading professional materials, articles, and books.</li>
                        <li><strong>Use Context Clues:</strong> Learn words from their context rather than memorizing definitions in isolation.</li>
                        <li><strong>Keep a Word Journal:</strong> Record new words, their definitions, synonyms, and example sentences.</li>
                        <li><strong>Learn Word Families:</strong> Study related words formed with the same root, prefix, or suffix.</li>
                        <li><strong>Practice Active Recall:</strong> Use new words in conversations and writing to reinforce learning.</li>
                        <li><strong>Use Flashcards:</strong> Create and review flashcards for vocabulary retention.</li>
                        <li><strong>Learn in Groups:</strong> Study with colleagues or in groups to share and reinforce new vocabulary.</li>
                        <li><strong>Engage with Multimedia:</strong> Learn from videos, podcasts, and other media in your field.</li>
                        <li><strong>Regular Review:</strong> Revisit learned vocabulary periodically to maintain retention.</li>
                    </ul>
                </section>

                <section>
                    <h2>Key Takeaways</h2>
                    <ul className="feature-list">
                        <li>Understand prefixes and suffixes to recognize word patterns and learn words more efficiently.</li>
                        <li>Use synonyms to vary your language and maintain reader engagement.</li>
                        <li>Know antonyms to express contrasts and nuances in your communication.</li>
                        <li>Familiarize yourself with common business vocabulary for professional contexts.</li>
                        <li>Learn major word roots from Latin and Greek to understand word meaning.</li>
                        <li>Use consistent strategies to build and maintain your professional vocabulary.</li>
                    </ul>
                </section>

                <section>
                    <h2>Pro Tips & Tricks for Vocabulary Expansion</h2>
                    
                    <details>
                        <summary className='ml2'>💡 Trick 1: Prefix Pattern Recognition</summary>
                        <div className="box">
                            <p><strong>Speed Learning Method:</strong> Once you learn one prefix, you understand dozens of words!</p>
                            <ul>
                                <li><strong>UN-:</strong> unaware, unhappy, unclear, undo, unfair → All mean "not" or "opposite"</li>
                                <li><strong>RE-:</strong> redo, rewrite, rebuild, reconsider, reorganize → All mean "again"</li>
                                <li><strong>PRE-:</strong> preview, prepare, prevent, predict, precaution → All mean "before"</li>
                            </ul>
                            <p><strong>Pro Tip:</strong> When you encounter an unknown word, first identify the prefix/suffix, then guess the meaning!</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>💡 Trick 2: The "TION" Rule - Instant Noun Maker</summary>
                        <div className="box">
                            <p><strong>Verb → Noun Transformation:</strong></p>
                            <ul>
                                <li>Communicate → Communication ✓</li>
                                <li>Organize → Organization ✓</li>
                                <li>Compete → Competition ✓</li>
                                <li>Celebrate → Celebration ✓</li>
                            </ul>
                            <p><strong>Pro Tip:</strong> Know a verb? Add "-tion" (or "-sion") and you instantly have its noun! This works for 60%+ of common verbs.</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>💡 Trick 3: Synonym Substitution for Better Writing</summary>
                        <div className="box">
                            <p><strong>Repetition Problem:</strong> "The project was good. The results were good. The team was good." ✗</p>
                            <p><strong>Solution - Use Synonyms:</strong></p>
                            <ul>
                                <li>Project: good → <strong>well-designed</strong> ✓</li>
                                <li>Results: good → <strong>excellent</strong> ✓</li>
                                <li>Team: good → <strong>outstanding</strong> ✓</li>
                            </ul>
                            <p><strong>Improved:</strong> "The <strong>well-designed</strong> project delivered <strong>excellent</strong> results from our <strong>outstanding</strong> team." ✓</p>
                            <p><strong>Pro Tip:</strong> Use a thesaurus, but ensure the synonym fits the context perfectly.</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>💡 Trick 4: Context Clues for Learning New Words</summary>
                        <div className="box">
                            <p><strong>Instead of memorizing definitions, learn from context:</strong></p>
                            <p>Example: "The manager's <strong>disparate</strong> management styles confuse the team."</p>
                            <p><strong>Clues:</strong> "disparate" + "confuse" → suggests something different/conflicting → Meaning: "different; varying"</p>
                            <p><strong>Similar Signals:</strong></p>
                            <ul>
                                <li>"... which <strong>exemplifies</strong> excellence" → exemplify = exemplify shows/demonstrates</li>
                                <li>"... or <strong>conversely</strong>, ..." → conversely = on the other hand</li>
                                <li>"... is <strong>analogous</strong> to ..." → analogous = similar</li>
                            </ul>
                            <p><strong>Pro Tip:</strong> Look for contrast words (but, however, unlike) or similarity words (like, similar, also) as context clues.</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>💡 Trick 5: Business Vocabulary - Informal vs. Formal</summary>
                        <div className="box">
                            <p><strong>Know the difference for context:</strong></p>
                            <table style={{width: '100%', borderCollapse: 'collapse'}}>
                                <thead>
                                    <tr style={{backgroundColor: '#f0f0f0'}}>
                                        <th style={{border: '1px solid #ddd', padding: '10px'}}>Informal</th>
                                        <th style={{border: '1px solid #ddd', padding: '10px'}}>Formal/Professional</th>
                                        <th style={{border: '1px solid #ddd', padding: '10px'}}>Context</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>team up</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>collaborate</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>Reports, formal emails</td>
                                    </tr>
                                    <tr style={{backgroundColor: '#fafbff'}}>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>talk about</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>discuss, address</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>Meetings, presentations</td>
                                    </tr>
                                    <tr>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>fix a problem</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>resolve, mitigate</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>Formal communication</td>
                                    </tr>
                                    <tr style={{backgroundColor: '#fafbff'}}>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>ramp up</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>accelerate, escalate</td>
                                        <td style={{border: '1px solid #ddd', padding: '10px'}}>Strategy meetings</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p><strong>Pro Tip:</strong> In professional settings, always lean toward formal vocabulary unless you know the culture is casual.</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>💡 Trick 6: Greek Root "MORPH" = Change</summary>
                        <div className="box">
                            <p><strong>Morphology:</strong> Study of word structure and how words change ✓</p>
                            <p><strong>Amorph:</strong> A shapeless substance ✓</p>
                            <p><strong>Metamorphosis:</strong> Transformation (meta = change + morph = form) ✓</p>
                            <p><strong>Pro Tip:</strong> Learn Greek/Latin roots to decode 40-60% of English vocabulary!</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>💡 Trick 7: Word Association Memory Technique</summary>
                        <div className="box">
                            <p><strong>Create crazy associations:</strong></p>
                            <ul>
                                <li><strong>Serendipity</strong> (luck): "I found happiness by SIT-END-DIPPING fries!" (silly = memorable)</li>
                                <li><strong>Pragmatic</strong> (practical): "PRAGMA (like pragma-tist) = get the job done"</li>
                                <li><strong>Meticulous</strong> (precise): "Like a METRIC that's careful and exact"</li>
                            </ul>
                            <p><strong>Pro Tip:</strong> The sillier the association, the better you remember it!</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>💡 Trick 8: Homophones That Cause Issues</summary>
                        <div className="box">
                            <p><strong>Words that SOUND the same but differ:</strong></p>
                            <ul>
                                <li><strong>Their</strong> (possessive) vs. <strong>They're</strong> (they are) vs. <strong>There</strong> (location)</li>
                                <li><strong>Accept</strong> (receive) vs. <strong>Except</strong> (exclude)</li>
                                <li><strong>Principal</strong> (main) vs. <strong>Principle</strong> (rule)</li>
                                <li><strong>Complement</strong> (goes well with) vs. <strong>Compliment</strong> (praise)</li>
                            </ul>
                            <p><strong>Pro Tip:</strong> Create a cheat sheet and post it! These are easy wins for professional credibility.</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>💡 Trick 9: Industry-Specific Jargon Mastery</summary>
                        <div className="box">
                            <p><strong>Strategy:</strong> Read industry newsletters and reports to absorb domain vocabulary naturally.</p>
                            <ul>
                                <li><strong>Finance:</strong> leverage, portfolio, ROI, liquidity, derivatives</li>
                                <li><strong>Tech:</strong> scalability, API, deployment, latency, agile</li>
                                <li><strong>Marketing:</strong> CTR, attribution, funnel, segmentation, conversion</li>
                            </ul>
                            <p><strong>Pro Tip:</strong> Know 10-15 key terms in your industry = instant credibility boost!</p>
                        </div>
                    </details>

                    <details>
                        <summary className='ml2'>💡 Trick 10: The "VAGUE" Upgrade Challenge</summary>
                        <div className="box">
                            <p><strong>Replace Weak Words with Powerful Alternatives:</strong></p>
                            <ul>
                                <li><strong>Good</strong> → excellent, outstanding, commendable, exemplary</li>
                                <li><strong>Bad</strong> → detrimental, substandard, deficient, inadequate</li>
                                <li><strong>Big</strong> → substantial, significant, considerable, massive</li>
                                <li><strong>Small</strong> → minimal, negligible, trivial, marginal</li>
                                <li><strong>Important</strong> → critical, essential, vital, paramount</li>
                            </ul>
                            <p><strong>Pro Tip Challenge:</strong> This week, replace 5 weak words with powerful synonyms in your emails. Feel the difference!</p>
                        </div>
                    </details>
                </section>
            </div>
            </div>
        </>
    )
}

export default Vocabulary
