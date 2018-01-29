import React, { Component } from 'react';
import SearchBar from './search-bar';
import VideoDetail from './video-detail';
// import YTsearch from 'youtube-search-api-with-axios';
import YTsearch from 'youtube-api-search';
import VideoList from './video-list';
import _ from 'lodash';


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

    YTsearch({ key: API_KEY, term: term }, (videos) => {
      console.log(videos[0].snippet.title);

      this.setState({ videos: videos, selectedVideo: videos[0] })
    });
  }

  searchYoutubeDebounced = _.debounce(this.searchYoutube, 300)

  selectVideo = (selectedVideo) => {
    this.setState({ selectedVideo })
  }

  render() {
    return (
      <div>
        <SearchBar search={this.searchYoutubeDebounced} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} selectVideo={this.selectVideo} />
      </div>
    );
  }
}
