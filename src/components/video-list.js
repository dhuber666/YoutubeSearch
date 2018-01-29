import React from 'react';
import VideoListItem from './video-list-item';

export default function({videos, selectVideo}) {

    const videoList = videos.map((video) => {
        return <VideoListItem key={video.id.videoId} video={video} selectVideo={selectVideo}/> 
    })

    // render a list of videos

    return (
        <ul className='col-md-4 video-list list-group'>{videoList} </ul>
    )
}