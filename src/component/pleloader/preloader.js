import React from "react";
import preloader from './../../acceses/svg_dot_creep_loader_dribbble.gif'
import s from './preloader.module.css';

const Preloader = () => {
    return <img className={ s.preloaderImg } src={preloader} alt="load"></img>
}

export default Preloader;