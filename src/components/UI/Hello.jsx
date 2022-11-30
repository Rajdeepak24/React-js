import React from 'react'
import './Hello.css'
import { Link } from 'react-router-dom'

function Hello() {
  return (
    <>
      <div>
        <p>hello</p>
        <p>here we go</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ab voluptate adipisci, commodi repellat magni, eligendi facilis, omnis hic tempora repellendus animi ex inventore vitae debitis ad saepe mollitia molestias laudantium? Possimus perspiciatis excepturi voluptas alias, earum dolorem porro corporis?

        <div>
          <ul>
            <li>
              <Link to="/">Home Page </Link>
            </li>
            <li>
              <Link to="/about">About Us </Link>
            </li>
            <li>
              <Link to="/contact">Contact Us </Link>
            </li>
          </ul>
        </div>

      </div>
    </>
  )
}

export default Hello
