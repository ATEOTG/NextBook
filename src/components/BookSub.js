import React, {Component} from 'react';

class BookSub extends Component {
    constructor(props) {
        super(props)

        this.state = {title: "", author: ""};
    }
    
    //anytime a change occurs in the input boxes, it updates the values of our state vars
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
            //calls the function handleSubmit and passes the new list
            this.props.handleSubmit(book),
            //resets the value in our form and state vars
            document.getElementById("myform").reset(),
            this.state.title = "",
            this.state.author = ""
        );
    }



    render() {

    return(

        
        <form id = "myform" > 

            <h4 style = {{fontSize: 40, paddingTop:100}}> Book Title </h4>
            <input type = "text" id ="title" name = "title"  onChange ={this.handleChange}
                  style = {{height: 30, width: 170}}/>
            <br></br>
            
            <h4 style = {{fontSize: 40}}> Author </h4> 
            <input type = "text" id = "author" name = "author"  onChange ={this.handleChange}
                style = {{height: 30, width: 170}} />
        
            
            <br></br>
            
            <button onClick = {this.submitForm}
                style = {{marginTop: 50, height:75,width:245, fontSize: 35}}> Submit </button>
        
        
        </form>


    );
    
    }
}


export default BookSub;