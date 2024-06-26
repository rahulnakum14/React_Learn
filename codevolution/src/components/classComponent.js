import React, { Component } from 'react'

class ClassComponent extends Component {

    constructor(props) {
      super(props)
      this.state = {
         age:5
      }
    }
    
  render() {
    
    return (
      this.state.age >1?<>works</>:<>Notttt</>
    )
  }
}

export default ClassComponent
