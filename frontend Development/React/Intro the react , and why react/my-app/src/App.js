// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './component/navbar';
import Footer from './component/footer';

function App() {
  const [value, setValue] = useState(0)
  return (
    <div className="App">
      {/* we can use a props as a navbar */}
      {/* we can pass the data as components is called as props  */}
      {/* passing data in the components called props */}
      <Navbar logoText="codewithRahat" />
      <div className='value'> {value} </div>
      <button onClick={()=>{setValue(value + 1)}}>Click me</button>
      <Footer />
    </div>
  );
}

export default App;
