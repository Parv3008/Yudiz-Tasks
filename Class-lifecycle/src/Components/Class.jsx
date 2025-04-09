import React, { Component } from 'react'

export default class Class extends Component {

    constructor(){
        super();
        this.state = {
            count : 0 
        }        
    }

    componentDidMount(){
        console.log("Component mounted");
     }

    componentDidUpdate(prevProps, prevState){
        console.log(this.state.count);
        console.log("Component updated");
    }
  
    componentWillUnmount(){
        console.log("Component unmounted");  
    }

  render() {
    return (
      <div>
        <h1>Class Component:</h1>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.setState({count: this.state.count + 1})}>Increment</button>
        <button onClick={() => this.setState({count: this.state.count - 1})}>Decrement</button>
      </div>
    );
  }
}
