import React, { useState, useRef } from 'react';
import './SoundButton.css';

const SoundButton = ({ label, soundSrc, color }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const handleClick = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
            setIsPlaying(true);

            // Reset playing state after animation/sound
            setTimeout(() => setIsPlaying(false), 200);
        }
    };

    return (
        <button
            className={`sound-button ${isPlaying ? 'active' : ''}`}
            onClick={handleClick}
            style={{ '--btn-color': color || '#00ffcc' }}
        >
            <span className="button-label">{label}</span>
            <audio ref={audioRef} src={soundSrc} />
            <div className="ripple"></div>
        </button>
    );
};

export default SoundButton;
