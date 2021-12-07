import React, {Component} from 'react';


class Generator extends Component {

    constructor(props){
        super(props)
    }



    result = (event) => {
        event.PreventDefault();
        

    }

    render(){
        return(
            <div> 
               
             <button id = "Generate" onClick = {this.result}> Generate </button>   
                
                
            
            
             </div>


        );
    }
}

export default Generator;