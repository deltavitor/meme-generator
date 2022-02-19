import React from "react"

function Meme() {
  return(
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input"></input>
        <input type="text" placeholder="Bottom text" className="form--input"></input>
        <button className="form--submit">Get a new meme image 🖼</button>
      </div>
    </main>
  )
}

export default Meme
