import axios from "axios";
import React, { Component } from "react";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        this.setState({ posts: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        this is PostList
        {
            posts.length? 
            posts.map((post) => (
                <p key={post.id}>{post.title}</p>
            )):
             <p>No posts available</p>
        }
      </div>
    );
  }
}

export default PostList;
