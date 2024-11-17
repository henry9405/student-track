import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
            <Link to ='/'>Sign In</Link>
        </li>
        <li>
            <Link to ='/'>Sign Out</Link>
        </li>
      </ul>
    </nav>
  )
}
