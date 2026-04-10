import React, { useState } from 'react'
import '../App.css'

const CommunicationSimulator = () => {
    const [selectedScenario, setSelectedScenario] = useState('email')
    const [userResponse, setUserResponse] = useState('')
    const [feedback, setFeedback] = useState('')
    const [showFeedback, setShowFeedback] = useState(false)

    const scenarios = {
        email: {
            title: '📧 Email Writing Simulator',
            prompt: 'Your manager needs a project status update. Write a professional email.',
            examples: {
                poor: 'hey boss, the project is going ok i guess. stuff is happening. will tell u when done',
                good: 'Hi [Manager\'s Name],\n\nI wanted to provide you with a project status update. The project is progressing well, and we are on track to meet the deadline. Currently, we have completed 70% of the deliverables, and the remaining tasks are scheduled for completion by [Date].\n\nKey accomplishments this week:\n- Completed module A and B testing\n- Resolved critical bug in database integration\n- Prepared documentation draft\n\nPlease let me know if you need any additional information.\n\nBest regards,\n[Your Name]'
            },
            tip: '✓ Use professional greeting and closing\n✓ Be specific with details and timelines\n✓ Use clear structure with bullet points\n✓ Maintain professional tone throughout'
        },
        presentation: {
            title: '🎤 Presentation Opening Simulator',
            prompt: 'You have 30 seconds to open a presentation on "Professional Communication". What would you say?',
            examples: {
                poor: 'Um, so like, I\'m gonna talk about communication today. It\'s pretty important and stuff. Let\'s start with... uh... I don\'t know, let\'s just see.',
                good: 'Good morning everyone. Thank you for being here. Today, I\'ll share insights on professional communication that can transform how we collaborate and lead. We\'ll explore three key areas: effective listening, clear message delivery, and building trust. By the end of this session, you\'ll have practical tools to enhance your workplace communication. Let\'s begin.'
            },
            tip: '✓ Start with a confident greeting\n✓ State your topic and relevance clearly\n✓ Outline what audience will learn\n✓ Use purposeful pauses, avoid filler words\n✓ Maintain eye contact and open posture'
        },
        feedback: {
            title: '💬 Delivering Difficult Feedback Simulator',
            prompt: 'A team member\'s work quality has declined. How do you provide constructive feedback?',
            examples: {
                poor: 'Your work has been terrible lately. You\'re not meeting expectations and everyone\'s noticing. You need to do better or there will be consequences.',
                good: 'I\'d like to discuss your recent project work. I\'ve noticed the quality isn\'t matching your usual standards, and I\'m concerned. Can you help me understand what\'s going on? I value your work and want to support you in getting back on track. What resources or help do you need?'
            },
            tip: '✓ Focus on specific behaviors, not personality\n✓ Express concern and support\n✓ Ask for their perspective\n✓ Offer solutions and resources\n✓ End on a positive, forward-looking note'
        }
    }

    const handleCheckResponse = () => {
        if (userResponse.trim().length < 20) {
            setFeedback('Please provide a more detailed response to analyze.')
            setShowFeedback(true)
            return
        }

        const length = userResponse.length
        const hasStructure = userResponse.includes('\n') || userResponse.split(' ').length > 30
        const isProfessional = !userResponse.includes('um,') && !userResponse.includes('gonna') && !userResponse.includes('u ')

        let score = 0
        let tips = []

        if (length > 100) score += 20
        if (hasStructure) {
            score += 25
            tips.push('✓ Good structure detected')
        }
        if (isProfessional) {
            score += 25
            tips.push('✓ Professional tone maintained')
        }
        if (userResponse.includes('please') || userResponse.includes('thank')) {
            score += 15
            tips.push('✓ Courteous language used')
        }
        if (userResponse.includes('specific') || userResponse.length > 200) {
            score += 15
            tips.push('✓ Appropriate level of detail')
        }

        let analysis = `📊 Response Analysis:\nScore: ${score}/100\n\n`
        analysis += tips.join('\n') + '\n\n'
        
        if (score < 60) {
            analysis += '💡 Suggestions:\n- Consider adding more professional phrasing\n- Include more specific details\n- Check structure and clarity\n\n'
        } else if (score < 80) {
            analysis += '💡 Suggestions:\n- Good start! Add more concrete examples\n- Consider alternative wording for impact\n\n'
        } else {
            analysis += '✨ Excellent work! Your response demonstrates strong professional communication skills.\n\n'
        }

        analysis += `Compare with best practice:\n---\n${scenarios[selectedScenario].examples.good}`

        setFeedback(analysis)
        setShowFeedback(true)
    }

    const currentScenario = scenarios[selectedScenario]

    return (
        <div className="simulator-container" style={{ margin: '20px 0', animation: 'slideInBottom 0.6s ease' }}>
            <style>{`
                .simulator-container {
                    background: linear-gradient(135deg, #f8f9ff 0%, #f0f3ff 100%);
                    border: 2px solid #667eea;
                    border-radius: 12px;
                    padding: 25px;
                    box-shadow: 0 4px 16px rgba(102, 126, 234, 0.2);
                }

                .scenario-selector {
                    display: flex;
                    gap: 10px;
                    margin-bottom: 20px;
                    flex-wrap: wrap;
                }

                .scenario-btn {
                    padding: 10px 16px;
                    border: 2px solid #667eea;
                    background: white;
                    color: #667eea;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-weight: 600;
                    font-size: 0.9em;
                }

                .scenario-btn:hover {
                    background: #667eea;
                    color: white;
                    transform: translateY(-2px);
                }

                .scenario-btn.active {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
                }

                .simulator-title {
                    color: #2c3e50;
                    font-size: 1.3em;
                    font-weight: 700;
                    margin-bottom: 15px;
                    border-left: 4px solid #667eea;
                    padding-left: 12px;
                }

                .prompt-box {
                    background: white;
                    border-left: 4px solid #ff6b6b;
                    padding: 15px;
                    border-radius: 6px;
                    margin-bottom: 15px;
                    font-weight: 500;
                    color: #2c3e50;
                }

                .response-area {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    margin-bottom: 15px;
                }

                .response-textarea {
                    width: 100%;
                    min-height: 120px;
                    padding: 12px;
                    border: 2px solid #667eea;
                    border-radius: 8px;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    font-size: 1em;
                    resize: vertical;
                    transition: all 0.3s ease;
                }

                .response-textarea:focus {
                    outline: none;
                    border-color: #764ba2;
                    box-shadow: 0 0 10px rgba(102, 126, 234, 0.3);
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

                .btn-secondary {
                    background: #f0f0f0;
                    color: #333;
                    border: 1px solid #ddd;
                }

                .btn-secondary:hover {
                    background: #e0e0e0;
                }

                .feedback-box {
                    background: white;
                    border-left: 4px solid #4ecdc4;
                    padding: 15px;
                    border-radius: 8px;
                    margin-top: 15px;
                    white-space: pre-wrap;
                    color: #2c3e50;
                    font-size: 0.95em;
                    line-height: 1.6;
                    animation: slideInBottom 0.4s ease;
                }

                .tip-box {
                    background: linear-gradient(135deg, #ffd93d15 0%, #ffd93d08 100%);
                    border-left: 4px solid #ffd93d;
                    padding: 12px;
                    border-radius: 6px;
                    margin-top: 12px;
                    white-space: pre-wrap;
                    color: #2c3e50;
                    font-size: 0.9em;
                    line-height: 1.5;
                }

                .example-box {
                    background: white;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    padding: 12px;
                    margin-top: 12px;
                    font-size: 0.9em;
                }

                .example-label {
                    font-weight: 600;
                    color: #667eea;
                    margin-bottom: 6px;
                }

                .example-text {
                    color: #555;
                    font-style: italic;
                    white-space: pre-wrap;
                }
            `}</style>

            <div className="scenario-selector">
                {Object.entries(scenarios).map(([key, scenario]) => (
                    <button
                        key={key}
                        className={`scenario-btn ${selectedScenario === key ? 'active' : ''}`}
                        onClick={() => {
                            setSelectedScenario(key)
                            setUserResponse('')
                            setShowFeedback(false)
                        }}
                    >
                        {scenario.title.split(' ')[0]} {scenario.title.split(' ')[1]}
                    </button>
                ))}
            </div>

            <div className="simulator-title">{currentScenario.title}</div>

            <div className="prompt-box">{currentScenario.prompt}</div>

            <div className="response-area">
                <label style={{ fontWeight: 600, color: '#2c3e50' }}>Your Response:</label>
                <textarea
                    className="response-textarea"
                    value={userResponse}
                    onChange={(e) => setUserResponse(e.target.value)}
                    placeholder="Type your response here..."
                />
            </div>

            <div className="button-group">
                <button className="btn btn-primary" onClick={handleCheckResponse}>
                    📊 Analyze Response
                </button>
                <button className="btn btn-secondary" onClick={() => setUserResponse('')}>
                    Clear
                </button>
            </div>

            {showFeedback && (
                <>
                    <div className="feedback-box">{feedback}</div>
                    <div className="tip-box">{currentScenario.tip}</div>
                </>
            )}

            <div style={{ marginTop: 15 }}>
                <details style={{ marginTop: 12 }}>
                    <summary style={{ cursor: 'pointer', fontWeight: 600, color: '#667eea', padding: '10px', backgroundColor: '#f8f9ff', borderRadius: '6px' }}>
                        👀 View Example Responses
                    </summary>
                    <div style={{ padding: '12px', marginTop: '10px' }}>
                        <div className="example-box">
                            <div className="example-label">❌ Needs Improvement:</div>
                            <div className="example-text">{currentScenario.examples.poor}</div>
                        </div>
                        <div className="example-box" style={{ marginTop: '12px' }}>
                            <div className="example-label">✅ Best Practice:</div>
                            <div className="example-text">{currentScenario.examples.good}</div>
                        </div>
                    </div>
                </details>
            </div>
        </div>
    )
}

export default CommunicationSimulator
