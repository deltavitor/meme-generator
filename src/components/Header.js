import React from "react"

import TrollFaceIcon from "../images/troll-face-icon.svg"

function Header() {
  return (
    <header>
      <img className="header--icon" src={TrollFaceIcon} />
      <h1 className="header--title">Meme Generator</h1>
      <h2 className="header--subtitle">React Course - Project 3</h2>
    </header>
  )
}

export default Header
