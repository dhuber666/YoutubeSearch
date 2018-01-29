import React from 'react';

export default function({video}) {

    if(!video) {
        console.log('no video')
        return <div className='col-md-8'> Loading </div>
    }
    console.log(video);
    
    const url = `https://youtube.com/embed/${video.id.videoId}`

    return (
        <div className='video-detail col-md-8 media'>
            <div className="embed-responsive embed-responsive-16by9 media-top">
                <iframe src={url} className="embed-responsive-item media-object" />
            </div>
            <div className='media-body'>
                <h5 className='media-heading'>{video.snippet.title} </h5>
                {video.snippet.description}
            </div>

        </div>
    )
}