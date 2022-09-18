import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './model/quotes.json'
import Footer from './components/Footer'

function App() {
  const script = document.createElement("script");
  script.src = "https://kit.fontawesome.com/63741094f6.js";
  script.async = true;
  document.head.appendChild(script);

  const colors = ["#00ffff","#8a2be2","#a52a2a","#deb887"]

  const getIndexRamdom = array =>  Math.floor(Math.random()*array.length);

  const firstCoute = quotes[getIndexRamdom(quotes)];
  const firstColor = colors[getIndexRamdom(colors)];



  const [ramdomQuote, setRamdomQuote] = useState(firstCoute)
  const [ramdomColor, setRamdomColor] = useState(firstColor)
   


  const styles = {
    backgroundColor: ramdomColor
  }

  const ramdomAll = ()=>{
    setRamdomQuote(quotes[getIndexRamdom(quotes)]);
    setRamdomColor(colors[getIndexRamdom(colors)]);
  }
  
  
 
  return (
    <div className="App" style={styles}>
      
      <QuoteBox 
        ramdomQuote={ramdomQuote}
        ramdomColor = {ramdomColor}
        ramdomAll = {ramdomAll}
      />

      <Footer />
    </div>
  )
}

export default App
