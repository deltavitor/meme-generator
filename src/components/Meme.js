import React, { useState } from "react"

import memesData from "../memesData.js"

function Meme() {
  const [memeImage, setMemeImage] = useState("")

  function generateMemeImage() {
    const random = Math.floor(Math.random() * memesData.data.memes.length)
    setMemeImage(memesData.data.memes[random].url)
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input"></input>
        <input type="text" placeholder="Bottom text" className="form--input"></input>
        <button onClick={generateMemeImage} className="form--submit">Get a new meme image 🖼</button>
      </div>
      <img src={memeImage} className="meme--image"/>
    </main>
  )
}

export default Meme
