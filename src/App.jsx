"use client"

import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [noCount, setNoCount] = useState(0)
  const [yesPressed, setYesPressed] = useState(false)

  const handleNoClick = () => {
    setNoCount(noCount + 1)
  }

  const handleYesClick = () => {
    setYesPressed(true)
  }

  const yesButtonSize = noCount * 20 + 16 // Increase size with each "No" click

  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement("div")
      heart.classList.add("heart")
      heart.style.left = Math.random() * 100 + "vw"
      heart.style.animationDuration = Math.random() * 2 + 3 + "s"
      heart.innerText = "❤️"
      document.body.appendChild(heart)

      setTimeout(() => {
        heart.remove()
      }, 5000)
    }

    const heartInterval = setInterval(createHeart, 300)
    return () => clearInterval(heartInterval)
  }, [])

  return (
    <div className="container">
      <div className="content">
        <h1 className="title">¿Quieres ser mi San Valentín?</h1>
        {!yesPressed ? (
          <>
            <div className="buttons">
              <button className="yes-button" onClick={handleYesClick} style={{ fontSize: `${yesButtonSize}px` }}>
                Sí
              </button>
              <button className="no-button" onClick={handleNoClick}>
                No
              </button>
            </div>
            {noCount >= 5 && <p className="message">Di que si o no iremos por la pizza, no tienes otra opcion!!!!</p>}
          </>
        ) : (
          <div className="success-message">
            <p>¡Gracias por decir que sí!</p>
            <p>Te amo con todo mi corazón, cada dia contigo es muy especial.❤️</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App

