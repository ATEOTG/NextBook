import React, {Component} from 'react';

class BookSub extends Component {
    constructor(props) {
        super(props)

        this.state = {title: "", author: ""};
    }
    
    
    handleChange = event => {
        
       event.preventDefault();
       if (event.target.id == "title") {
           this.state.title = event.target.value;
           
       }
       else if (event.target.id == "author"){
           this.state.author = event.target.value;
           
       }
    }
    
    submitForm = (event) => {
        event.preventDefault();
        let book = [this.state.title, this.state.author];

        return (
            
            this.props.handleSubmit(book),
            document.getElementById("myform").reset(),
            this.state.title = "",
            this.state.author = ""
        );
    }



    render() {

    return(

        
        <form id = "myform" > 

            <h4> Book Title </h4>
            <input type = "text" id ="title" name = "title"  onChange ={this.handleChange}
                 />
            <br></br>
            
            <h4> Author </h4> 
            <input type = "text" id = "author" name = "author"  onChange ={this.handleChange}
            />
            
            <br></br>
            
            <button onClick = {this.submitForm}> Submit </button>
        
        
        </form>


    );
    
    }
}


export default BookSub;