import React from 'react';
import SoundButton from './SoundButton';

const sounds = [
    { id: 1, label: 'ぬ゙っ゙!!', src: '/sounds/nu01.mp3', color: '#ff0055' },
    // { id: 2, label: 'Wow', src: '/sounds/wow.mp3', color: '#00ffcc' },
    // { id: 3, label: 'Boing', src: '/sounds/boing.mp3', color: '#ffff00' },
    // { id: 4, label: 'Clap', src: '/sounds/clap.mp3', color: '#00ccff' },
    // { id: 5, label: 'Drum', src: '/sounds/drum.mp3', color: '#ff9900' },
    // { id: 6, label: 'Bass', src: '/sounds/bass.mp3', color: '#cc00ff' },
    // { id: 7, label: 'Synth', src: '/sounds/synth.mp3', color: '#00ff00' },
    // { id: 8, label: 'Laser', src: '/sounds/laser.mp3', color: '#ff0000' },
];

const SoundBoard = () => {
    return (
        <div className="sound-board">
            <div className="sound-grid">
                {sounds.map((sound) => (
                    <SoundButton
                        key={sound.id}
                        label={sound.label}
                        soundSrc={sound.src}
                        color={sound.color}
                    />
                ))}
            </div>
        </div>
    );
};

export default SoundBoard;
