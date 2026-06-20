// it is the entry points of the app like html page
import Navbar from "./components/Navbar";
import Cards from "./components/cards";
import Footer from "./components/footer";
import "./App.css"
// import "./index.css"

function App() {
  return (
    <>
      {/* call the navbar for display in the application */}
      <Navbar />
      <main>

        <Cards name="Abu Rahat" role="software Engineer" />
        <Cards name="Sourav" role="Full Stack developer" />
        <Cards name="john" role="software Engineer" />
        <Cards name="Elon mask" role="software Engineer" />

      </main>

      {/* Here is call the footer in starter in the applications */}
      <Footer />
    </>
  );
}

export default App;
