import React, { Component } from 'react';
import SearchBar from './search-bar';
import VideoDetail from './video-detail';
import YTsearch from 'youtube-search-api-with-axios';
import VideoList from './video-list';


const API_KEY = 'AIzaSyAf6JZcUa6O_xjHxSAEb-5cBAUnmb2KE0g';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.searchYoutube('drums');
    
  }

  searchYoutube = (term) => {
    YTsearch({key: API_KEY, term: term, maxResults: 5}, (videos) => {
      this.setState({videos: videos, selectedVideo: videos[0]})
    });
  }


  render() {
    return (
      <div>
        <SearchBar search={(term) => this.searchYoutube(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} selectVideo={this.selectVideo}/>
      </div>
    );
  }
}
