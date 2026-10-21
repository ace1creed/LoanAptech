import "./Footer.css"
function Footer(){
    return(
        <>
     <footer>
        <div className="onefoot">
           <div className="twofoot">
            <div className="footpillar">
                <h2>LoanAptech</h2>
                <p>Your trusted partner for fast,transparent,<br />
                and affordable loan solutions.</p>
            </div>
            <div className="footpillar">
                <h3>Quick Links</h3>
                <a href="/home">Home</a>
                <a href="/loan">Loan Products</a>
                <a href="/apply">Apply Now</a>
                <a href="/about">About Us</a>
            </div>
            <div className="footpillar">
                <h3>Support</h3>
                <a href="/contact">Contact Us</a>
                <a href="/faq">FAQ</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </div>
            <div className="footpillar">
                <h3>Get in Touch</h3>
                <a href="mailto:support@loanaptech.com">support@loanaptech.com</a> 
                <a href="tel.html">1 (555) 123-4567</a> 
                <p>Mon-Fri: 9AM-6PM EST</p>
            </div>
           </div>
             <div className="lastp"> 2026 LoanAptech. All rights reserved,<br />
                Liscensed by relevant financial authorities</div>
        </div>
     </footer>
     </>
    );
}
export {Footer}