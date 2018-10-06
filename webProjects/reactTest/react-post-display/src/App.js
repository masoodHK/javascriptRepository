import React, { Component } from 'react';
import img from "./assets/Firefox_wallpaper.png";
import post1 from "./assets/post1.jpeg";
import post2 from "./assets/post2.jpg";
import post3 from "./assets/post3.jpeg";
import avatar from "./assets/index.jpeg";
import Post from './Component/Post';

import './App.css';

class App extends Component {
  render() {
    let imgArr = [img, post1, post2, post3];
    const postObj = {
      created_by: "Masood Hasan Khan",
      avatar: avatar,
      imgArr,
      descirption: "Image Gallery",
      date: Date.now(),
      likes: ['a','b','c','d','e'],
    };
    
    return (
      <div className="App">
        <Post data={postObj} />
      </div>
    );
  }
}

export default App;
