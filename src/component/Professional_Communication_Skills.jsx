import '../App.css'
import Navbar from './navbar';

const Professsional_Communication_Skill = () => {
    return (
        <>
            <Navbar />
            <h1> Professional Communication Skill.</h1>



            <details>
                <summary className='ml1'>
                    English Language Skills
                </summary>

                <details>
                    <summary className='ml2'>
                        Grammer
                    </summary>
                    <details>
                        <summary className='ml3'>Parts of speech</summary>


                        <details>
                            <summary className='ml4'>
                                Verb
                            </summary>
                            <div className="box">
                                <p>
                                    a word or group of words that is used to indicate that something happens or exists, for example bring, happen, be, do
                                </p>
                            </div>
                        </details>

                        <details>
                            <summary className='ml4'>
                                Noun
                            </summary>
                        </details>


                        <details>
                            <summary className='ml4'>
                                Pronoun
                            </summary>
                        </details>


                        <details>
                            <summary className='ml4'>
                                Adjective
                            </summary>
                        </details>

                        <details>
                            <summary className='ml4'>
                                Adverb
                            </summary>
                        </details>

                        <details>
                            <summary className='ml4'>
                                Preposition
                            </summary>
                        </details>

                        <details>
                            <summary className='ml4'>
                                Conjuction
                            </summary>
                        </details>

                        <details>
                            <summary className='ml4'>
                                Interjection
                            </summary>
                        </details>


                    </details>
                    <ul>
                        <li>Phrase and clause.</li>
                        <li>Kind of Sentence.</li>
                        <li>Simple/Complex/Compound Sentence</li>
                        <li>Infinitive and Gerund (Verb) </li>
                        <li>Non finite</li>
                        <li>Subject -Verb -Aggrement (Basic / Foundation of English Grammer)</li>
                        <li>Verb and it's Usage.</li>
                        <li>Use of Tenses</li>
                        <li>Use of Voice</li>
                        <li>Modals</li>
                        <li>Determiners</li>
                    </ul>

                </details>
                <details>
                    <summary className='ml2'>
                        Non Grammer
                    </summary>

                    <details>
                        <summary>
                            Vocabulary Building
                        </summary>

                        <ul>
                            <li>The Concept of Word Formation.</li>
                            <li>Root words from Foreign languages and their use in English.</li>
                            <li>Acquaintance with prefixes and suffixes from Foreign languages.</li>
                            <li>In English to form Derivatives.</li>
                            <li>Synonyms, Antonyms, and Standard Abreviations.</li>
                            <li>Affixes, Acronyms.</li>
                        </ul>
                    </details>

                </details>
            </details>

            <details>
                <summary className='ml1'>
                    Communication Skills
                </summary>

            </details>
        </>
    )
}

export default Professsional_Communication_Skill;