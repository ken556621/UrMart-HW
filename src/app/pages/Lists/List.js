import React, { Component } from "react";

import "./List.css";

class List extends Component {
    constructor(props){
        super(props);
    }

    render() { 
        const { listData } = this.props;
        return (
            <div className="list-container">
                <a href = { `https://youtu.be/${ listData.id.videoId }` }>
                    <img width = "100%" src = { listData.snippet.thumbnails.medium.url } />
                    <div>
                        { listData.snippet.title }
                    </div>
                </a>
            </div>
        );
    }
}
 
export default List;