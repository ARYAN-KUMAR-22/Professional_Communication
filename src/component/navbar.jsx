import logo from './logo.jpg'
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div>
                    <a className="an1" href="/home">Home</a>
                    {/* <a className="an1" href="#Professional communication">Professional Communication</a> */}
                    <div class="dropdown">
                        <button class="dropbtn">Professional Communication
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                            <a href="/professional_communication">Professional Communication Skills</a>
                            <a href="#Basic Writing Skills">Basic Writing Skills</a>
                            <a href="#Identifying Common Errors in Writing">Identifying Common Errors in Writing</a>
                            <a href="#Nature and Style of Sensible Writing">Nature and Style of Sensible Writing</a>
                            <a href="#Writing practices and Comprehension.">Writing practices and Comprehension.</a>
                            <a href="#Oral Communication">Oral Communication</a>
                            <a href="#Professional Skills">Professional Skills</a>
                            <a href="#Communication and Soft Skills">Communication and Soft Skills</a>
                            <a href="#Other Important Soft Skills.">Other Important Soft Skills.</a>
                            <a href="#Activities."></a>
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