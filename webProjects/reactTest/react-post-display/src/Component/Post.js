import React, { Component } from 'react';
import FbImageLibrary from 'react-fb-image-grid';
import FacebookEmoji from "react-facebook-emoji";
import moment from 'moment';

function HoverReaction(props) {
    if(props.hovered) {
        return (
            <div className="display">
                <FacebookEmoji type="like"/>
                <FacebookEmoji type="love"/>
                <FacebookEmoji type="wow"/>
                <FacebookEmoji type="yay"/>
                <FacebookEmoji type="angry"/>
                <FacebookEmoji type="haha"/>
                <FacebookEmoji type="sad"/>
            </div>
        )
    }
    else {
        return null
    }
}

export default class Post extends Component {
    state = {
        comment: "",
        hovered: false
    }

    handleComment = (event) => {
        this.setState({ comment: event.target.value })
    }
    render() {
        const { data } = this.props
        return (
            <div className="post" key="te">
                <div className="user-info container">
                    <img src={data.avatar} alt="Profile"/>
                    <div>
                        <p>{data.created_by}</p>
                        <p>{moment(data.date).fromNow(true)} ago</p>
                    </div>
                </div>
                <FbImageLibrary images={data.imgArr} />
                <div className="feedback">
                    <div className="container">
                        <HoverReaction hovered={this.state.hovered}/>
                        <div className="reaction">
                            <p
                            onMouseEnter={() => this.setState({hovered: true})}
                            onMouseDown={() => this.setState({hovered: false})}>Like</p>
                            <p>Comment</p>
                            <p>Share</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
