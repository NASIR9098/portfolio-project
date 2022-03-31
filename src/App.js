import logo from './logo.svg';
import './App.css';
import Firstsection from './components/Firstsection';
import Secondsection from "./components/Secondsection";
import Thirdsection from "./components/Thirdsection";
import Fourthsection from "./components/Fourthsection";
import Fifthsection from "./components/Fifthsection";
import Sixthsection from "./components/Sixthsection";
import Seventhsection from "./components/Seventhsection";
import Eightsection from "./components/Eightsection";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
function App() {
  return (
    <>
      <div className="container-fluid">
        <Menu/>
        <Firstsection />
        <Secondsection />
        <Thirdsection />
        <Fourthsection />
        <Fifthsection />
        <Sixthsection />
        <Seventhsection />
        <Eightsection />
        <Footer />
      </div>
    </>

  );
}

export default App;
