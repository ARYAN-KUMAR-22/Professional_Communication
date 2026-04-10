import logo from './logo.jpg'
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div>
                    <a className="an1" href="/home">Home</a>
                    <div className="dropdown">
                        <button className="dropbtn">Professional Communication
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="/professional_communication">Professional Communication Skills</a>
                            <a href="/grammar">Grammar & Language Structure</a>
                            <a href="/vocabulary">Vocabulary Building</a>
                            <a href="/communication_skills">Communication Skills</a>
                            <a href="/writing_skills">Writing Skills</a>
                            <a href="/basic_writing_skills">Basic Writing Skills</a>
                            <a href="/identifying_common_errors">Identifying Common Errors in Writing</a>
                            <a href="/nature_and_style">Nature and Style of Sensible Writing</a>
                            <a href="/writing_practices">Writing Practices and Comprehension</a>
                            <a href="/oral_communication">Oral Communication</a>
                            <a href="/professional_skills">Professional Skills</a>
                            <a href="/communication_and_soft_skills">Communication and Soft Skills</a>
                            <a href="/other_important_soft_skills">Other Important Soft Skills</a>
                            <a href="/dark_psychology">Dark Psychology</a>
                            <a href="/activities">Activities</a>
                        </div>
                    </div>
                    <a className="an1" href="/keywords">Keywords</a>
                    <a className="an1" href="/about_us">About Us</a>
                </div>
                <div className="logo">
                    <img src={logo} alt="logo" className="logoi" />
                </div>
            </div >
        </>
    )
}

export default Navbar;