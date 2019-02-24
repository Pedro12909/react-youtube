import React from "react";

import styles from "./VideoItem.module.css";

const videoItem = props => {
    return (
        <div
            onClick={() => props.onVideoSelect(props.video)}
            className={["item", styles.VideoItem].join(" ")}
        >
            <img
                className={["ui", "image", styles.Image].join(" ")}
                src={props.video.snippet.thumbnails.medium.url}
                alt='Thumbnail'
            />
            <div className='content'>
                <div className='header'>{props.video.snippet.title}</div>
            </div>
        </div>
    );
};

export default videoItem;
