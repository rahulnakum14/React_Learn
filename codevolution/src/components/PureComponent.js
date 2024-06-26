import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log('!!!!!!!!!!!!!!!!!!! Pure component render method !!!!!!!!!!!!!!!!!!!!');
    return (
      <div>
        <h1>This is pure component {this.props.name}</h1>
      </div>
    )
  }
}

export default PureComp