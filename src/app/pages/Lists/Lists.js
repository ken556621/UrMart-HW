import React, { Component } from "react";
import { connect } from "react-redux";
import { storeLists } from "../../shared/actions/ListsAction";

import List from "./List";
import "./Lists.css";

class Lists extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            allLists: [],
            keyWord: "熱門音樂",
            nextPageToken: ""
        }
    }

    componentDidMount(){
        //check Redux store

        this.fetchYoutubeData();
        window.addEventListener("scroll", this.fetchNextPageData)
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.fetchNextPageData)
    }

    fetchYoutubeData = () => {
        const { allLists, keyWord, nextPageToken } = this.state;
        const { dispatch } = this.props;
        const eachPageItems = 10;
        const API_key = "AIzaSyDMhr_3DS3sUeAlnx97RoJivz5IkWUmtAc";
        const url =  "https://www.googleapis.com/youtube/v3/search" +
        "?id=7lCDEYXw3mM" +
        "&key=" + API_key +
        "&part=snippet" +
        "&q=" + keyWord +
        "&type=video" +
        "&maxResults="+ eachPageItems + 
        "&pageToken=" + nextPageToken;
        fetch(url)
        .then(res => res.json())
        .then(listsData => {
            this.setState({
                isLoading: false,
                allLists: allLists.concat(listsData.items),
                nextPageToken: listsData.nextPageToken
            });
            dispatch(storeLists(listsData.items, listsData.nextPageToken));
        }).catch(err => console.log(err))
    }

    fetchNextPageData = () => {
        const { isLoading } = this.state;
        if(isLoading){
            return
        }
        if(window.pageYOffset > document.body.offsetHeight - window.innerHeight){
            console.log("Fetch");
            this.setState({
                isLoading: true
            }, this.fetchYoutubeData)
        }
    }

    handleSubmit = (e) => {
        if(e.key === "Enter"){
            this.setState({
                allLists: [],
                keyWord: e.target.value
            }, this.fetchYoutubeData)
        }
    }

    render() { 
        const { allLists } = this.state;
        return (
            <div>
                <div className = "input-field-container">
                    <input className = "input-field" type = "text" onKeyPress = { this.handleSubmit }></input>
                </div>
                <div className = "lists-container">
                    { 
                        allLists.map(list => {
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
 
function mapStateToProps(store){
    return {
        allLists: store.allLists,
        nextPageToken: store.nextPageToken
    }
}
 
export default connect(mapStateToProps)(Lists);