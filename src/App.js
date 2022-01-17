
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/AboutUs";
import Question from "./components/Questions";

function App() {

  return (
    <>
    <Header/>
    <div className="bg-image">
      <div className="row">
       <div className= "margintop col-sm-12 col-md-6 col-lg-6 col-xl-6">
      <h1>Powerful </h1>
    <h2>Cryptocurrency</h2>
    <h2>Platform</h2>
    

    <p className= "mt-5">The most complete crypto ICO template of 2021
      on themeforest to launch your ICO ! 
    </p>

    <div className='p-2 mt-3'>
      <button type = "button" className='btn btn-warning p-2 ml-3 mx-3'>White Paper</button>
      <button type = "button" className='btn btn-warning p-2  ml-3'>Buy Tokens</button>
    </div>
    </div>
    </div>
    </div>
    <About/>
    <Question/>
    <Footer/>
    </>
  );
} 

export default App;
