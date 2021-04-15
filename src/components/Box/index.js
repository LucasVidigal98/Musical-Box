import React, { useState } from 'react';
import './styles.css';
import PlayImage from '../../assets/botao-play.png';
import PauseImage from '../../assets/pausa.png';

import Audio1 from '../../assets/ratinho.mp3';
import Audio2 from '../../assets/batida_rap.mp3';
import Audio3 from '../../assets/ukulele.mp3';
import Audio4 from '../../assets/jazz.mp3';
import Audio5 from '../../assets/samba.mp3';
import Audio6 from '../../assets/brazil.mp3';

function Box() {
    const [statsBtn1, setStatsBtn1] = useState(false);
    const [statsBtn2, setStatsBtn2] = useState(false);
    const [statsBtn3, setStatsBtn3] = useState(false);
    const [statsBtn4, setStatsBtn4] = useState(false);
    const [statsBtn5, setStatsBtn5] = useState(false);
    const [statsBtn6, setStatsBtn6] = useState(false);

    const audio1 = new Audio(Audio1);
    const audio2 = new Audio(Audio2);
    const audio3 = new Audio(Audio3);
    const audio4 = new Audio(Audio4);
    const audio5 = new Audio(Audio5);
    const audio6 = new Audio(Audio6);

    function playBtn1() {
        audio1.play();
        setStatsBtn1(true);
    }

    function pauseBtn1() {
        audio1.pause();
        setStatsBtn1(false);
    }

    function playBtn2() {
        audio2.play();
        setStatsBtn2(true);
    }

    function pauseBtn2() {
        audio2.pause();
        setStatsBtn2(false);
    }

    function playBtn3() {
        audio3.play();
        setStatsBtn3(true);
    }

    function pauseBtn3() {
        audio3.pause();
        setStatsBtn3(false);
    }

    function playBtn4() {
        audio4.play();
        setStatsBtn4(true);
    }

    function pauseBtn4() {
        audio4.pause();
        setStatsBtn4(false);
    }

    function playBtn5() {
        audio5.play();
        setStatsBtn5(true);
    }

    function pauseBtn5() {
        audio5.pause();
        setStatsBtn5(false);
    }

    function playBtn6() {
        audio6.play();
        setStatsBtn6(true);
    }

    function pauseBtn6() {
        audio6.pause();
        setStatsBtn6(false);
    }

    return (
        <div className="box-container">
            <div className="box-content">
                <div className="btn-container">
                    <div className={statsBtn1 ? "disabled enable" : "disabled"}></div>
                    <button className="auidio-btn-play" onClick={playBtn1}>
                        <img  src={PlayImage} alt="Play"/>
                    </button>
                    <button className="audio-btn-pause" onClick={pauseBtn1}>
                        <img  src={PauseImage} alt="Pause"/>
                    </button>
                </div>

                <div className="btn-container">
                    <div className={statsBtn2 ? "disabled enable" : "disabled"}></div>
                    <button className="auidio-btn-play" onClick={playBtn2}>
                        <img  src={PlayImage} alt="Play"/>
                    </button>
                    <button className="audio-btn-pause" onClick={pauseBtn2}>
                        <img  src={PauseImage} alt="Pause"/>
                    </button>
                </div>

                <div className="btn-container">
                    <div className={statsBtn3 ? "disabled enable" : "disabled"}></div>
                    <button className="auidio-btn-play" onClick={playBtn3}>
                        <img  src={PlayImage} alt="Play"/>
                    </button>
                    <button className="audio-btn-pause" onClick={pauseBtn3}>
                        <img  src={PauseImage} alt="Pause"/>
                    </button>
                </div>

                <div className="btn-container">
                    <div className={statsBtn4 ? "disabled enable" : "disabled"}></div>
                    <button className="auidio-btn-play" onClick={playBtn4}>
                        <img  src={PlayImage} alt="Play"/>
                    </button>
                    <button className="audio-btn-pause" onClick={pauseBtn4}>
                        <img  src={PauseImage} alt="Pause"/>
                    </button>
                </div>

                <div className="btn-container">
                    <div className={statsBtn5 ? "disabled enable" : "disabled"}></div>
                    <button className="auidio-btn-play" onClick={playBtn5}>
                        <img  src={PlayImage} alt="Play"/>
                    </button>
                    <button className="audio-btn-pause" onClick={pauseBtn5}>
                        <img  src={PauseImage} alt="Pause"/>
                    </button>
                </div>

                <div className="btn-container">
                    <div className={statsBtn6 ? "disabled enable" : "disabled"}></div>
                    <button className="auidio-btn-play" onClick={playBtn6}>
                        <img  src={PlayImage} alt="Play"/>
                    </button>
                    <button className="audio-btn-pause" onClick={pauseBtn6}>
                        <img  src={PauseImage} alt="Pause"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Box
