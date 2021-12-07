import {Routes, Route, Link} from "react-router-dom";
import './App.css';
import BookSub from "./components/BookSub";
import Generator from "./components/Generator";

function App() {
  return (
    <html className="App">
      

      <nav>
          <Link to = "/"> Book </Link>
      </nav>

      <nav>
          <Link to = "generator"> Generator </Link>
      </nav>


      <Routes>
        <Route path = "/" element = {<BookSub />} />
        <Route path = "generator" elemenent = {<Generator />} />
      </Routes>
    </html>
  );
}

export default App;
