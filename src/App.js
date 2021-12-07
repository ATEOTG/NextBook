import {Routes, Route, Link} from "react-router-dom";
import { Component } from "react/cjs/react.production.min";
import './App.css';
import BookSub from "./components/BookSub";
import Generator from "./components/Generator";

class App extends Component {
  
  constructor() {
    super()

    this.state = {booklist: []};
  }
  
  handleSubmit = (booklist) => {
    this.setState( (state) => {
      return state.booklist.push(booklist)});

  }
  
  render() {  
  return (
    <html className="App">
      

      <nav>
          <Link to = "/"> Book </Link>
      </nav>

      <nav>
          <Link to = "generator"> Generator </Link>
      </nav>


      <Routes>
        <Route path = "/" element = {<BookSub handleSubmit = {this.handleSubmit}/>} />
        <Route path = "generator" element = {<Generator bookdata = {this.state.booklist} />} />
      </Routes>
    </html>
  );
 }
}

export default App;
