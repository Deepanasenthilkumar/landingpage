import React, { useCallback, useEffect, useState } from 'react'
import Background from './components/Background/Background'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

const App = () => {

  let heroData= [
    {text1:"Life is either a daring",text2:"Adventure or nothing at all."},
    {text1:"In the deep space of the sea,",text2:"Ihave found my moon."},
    {text1:"The sea, once it casts its spell,",text2:"holds one in its net of wonder forever."},
  ]
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false); 

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar></Navbar>
      <Hero
      setPlayStatus={setPlayStatus}
      heroData={heroData [heroCount]}
      setHeroCount={setHeroCount}
      heroCount={heroCount}
      playStatus={playStatus}
      />
    </div>
  )
}

export default App