import '../App.css'
import { useState } from 'react'

const kcontainer = (Props) => {
    const [showModal, setShowModal] = useState(false)

    const handleCardClick = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setShowModal(false)
        }
    }

    return (
        <>
            <div className="kc" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
                <div className='c1'>
                    <h3>{Props.Keyword}</h3>
                    <p>{Props.Meaning}</p>
                    <small style={{ color: '#667eea', marginTop: '10px', display: 'block' }}>Click to see synonyms →</small>
                </div>
            </div>

            {showModal && (
                <div className="modal-overlay" onClick={handleOverlayClick}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>{Props.Keyword}</h2>
                            <button className="close-btn" onClick={handleCloseModal}>×</button>
                        </div>
                        
                        <div className="modal-body">
                            <div className="meaning-section">
                                <h4>Definition:</h4>
                                <p>{Props.Meaning}</p>
                            </div>

                            {Props.Synonyms && Props.Synonyms.length > 0 && (
                                <div className="synonyms-section">
                                    <h4>Synonyms ({Props.Synonyms.length}):</h4>
                                    <div className="synonyms-container">
                                        {Props.Synonyms.map((synonym, index) => (
                                            <span key={index} className="synonym-tag">
                                                {synonym}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {Props.Antonyms && Props.Antonyms.length > 0 && (
                                <div className="antonyms-section">
                                    <h4>Antonyms ({Props.Antonyms.length}):</h4>
                                    <div className="antonyms-container">
                                        {Props.Antonyms.map((antonym, index) => (
                                            <span key={index} className="antonym-tag">
                                                {antonym}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="modal-footer">
                            <button className="btn-close" onClick={handleCloseModal}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default kcontainer;