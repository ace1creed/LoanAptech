import { About } from "./Pages/About.jsx";
import { Home } from "./Pages/Home.jsx";
import { SignUp } from "./Pages/Signup.jsx";
import {Contact} from "./Pages/Contact.jsx";
import {Loan} from "./Pages/loan.jsx"
import {Login} from "./Pages/login.jsx"
import {Routes, Route} from "react-router-dom";
import "./App.css"
import {Footer} from "./component/Footer.jsx"
import {Header} from "./component/navBar.jsx"
// const App = () => {
//   return (
//     <div>
//     Welcome to My React App
//     </div>
//  )
// }
// export {App}
// function MyButton() {
//   const [count, setCount] = useState(0)
//   function handleclick(){
//     // alert("You clicked me")
//     setCount(count+1)
//   }
//   return (
//     <div>
//     <button style={{backgroundColor:"brown",color:"black"}} onClick={handleclick} >I clicked {count} times</button>
//     </div>
//   );
// }
const App = () => {
  return (
  <div>
      <Header />
      {/* <h1>Welcome to my app</h1> */}
      {/* <button style={{backgroundColor: "blue", color: "green", width:"200px",height:"20px"}}></button> */}
      {/* <MyButton /> */}
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/loan" element={<Loan />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <Footer />
  </div>
  );
}
export {App}
