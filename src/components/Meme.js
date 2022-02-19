import React from "react"

import memesData from "../memesData.js"

function Meme() {
  function generateMemeImage() {
    const memeId = Math.floor(Math.random() * memesData.data.memes.length)
    const imgUrl = memesData.data.memes[memeId].url
    console.log(imgUrl)
  }
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input"></input>
        <input type="text" placeholder="Bottom text" className="form--input"></input>
        <button onClick={generateMemeImage} className="form--submit">Get a new meme image 🖼</button>
      </div>
    </main>
  )
}

export default Meme
