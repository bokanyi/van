import React from 'react'
import { navigate } from '../states/routes'

export default function Navbar() {
  return (
    <div className='navbar'>
        <button onClick={() => navigate("/")}>Főoldal</button>
        <button onClick={() => navigate("/about")}>Rólunk</button>
        <button onClick={() => navigate("/contact")}>Kapcsolat</button>
        <button onClick={() => navigate("/references")}>Referenciák</button>
    </div>
  )
}
