import React, { useEffect, useState } from 'react'
import Background from './Component/Background/Background.jsx';
import Navbar from './Component/Navbar/Navbar.jsx';
import Hero from './Component/Hero/Hero.jsx';

const App = () => {
  let heroData = [
    {text1:"Drive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:"your passions"},
  ]
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus,setPlayStutas] = useState(false);
  
  useEffect(()=>{
    setInterval(() => {
      setHeroCount((count)=>{return count==2?0:count+1})
    }, 3000);
  },[])
  return (
    <div>
      <Background playStatus = {playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
      setPlayStutas = {setPlayStutas}
      heroData = {heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount = {setHeroCount}
      playStatus = {playStatus}/>
    </div>
  )
}

export default App