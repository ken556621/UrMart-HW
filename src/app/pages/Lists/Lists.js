import React, { Component } from "react";

import List from "./List";
import "./Lists.css";

class Lists extends Component {
    constructor(props){
        super(props);
        this.state = {
            allLists: [],
            searchLists: [],
            searchMode: false
        }
    }

    componentDidMount(){
        this.fetchYoutubeData();
        //infinite scroll
        window.addEventListener("scroll", () => {
            console.log("test")
        })
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", () => {
            console.log("test")
        })
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

    handleInput = (e) => {
        if(e.target.value === ""){
            this.setState({
                searchMode: false
            })
            return
        }
        const { allLists } = this.state;
        const regex = new RegExp(e.target.value, 'i');
        const results = allLists.filter(list => list.snippet.title.match(regex));
        this.setState({
            searchLists: results,
            searchMode: true
        })
    }

    render() { 
        const { allLists, searchLists, searchMode } = this.state;
        return (
            <div>
                <div className = "input-field-container">
                    <input className = "input-field" type = "text" onChange = { this.handleInput }></input>
                </div>
                <div className = "lists-container">
                    { 
                        !searchMode ?
                        allLists.map(list => {
                            return(
                                <List listData = { list } key = { list.id.videoId } />
                            )
                        }) :
                        searchLists.map(list => {
                            return(
                                <List listData = { list } key = { list.id.videoId } />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
 
export default Lists;