import React from 'react';
import SoundButton from './SoundButton';

const getSoundPath = (file) =>
    import.meta.env.DEV
        ? `/sounds/${file}` // http://localhost:5174/sounds/nu01.mp3
        : import.meta.env.BASE_URL + 'sounds/' + file // https://nanoroku.github.io/boco-button/sounds/nu01.mp3

const sounds = [
    { id: 1, label: 'ぬ゙っ゙!!', src: getSoundPath('nu01.mp3'), color: '#ff0055' },
    { id: 2, label: '天才!!', src: getSoundPath('tensai.mp3'), color: '#00ffcc' },
    { id: 3, label: 'あ゙っ゙あ゙っ゙あ゙っ゙!!', src: getSoundPath('a01.mp3'), color: '#ffff00' },
    { id: 4, label: 'ア゙オ゙バぢゃ゙ん゙!!', src: getSoundPath('aobachan.mp3'), color: '#00ccff' },
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
