import React from 'react';

export default function({video, selectVideo}) {

    // if I click on an item - change the video detail to the new video
    
    return (
        <li className='list-group-item' onClick={() => selectVideo(video)}>
            <p> {video.snippet.title} </p>
            <img src={video.snippet.thumbnails.default.url} />
        </li>
    )
}