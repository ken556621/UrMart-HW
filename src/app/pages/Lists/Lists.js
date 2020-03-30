import React, { Component } from "react";

import List from "./List";
import "./Lists.css";

class Lists extends Component {
    constructor(props){
        super(props);
        this.state = {
            allLists: []
        }
    }

    componentDidMount(){
        this.fetchYoutubeData()
    }

    fetchYoutubeData = () => {
        const API_key = "AIzaSyAOCD6zBK2oD6Lrz3gN5zNxM-GNDatpE-o";
        const url =  "https://www.googleapis.com/youtube/v3/search" +
        "?id=7lCDEYXw3mM" +
        "&key=" + API_key +
        "&part=snippet" +
        "&q=熱門音樂" +
        "&type=video" +
        "&maxResults=10";
        fetch(url)
        .then(res => res.json())
        .then(listsData => {
            console.log(listsData)
            this.setState({
                allLists: listsData.items
            })
        }).catch(err => console.log(err))
    }

    render() { 
        const { allLists } = this.state;
        return (
            <div className="lists-container">
                { 
                    allLists.map(list => {
                        return(
                            <List listData = { list } key = { list.id.videoId } />
                        )
                    })
                }
            </div>
        );
    }
}
 
export default Lists;