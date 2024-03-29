import React from "react";

const videoDetail = props => {
    if (!props.video) {
        return <div>Loading...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;

    return (
        <div>
            <div className='ui embed'>
                <iframe title='Video Player' src={videoSrc} />
            </div>
            <div className='ui segment'>
                <h4>{props.video.snippet.title}</h4>
                <p>{props.video.snippet.description}</p>
            </div>
        </div>
    );
};

export default videoDetail;
