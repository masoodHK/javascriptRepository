import React, { Component } from 'react';
import FbImageLibrary from 'react-fb-image-grid';
import FacebookEmoji from "react-facebook-emoji";

export default class Post extends Component {
    render() {

        return (
            <div>
                <FbImageLibrary images={[]}/>
            </div>
        )
    }
}
