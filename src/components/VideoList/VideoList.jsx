import React from "react";

import VideoItem from "./VideoItem/VideoItem";

const videoList = props => {
    const renderedList = props.videos.map(video => {
        return (
            <VideoItem
                onVideoSelect={props.onVideoSelect}
                key={video.id.videoId}
                video={video}
            />
        );
    });

    return <div className='ui relaxed divided list'>{renderedList}</div>;
};

export default videoList;
