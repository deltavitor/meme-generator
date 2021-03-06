import React, { useState } from "react"

import memesData from "../memesData.js"

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = useState(memesData)

  function getMemeImage() {
    const random = Math.floor(Math.random() * allMemeImages.data.memes.length)
    const url = allMemeImages.data.memes[random].url
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImage: url
      }
    })
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input"></input>
        <input type="text" placeholder="Bottom text" className="form--input"></input>
        <button onClick={getMemeImage} className="form--submit">Get a new meme image 🖼</button>
      </div>
      <img src={meme.randomImage} className="meme--image"/>
    </main>
  )
}

export default Meme
