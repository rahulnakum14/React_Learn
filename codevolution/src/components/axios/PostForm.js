import axios from "axios";
import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      age: "",
    };
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/posts",this.state).then((res)=>{
        console.log(res);
    })
    .catch((err) =>{
        console.log(err);
    })
  };

  render() {
    const { firstname, age } = this.state;
    return (
      <div>
        <input
          type="text"
          name="firstname"
          value={firstname}
          onChange={this.handleOnChange}
        />
        <input
          type="text"
          name="age"
          value={age}
          onChange={this.handleOnChange}
        />
        <button onClick={this.handleOnSubmit}>Click</button>
      </div>
    );
  }
}

export default PostForm;
