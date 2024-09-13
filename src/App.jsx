import './App.css'
import { useState } from 'react'
import CookieBox from './components/CookieBox'

function App() {

  const [hasPowerUp, setHasPowerUp] = useState(false)
  const [totalCookies, setTotalCookies] = useState(0)
  const [totalNuggets, setTotalNuggets] = useState(0)
  const [message, setMessage] = useState("")

  const increaseTotalCookies = (amount) => {
    setTotalCookies(totalCookies + amount)
  }

  const increaseTotalNuggets = () => {
    setTotalNuggets(totalNuggets + 1)
  }

  const comprarPowerUp = () => {
    if (totalNuggets >= 10) {
      setHasPowerUp(true)
      setTotalNuggets(totalNuggets - 10)
      setMessage("Comprou um powerup.")
    }
    else {
      setMessage("Não tem nuggets suficientes.")
    }
  }

  return (
    <div className={"App"}>

      <div style={{ color: "white" }}>
        Total 🍪: {totalCookies}
      </div>
      <div style={{ color: "white" }}>
        Total 🟡: {totalNuggets}
      </div>

      <div className='game'>
        <CookieBox hasPowerUp={hasPowerUp} increaseTotalNuggets={increaseTotalNuggets} increaseTotalCookies={increaseTotalCookies} />
        <CookieBox hasPowerUp={hasPowerUp} increaseTotalNuggets={increaseTotalNuggets} increaseTotalCookies={increaseTotalCookies} />
        <CookieBox hasPowerUp={hasPowerUp} increaseTotalNuggets={increaseTotalNuggets} increaseTotalCookies={increaseTotalCookies} />
        <CookieBox hasPowerUp={hasPowerUp} increaseTotalNuggets={increaseTotalNuggets} increaseTotalCookies={increaseTotalCookies} />
        <CookieBox hasPowerUp={hasPowerUp} increaseTotalNuggets={increaseTotalNuggets} increaseTotalCookies={increaseTotalCookies} />
      </div>

      <button onClick={comprarPowerUp}>Comprar PowerUp (10🟡)</button>
      <div className='message'>{message}</div>

    </div>
  )
}

export default App