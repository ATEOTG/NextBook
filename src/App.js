import {Routes, Route, Link} from "react-router-dom";
import { Component } from "react/cjs/react.production.min";
import './App.css';
import BookSub from "./components/BookSub";
import Generator from "./components/Generator";

class App extends Component {
  
  constructor() {
    super()

    this.state = {booklist: [], count: 0, color: "aquamarine" };
  }
  
  // When submit button is clicked, this function will be called
  handleSubmit = (booklist) => {
    // the count increases so that when it reaches a certain number the 
    //background color of our page changes according to count
    this.state.count += 1;
    
    if (this.state.count >= 5 && this.state.count < 10){
        this.state.color = "burlywood";
    }

    else if (this.state.count >= 10 && this.state.count < 15){
      this.state.color = "cadetblue";
    }

    else if (this.state.count >= 15) {
      this.state.color = "coral";
    }

    this.setState( (state) => {
      return state.booklist.push(booklist)});

  }
  
  render() {  
  return (
    <html className="App" style = {{backgroundColor: this.state.color ,textAlign: "center", height:"100vh", minHeight: "100vh"}}>
      

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
