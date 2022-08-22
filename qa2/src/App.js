import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import PropComp from './ComponentWithProps';

function App() {


  return (
    <div className="App">
      <Header/>
      <PropComp/>
      <Footer/>
    </div>
  );
   

}

export default App;
