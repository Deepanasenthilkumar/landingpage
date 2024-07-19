import React from 'react'
import './Background.css'
import video from '../../assets/Assets/video.mp4'
import image1 from '../../assets/Assets/image1.jpg'
import image2 from '../../assets/Assets/image2.jpg'
import image3 from '../../assets/Assets/image3.jpg'

const Background = ({playStatus,heroCount}) => {
  
    if(playStatus){
        return(
            <video className='background fade-in' autoPlay loop muted>
                <source src={video} type='video/mp4'></source>
            </video>
        )
    }
    else if(heroCount===0)
    {
        return <img src={image1} className='background fade-in'></img>
    }
    else if(heroCount===1)
    {
        return <img src={image2} className='background fade-in'></img>
    }
    else if(heroCount===2)
    {
        return <img src={image3} className='background fade-in'></img>
    }
}

export default Background