import React from "react"

import TrollFaceIcon from "../images/troll-face-icon.svg"

function Header() {
  return (
    <header>
      <div>
        <img src={TrollFaceIcon} />
        <h1>Meme Generator</h1>
      </div>
      <h2>React Course - Project 3</h2>
    </header>
  )
}

export default Header
