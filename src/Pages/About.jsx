import "./About.css"
function About() {
    return (
        <div>
            <div className="Aboutdiv">
                <h1 className="Abouth1">About Us</h1>
                <p className="underh1">We are trusted financial platform dedicated to making loan access simple, fast, and transparent. Our mission is to <br /> <br />empower individuals and small businesses with flexible financing options without the hassle of traditional banking <br /> <br />bureacy.</p>

                <div className="carddiv">
                    <div className="aboutcard">
                        <h3 className="cardh3">Fast Approval</h3>
                        <p>Get decisions in minutes, not <br />weeks</p>
                    </div>
                    <div className="aboutcard">
                        <h3 className="cardh3">No Hidden Fees</h3>
                        <p>100% free to apply - no hidden <br />chaarges</p>
                    </div>
                    <div className="aboutcard">
                        <h3 className="cardh3">Secure & Private</h3>
                        <p>Your data is encrypted and <br />never shared</p>
                    </div>
                </div>
            </div>
    </div>
    )
}
export {About}