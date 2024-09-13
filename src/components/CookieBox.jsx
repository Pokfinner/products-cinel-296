import React from 'react'
import { useState } from 'react'

// No clique, implementar a probabilidade de:

// em 1 em cada 30 cliques, estourar o número de cookies
// e de pepitas (ambos passam a zero)

// em 1 em cada 50 cliques, ganhar o estado "lucky"
// que passa a aumentar 2 cookies por clique
// (alterar o fundo de cor)

function CookieBox(props) {

    const [cookies, setCookies] = useState(0)
    const [nuggets, setNuggets] = useState(0)

    const { increaseTotalCookies, increaseTotalNuggets, hasPowerUp } = props

    const handleClick = () => {

        if (Math.random() < 0.2) {
            setNuggets(nuggets + 1)
            increaseTotalNuggets()
        }

        if (hasPowerUp) {
            setCookies(cookies + 2)
            increaseTotalCookies(2)
        }
        else {
            setCookies(cookies + 1)
            increaseTotalCookies(1)
        }


    }

    let backgroundColor = cookies >= 50 ? "#fcba03" : "gray"

    return (
        <button onClick={handleClick} style={{ backgroundColor }}>
            <div>Cookies: {cookies}</div>

            {nuggets > 0 && <div className='nuggets'>{nuggets} {nuggets === 1 ? "nugget" : "nuggets"} 🟡!</div>}
        </button>
    )
}

export default CookieBox