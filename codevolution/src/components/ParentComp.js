import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComponent'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         name:'johndoe'
      }
    }
    componentDidMount(){
        setInterval(() =>{
            this.setState({
                name:'johndoe'
            })
        },2000)
    }
    
  render() {
    console.log('*******Parent component render method*********');
    return (
      <div>
        Parent Component
        {/* <RegComp name={this.state.name}></RegComp> */}
        {/* <PureComp name={this.state.name}></PureComp> */}
        <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
