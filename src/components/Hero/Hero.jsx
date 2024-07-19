import React from 'react'
import './Hero.css'
import arrow_btn from '../../assets/Assets/arrow_btn.png'
import play_icon from '../../assets/Assets/play_icon.png'
import pause_icon from '../../assets/Assets/pause_icon.png'

const Hero = ({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) => {
  return (
    <div className='hero'>
        <div className='hero-text'>
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
        </div>
        <div className='hero-explore'>
            <p>Explore the Diving</p>
            <img src={arrow_btn}></img>
        </div>
        <div className='hero-dot-play'>
            <ul className='hero-dots'>
                <li className={heroCount===0?"hero-dot black":"hero-dot"} onClick={() => {setHeroCount(0)}}></li>
                <li className={heroCount===1?"hero-dot black":"hero-dot"} onClick={() =>{setHeroCount(1)}}></li>
                <li className={heroCount===2?"hero-dot black":"hero-dot"} onClick={() => {setHeroCount(2)}}></li>
            </ul>
            <div className='hero-play'>
                <img onClick={() =>setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon}></img>
                <p>See the video</p>
            </div>
        </div>
    </div>
  )
}

export default Hero