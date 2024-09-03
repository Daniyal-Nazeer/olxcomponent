import React from 'react'
import Card from '../cpmponent/Card'

const App = () => {
  return (
   <>
<div className="flex justify-center gap-11">
  <Card 
  image="https://images.olx.com.pk/thumbnails/479725934-800x600.webp"
  price="96,000"
  title="Brand New United US-70 bike for sale"
  location="E-16/2, Islamabad"
  days="2 weeks ago"
  />

  <Card 
  image="https://images.olx.com.pk/thumbnails/481661604-800x600.webp"
  price="455,000"
  title="Suzuki GR 150 For Sale | Suzuki Bikes | Bikes | Total Geniune |"
  location="Batapur, Lahore"
  days="6 days ago"
  />
</div>
</>   
  )
}

export default App