import "./Home.css"

function Home(){
    return(
    <div>
        <div class="welcomdiv">
            <h1 class="welcomeh1">Welcome to LoanAptech</h1>
            <p>Get instant personal loans up to $50,000 with low intrest rates and flexible <br/> repayment options.</p>
            <button class="applybutton">Apply Now, It's Free</button>
        </div>
        <div class="container">
         <div class="content">
            <h2 class="cardh2">Lightning <br/> Fast</h2>
            <h3> Lightning Fast <br/>Approval</h3>
            <p class="pcard">Get decision in under 10 minutes</p>
         </div>
         <div class="content">
            <h2 class="cardh2">No <br/>Paperwork</h2>
            <h3>No Paperwork <br/> Required</h3>
            <p class="pcard">100% digital & hassle free <br/> process</p>
         </div>
         <div class="content">
            <h2 class="cardh2">Best <br/> Rates</h2>
            <h3>Lowest Intrest <br/>Rates</h3>
            <p class="pcard">Starting from just 8.99% p.a.</p>
         </div>
        </div>
        <p class="smallp">Already applied? <a href="loanstatus.html">Check Loan Status .</a><a href="Dashboard.html"> Go to Dashboard</a></p>
    </div>
    )
}
export {Home}