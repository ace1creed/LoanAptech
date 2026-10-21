import "./Contact.css"
function Contact () {
    return (
    <div>
        <div className="Contact">
        <h1 className="contacth1">Contact Us</h1>
        <p className="contactpuh1">We're here to help! Reach out anytime.</p>
        <p className="contactp"><span>Email:</span>support@loanapp.com</p>
        <p className="contactp"><span>Phone:</span>+1 (555) 123-4567</p>
        <p className="contactp"><span>Hours:</span>Mon-Fri 9AM-6PM EST</p>
        
        <form>
            <input className="contactinput" type="text" placeholder="Your Name"/>
            <input className="contactinput" type="email" placeholder="Your Email"/>
            <input className="contactinputmessage" type="text" placeholder="Your Message"/>
            <button className="buttoncontact">Send Message</button>
        </form>
        </div>
    </div>
)
}
export {Contact}