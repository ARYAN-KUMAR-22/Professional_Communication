import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const menuItems = [
        { label: 'Home', path: '/home' },
        { label: 'Professional Communication', path: '/professional_communication' },
        { label: 'Grammar & Language', path: '/grammar' },
        { label: 'Vocabulary Building', path: '/vocabulary' },
        { label: 'Communication Skills', path: '/communication_skills' },
        { label: 'Writing Skills', path: '/writing_skills' },
        { label: 'Basic Writing', path: '/basic_writing_skills' },
        { label: 'Common Errors', path: '/identifying_common_errors' },
        { label: 'Writing Style', path: '/nature_and_style' },
        { label: 'Writing Practices', path: '/writing_practices' },
        { label: 'Oral Communication', path: '/oral_communication' },
        { label: 'Professional Skills', path: '/professional_skills' },
        { label: 'Communication & Soft Skills', path: '/communication_and_soft_skills' },
        { label: 'Other Soft Skills', path: '/other_important_soft_skills' },
        { label: 'Dark Psychology', path: '/dark_psychology' },
        { label: 'Activities', path: '/activities' },
        { label: 'Keywords', path: '/keywords' },
        { label: 'About Us', path: '/about_us' },
    ]

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                ☰
            </button>
            
            <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
                <div className="sidebar-title">
                    📚 Navigation
                </div>
                <ul className="sidebar-menu">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link 
                                to={item.path} 
                                onClick={() => setIsOpen(false)}
                                className="sidebar-link"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    )
}

export default Sidebar
