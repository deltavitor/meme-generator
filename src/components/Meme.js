import React from "react"

function Meme() {
  return(
    <main>
      <form className="form">
        <input type="text" placeholder="Top text" className="form--input"></input>
        <input type="text" placeholder="Bottom text" className="form--input"></input>
        <input type="submit" value="Get a new meme image 🖼" className="form--submit"></input>
      </form>
    </main>
  )
}

export default Meme
