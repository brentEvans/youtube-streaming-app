import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={ () => onVideoSelect(video) } className='VideoItem item'>
            <img 
                alt={video.snippet.title} className='ui image' 
                src={video.snippet.thumbnails.medium.url}
            />
            <div className='content'>
                <div className='header'>{video.snippet.title}</div>
            </div>
        </div>
    );
}

export default VideoItem;


// to pass anything up from children to parents, use a callback!
    // the callback must be passed down from the parent with which you want to communicate (right?)