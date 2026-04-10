import React, { useState } from 'react'
import '../App.css'

const GrammarSimulator = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [completed, setCompleted] = useState(false)

    const questions = [
        {
            question: 'Which sentence is correct?',
            options: [
                'She don\'t like coffee.',
                'She doesn\'t like coffee.',
                'She does not likes coffee.',
                'She doesn\'t likes coffee.'
            ],
            correct: 1,
            explanation: 'Subject-verb agreement: "She" (third person singular) requires "doesn\'t" (does not). The verb must be in base form after the auxiliary "does".'
        },
        {
            question: 'Identify the error: "The team are meeting tomorrow."',
            options: [
                'No error - "team" can be plural',
                'Should be "The team is meeting" - team is collective singular',
                'Should use "will meet" instead',
                'Subject-verb agreement is correct'
            ],
            correct: 1,
            explanation: 'In American English, collective nouns like "team" are treated as singular. British English may use plural. The correct form is "The team is meeting."'
        },
        {
            question: 'Which uses the correct pronoun?',
            options: [
                'Between you and I, this is difficult.',
                'Between you and me, this is difficult.',
                'Between you and him, this is tough.',
                'Both A and B are correct'
            ],
            correct: 1,
            explanation: 'Prepositions take object pronouns. "Between" is a preposition, so use "me" (object pronoun) not "I" (subject pronoun).'
        },
        {
            question: 'Which sentence has correct punctuation?',
            options: [
                'The meeting is tomorrow; however we should prepare today.',
                'The meeting is tomorrow; however, we should prepare today.',
                'The meeting is tomorrow. However, we should prepare today.',
                'Both B and C are correct'
            ],
            correct: 3,
            explanation: 'Both B and C are grammatically correct. B uses a semicolon with conjunctive adverb correctly. C starts a new sentence correctly.'
        },
        {
            question: 'Identify the run-on sentence:',
            options: [
                'She completed the project on time.',
                'She completed the project on time, and she did excellent work.',
                'She completed the project on time she did excellent work.',
                'She completed the project. It was done on time.'
            ],
            correct: 2,
            explanation: 'A run-on sentence joins two independent clauses without proper punctuation or conjunction. Option C needs a semicolon, period, or conjunction.'
        }
    ]

    const handleAnswer = (index) => {
        setSelectedAnswer(index)
        setShowResult(true)
        
        if (index === questions[currentQuestion].correct) {
            setScore(score + 1)
        }
    }

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setSelectedAnswer(null)
            setShowResult(false)
        } else {
            setCompleted(true)
        }
    }

    const resetQuiz = () => {
        setCurrentQuestion(0)
        setScore(0)
        setShowResult(false)
        setSelectedAnswer(null)
        setCompleted(false)
    }

    if (completed) {
        const percentage = (score / questions.length) * 100
        const level = percentage >= 80 ? 'Excellent! 🌟' : percentage >= 60 ? 'Good! 👍' : 'Keep practicing! 📚'
        
        return (
            <div className="simulator-container" style={{ textAlign: 'center', animation: 'slideInBottom 0.6s ease' }}>
                <h2 style={{ color: '#2c3e50', marginBottom: 20 }}>📊 Quiz Completed!</h2>
                <div style={{ fontSize: '3em', marginBottom: 20 }}>{score}/{questions.length}</div>
                <div style={{ fontSize: '1.5em', color: '#667eea', marginBottom: 20 }}>
                    {percentage.toFixed(1)}% - {level}
                </div>
                <button className="btn btn-primary" onClick={resetQuiz} style={{ padding: '12px 24px', fontSize: '1em' }}>
                    🔄 Try Again
                </button>
            </div>
        )
    }

    const question = questions[currentQuestion]
    const progress = ((currentQuestion + 1) / questions.length) * 100

    return (
        <div className="simulator-container" style={{ animation: 'slideInBottom 0.6s ease' }}>
            <style>{`
                .progress-bar {
                    width: 100%;
                    height: 6px;
                    background: #e0e0e0;
                    border-radius: 3px;
                    margin-bottom: 20px;
                    overflow: hidden;
                }
                
                .progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #667eea, #764ba2);
                    transition: width 0.3s ease;
                }

                .question-number {
                    color: #667eea;
                    font-weight: 600;
                    margin-bottom: 10px;
                }

                .question-text {
                    font-size: 1.1em;
                    font-weight: 600;
                    color: #2c3e50;
                    margin-bottom: 20px;
                    line-height: 1.5;
                }

                .options {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    margin-bottom: 20px;
                }

                .option-btn {
                    padding: 14px 16px;
                    border: 2px solid #ddd;
                    background: white;
                    border-radius: 8px;
                    cursor: pointer;
                    text-align: left;
                    transition: all 0.3s ease;
                    font-size: 0.95em;
                    color: #2c3e50;
                }

                .option-btn:hover:not(:disabled) {
                    border-color: #667eea;
                    background: #f8f9ff;
                    transform: translateX(4px);
                }

                .option-btn.selected {
                    border-color: #667eea;
                    background: #f0f3ff;
                }

                .option-btn.correct {
                    border-color: #4ecdc4;
                    background: #e8f8f7;
                    color: #4ecdc4;
                }

                .option-btn.incorrect {
                    border-color: #ff6b6b;
                    background: #ffe8e8;
                    color: #ff6b6b;
                }

                .option-btn:disabled {
                    cursor: not-allowed;
                }

                .explanation-box {
                    background: linear-gradient(135deg, #667eea08 0%, #764ba208 100%);
                    border-left: 4px solid #667eea;
                    padding: 15px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                    display: none;
                }

                .explanation-box.show {
                    display: block;
                    animation: slideInBottom 0.3s ease;
                }

                .explanation-title {
                    font-weight: 600;
                    color: #667eea;
                    margin-bottom: 8px;
                }

                .explanation-text {
                    color: #2c3e50;
                    line-height: 1.6;
                }

                .button-group {
                    display: flex;
                    gap: 10px;
                }

                .btn {
                    padding: 10px 16px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }

                .btn-primary {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                }

                .btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
                }

                .btn-disabled {
                    background: #ccc;
                    cursor: not-allowed;
                    opacity: 0.6;
                }
            `}</style>

            <div className="question-number">Question {currentQuestion + 1} of {questions.length}</div>
            <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>

            <div className="question-text">{question.question}</div>

            <div className="options">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        className={`option-btn ${selectedAnswer === index ? 'selected' : ''} ${
                            showResult && index === question.correct ? 'correct' : ''
                        } ${showResult && selectedAnswer === index && index !== question.correct ? 'incorrect' : ''}`}
                        onClick={() => handleAnswer(index)}
                        disabled={showResult}
                    >
                        {String.fromCharCode(65 + index)}. {option}
                    </button>
                ))}
            </div>

            <div className={`explanation-box ${showResult ? 'show' : ''}`}>
                <div className="explanation-title">
                    {selectedAnswer === question.correct ? '✅ Correct!' : '❌ Incorrect'}
                </div>
                <div className="explanation-text">{question.explanation}</div>
            </div>

            {showResult && (
                <button className="btn btn-primary" onClick={nextQuestion} style={{ width: '100%' }}>
                    {currentQuestion < questions.length - 1 ? 'Next Question →' : 'See Results'}
                </button>
            )}
        </div>
    )
}

export default GrammarSimulator
