import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }


    incrementCount = () => {
        this.setState((prevState) => ({
          count: prevState.count + 1,
        }));
      };
      
    /** Without using PrevState */
        // incrementCount =() =>{
        //     this.setState({
        //         count: this.state.count + 1
        //     })
        // }
        
  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Click To Count</button>
        {this.state.count}
      </div>
    )
  }
}

export default ClassCounter
