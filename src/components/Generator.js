import React, {Component} from 'react';


class Generator extends Component {

    constructor(props){
        super(props)
    
        this.state = {result: [["...","..."]]};
    }



    result = (event) => {
        event.preventDefault();

        let BookPosition = Math.floor(Math.random() * this.props.bookdata.length);
        let BookResult = this.props.bookdata[BookPosition];
        
        //if there's nothing added do nothing
        if (this.props.bookdata.length == 0) {
            return 
        }

        //else we insert the book in the beginning of our result variable list
        else (
        this.setState( (state) => {
            return state.result.splice(0,0,BookResult)
        }));
        
        
        
        //alert("The Next Book You're Going To Read Is " + this.props.bookdata[BookPosition][0]  +
        //" by " + this.props.bookdata[BookPosition][1]);
        
    }

    render(){
        return(
            <div> 
               
             <button id = "Generate" onClick = {this.result}> Generate </button>
            
             <h1>The Next Book You're Going To Read Is </h1>
             <b></b>
             <h2> {this.state.result[0][0]} by {this.state.result[0][1]} </h2>
            
             </div>


        );
    }
}

export default Generator;