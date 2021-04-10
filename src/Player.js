import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faPause } from '@fortawesome/free-solid-svg-icons';
import "./Player.css"

export default function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    }, [isPlaying]);

    if (props.audio) {
        return (
            <div className="Player">
                <audio ref={audioEl} src={props.audio} onEnded={() => setIsPlaying(false)}>Player</audio>
                <button className="play-btn" onClick={() => setIsPlaying(!isPlaying)}>
                    <FontAwesomeIcon icon={isPlaying ? faPause : faVolumeUp} />
                </button>
            </div >
        );
    } else {
        return null;
    }
}
